import { FC, useMemo, useRef, useState, memo } from 'react'
import { WrappedFieldProps } from 'redux-form'
import { isEmpty, isEqual, get } from 'lodash'
import { Form, Upload, UploadProps, Modal, notification } from 'antd'
import { UploadFile } from 'antd/lib/upload/interface'
import { UploadChangeParam } from 'antd/lib/upload'
import { FormItemProps } from 'antd/lib/form/FormItem'
import { UploadOutlined } from '@ant-design/icons'

// utils
import {
	formFieldID,
	getImagesFormValues,
	getMaxSizeNotifyMessage,
	ImgUploadParam
} from '../utils/helper'

// types
import { IToastTexts } from '../types/interfaces'

import text from '../utils/text.json'

const { Item } = Form

type Props = WrappedFieldProps &
	FormItemProps &
	UploadProps & {
		category: string
		pathToFolder: string
		uploadFile: any
		postReq: any
		staticMode?: boolean
		// /** Max file size in Bytes */
		maxFileSize: number
		// endpoint which returns signed url for image upload
		signUrl: string
		uploadBtnText?: string
		uploadErrorTitle?: string
		toastTextUploadMaxError?: IToastTexts
		maxFilesText?:  IToastTexts
	}

// export type ImgUploadParam = { [key: string]: { uid: string } }

/**
 * Umoznuje nahrat obrazky na podpisanu url
 */
const ImgUploadField: FC<Props> = (props) => {
	const {
		label,
		input,
		required,
		meta: { form, error, touched },
		staticMode,
		accept = 'image/jpeg,image/png',
		maxFileSize,
		disabled,
		signUrl,
		multiple,
		maxCount = 20,
		category,
		uploadErrorTitle,
		toastTextUploadMaxError,
		maxFilesText,
		uploadBtnText,
		uploadFile,
		postReq
	} = props

	const imagesUrls = useRef<ImgUploadParam>({})
	const [previewUrl, setPreviewUrl] = useState('')
	const onChange = async (info: UploadChangeParam<UploadFile<any>>) => {
		if (info.file.status === 'error') {
			notification.error({
				message: uploadErrorTitle || text.error,
				description: info.file.error.message || text.errMessageFileMAxUpload
			})
		}
		if (info.file.status === 'done') {
			const values = getImagesFormValues(info.fileList, imagesUrls.current)
			input.onChange(values)
		}
		if (info.file.status === 'uploading') {
			input.onChange(info.fileList)
		}
		if (isEmpty(info.fileList)) {
			input.onChange(null)
		}
	}

	const showUploadList = useMemo(
		() => ({
			showRemoveIcon: !staticMode,
			showPreviewIcon: true
		}),
		[staticMode]
	)

	const handleAction = async (file: any) => {
		const { uid, name, size, type } = file
		const files = [{ name, size, mimeType: type }]

		const { data } = await postReq(signUrl as any, undefined, { files, category })
		const imgData = data?.files?.[0]
		imagesUrls.current[uid] = { uid, ...imgData }

		return imgData.signedUrl
	}

	const uploader = (
		<Upload
			id={formFieldID(form, input.name)}
			className={'mb-2'}
			accept={accept}
			action={handleAction}
			disabled={disabled}
			onChange={onChange}
			listType='picture-card'
			multiple={multiple}
			customRequest={uploadFile}
			fileList={input.value || []}
			onPreview={(file) => setPreviewUrl(file.url || get(imagesUrls, `current.[${file.uid}].url`))}
			maxCount={maxCount}
			showUploadList={showUploadList}
			beforeUpload={(file, fileList) => {
				if (file.size >= maxFileSize) {
					getMaxSizeNotifyMessage(maxFileSize, toastTextUploadMaxError)
					return Upload.LIST_IGNORE
				}

				if (fileList.length > maxCount) {
					const { uid: uidCurrent } = file
					const { uid: uidLast } = fileList[fileList.length - 1]
					if (uidCurrent === uidLast)
						notification.error({
							message: maxFilesText?.title || text.error,
							description: `${maxFilesText?.text || text.errMessageFileMAxUpload} Nahrajte maximálne ${ maxCount } súborov`
						})
					return Upload.LIST_IGNORE
				}
				return true
			}}
		>
			{!staticMode && input.value.length < maxCount && (
				<div>
					<UploadOutlined className={`text-xl ${touched && error ? 'text-red-600' : 'text-gray-600'}`} />
					<div className={`text-sm ${touched && error ? 'text-red-600' : 'text-gray-600'}`}>{uploadBtnText || text.upload}</div>
				</div>
			)}
		</Upload>
	)

	return (
		<Item className='w-full' label={label} required={required} help={touched && error ? error : undefined} validateStatus={touched && error ? 'error' : undefined}>
			{staticMode && !input.value && '-'}
			{uploader}
			<Modal visible={!!previewUrl} onCancel={() => setPreviewUrl('')} footer={null}>
				<img key={previewUrl} className={'w-full'} src={previewUrl} alt='preview' />
			</Modal>
		</Item>
	)
}

// NOTE: Prevent voči animácii po submitnutí formulára
export default memo(ImgUploadField, (prevProps, nextProps) => {
	const theSameError = prevProps.meta.error === nextProps.meta.error
	const theSameTouched = prevProps.meta.touched === nextProps.meta.touched

	// NOTE: Shallow fast comparision
	if (!theSameError || !theSameTouched) {
		return false // Rerender
	}

	// NOTE: Deep slower comparision
	const theSameInput = isEqual(prevProps.input, nextProps.input)
	if (!theSameInput) {
		return false // Rerender
	}

	return true
})
