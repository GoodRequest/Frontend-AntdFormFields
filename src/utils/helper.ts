import { chain, round, replace, isString, isNumber, isFinite, get, map } from 'lodash'
import slugify from 'slugify'
import { BYTE_MULTIPLIER } from './enums'
import { notification } from 'antd'
import { IToastTexts } from '../types/interfaces'
const text = require('../utils/text.json')

export const formFieldID = (form?: string, name?: string) => {
    let id
    if (form && name) {
        // NOTE: element can't be queried if id contains dots
        const fieldSelector = chain(name)
            .filter((char) => char !== ']')
            .map((char) => (char === '[' || char === '.' ? '-' : char))
            .value()
            .join('')
        id = `${form}-${fieldSelector}`
    }
    return id
}

export const fromStringToFloat = (string: string | number | null | undefined): number | null => {
    let result
    if (string && isString(string)) {
        result = parseFloat(replace(string, ',', '.').replace(' ', ''))
    } else if (string) {
        result = Number(string)
    } else {
        result = null
    }

    return result
}

/**
 * Returns null - e.g. input was cleared
 *
 * Returns NaN - e.g. input value is "asdf"
 */
export const transformNumberFieldValue = (rawValue: number | string | undefined | null, min?: number, max?: number, precision?: number, notNullValue?: boolean) => {
    let result = null
    const value = typeof rawValue === 'string' ? fromStringToFloat(rawValue) : rawValue
    if (!value && notNullValue) {
        result = min
    }
    if (isNumber(value) && isFinite(value)) {
        if (isNumber(min) && value < min) {
            result = min
        } else if (isNumber(max) && value > max) {
            result = max
        } else if (isNumber(min) && isNumber(max) && value >= min && value <= max) {
            result = value
        }
    } else if (Number.isNaN(value)) {
        result = NaN
    }

    if (isFinite(result) && isNumber(precision)) {
        result = round(result as number, precision)
    }

    return result
}

export const createSlug = (value: string, separator = '-', lower = true) => {
    if (value) {
        return slugify(value, {
            replacement: separator,
            lower
        })
    }
    return ''
}

export const getMaxSizeNotifyMessage = (maxFileSize: any, maxFileText: IToastTexts | undefined) => {
    let notifyMaxSize
    if (maxFileSize >= BYTE_MULTIPLIER.MEGA) {
        notifyMaxSize = [maxFileSize / BYTE_MULTIPLIER.MEGA, 'MB']
    } else {
        notifyMaxSize = [maxFileSize / BYTE_MULTIPLIER.KILO, 'KB']
    }
    return notification.error({
        message: maxFileText?.title || text.error,
        description: `${maxFileText?.text || text.errMessageFileMAxUpload} ${notifyMaxSize[0]} ${notifyMaxSize[1]}`
    })
}

type ImgUploadData = { uid: string; path: string } & any
export type ImgUploadParam = { [key: string]: ImgUploadData }

export const getImagesFormValues = (fileList: any, filesData: ImgUploadParam) => {
    const values = map(fileList, (file) => {
        const fileData = filesData[get(file, 'uid')]

        return {
            ...file,
            id: get(file, 'id') || fileData?.id,
            url: get(file, 'url') || fileData?.path,
            signedUrl: fileData?.signedUrl
        }
    })
    return values
}

export const generateElementId = (key: string, form?: string) => (form ? `#${form}-${key}` : `#${key}`)
