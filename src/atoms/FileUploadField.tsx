import { FC, useMemo, memo } from 'react'
import { WrappedFieldProps } from 'redux-form'
import { get, isEmpty, isEqual } from 'lodash'
import cx from 'classnames'
import { Form, Upload, UploadProps, notification } from 'antd'
import { UploadFile } from 'antd/lib/upload/interface'
import { UploadChangeParam } from 'antd/lib/upload'
import { FormItemProps } from 'antd/lib/form/FormItem'
import { UploadOutlined } from '@ant-design/icons'
import { IToastTexts } from '../types/interfaces'
import { getMaxSizeNotifyMessage } from '../utils/helper'

import text from '../utils/text.json'

const { Item } = Form

type Props = WrappedFieldProps &
	FormItemProps &
	UploadProps & {
		pathToFolder: string
		// /** Max file size in Bytes */
		maxFileSize: number
		accessToken: string
		staticMode?: boolean
		uploadBtnText?: string
		afterUploadErrorTitle?: string
		toastTextUploadMaxError?: IToastTexts
	}

/**
 * Umožňuje nahrať jeden súbor, nový súbor nahradí pôvodný
 */
const FileUploadField: FC<Props> = (props) => {
	const {
		label,
		input,
		required,
		meta: { error, touched },
		action,
		pathToFolder,
		staticMode,
		accept,
		maxFileSize,
		disabled,
		accessToken,
		uploadBtnText,
		afterUploadErrorTitle,
		toastTextUploadMaxError
	} = props

	const signedUrl = get(input, 'value.url') ? `${get(input, 'value.url')}?t=${accessToken}` : undefined
	const fileList = input.value
		? [
				{
					...input.value,
					url: signedUrl
				}
		  ]
		: []

	const onChange = async (info: UploadChangeParam<UploadFile<any>>) => {
		if (info.file.status === 'error') {
			// NOTE: if uploaded file has a bad format (eg. txt)
			notification.error({
				message: afterUploadErrorTitle || text.error,
				description: info.file.response?.messages
			})
		}
		if (info.file.status === 'done') {
			const value = {
				id: get(info.file.response, 'file.id'),
				name: get(info.file.response, 'file.displayName'),
				url: `/api/v1/static/${get(info.file.response, 'file.path')}`
			}
			input.onChange(value)
		}
		if (info.file.status === 'uploading' || info.file.status === 'success') {
			input.onChange(info.file)
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

	const uploader = (
		<Upload
			className={'mb-2'}
			headers={{
				Authorization: `Bearer ${accessToken}`
			}}
			action={action}
			accept={accept}
			disabled={disabled}
			data={{ pathToFolder }}
			fileList={fileList}
			onChange={onChange}
			beforeUpload={(file) => {
				if (file.size >= maxFileSize) {
					getMaxSizeNotifyMessage(maxFileSize, toastTextUploadMaxError)
					return false
				}
				return true
			}}
			showUploadList={showUploadList}
			listType='picture-card'
		>
			{!staticMode && (
				<div>
					<UploadOutlined className={`text-xl ${touched && error ? 'text-red-600' : 'text-gray-600'}`} />
					<div className={`text-sm ${touched && error ? 'text-red-600' : 'text-gray-600'}`}>{uploadBtnText || text.upload}</div>
				</div>
			)}
		</Upload>
	)

	return (
		<Item
			className={cx('file-upload-field', { 'hide-overlay': staticMode, disabled })}
			label={label}
			required={required}
			style={{ width: '100%' }}
			help={touched && error}
			validateStatus={touched && error ? 'error' : undefined}
		>
			{staticMode && !input.value && '-'}
			{uploader}
		</Item>
	)
}

// NOTE: Prevent voči animácii po submitnutí formulára
export default memo(FileUploadField, (prevProps, nextProps) => {
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
