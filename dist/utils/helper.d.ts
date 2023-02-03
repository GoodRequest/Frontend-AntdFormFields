import { IToastTexts } from '../types/interfaces';
export declare const formFieldID: (form?: string, name?: string) => any;
export declare const fromStringToFloat: (string: string | number | null | undefined) => number | null;
/**
 * Returns null - e.g. input was cleared
 *
 * Returns NaN - e.g. input value is "asdf"
 */
export declare const transformNumberFieldValue: (rawValue: number | string | undefined | null, min?: number, max?: number, precision?: number, notNullValue?: boolean) => any;
export declare const createSlug: (value: string, separator?: string, lower?: boolean) => string;
export declare const getMaxSizeNotifyMessage: (maxFileSize: any, maxFileText: IToastTexts | undefined) => void;
type ImgUploadData = {
    uid: string;
    path: string;
} & any;
export type ImgUploadParam = {
    [key: string]: ImgUploadData;
};
export declare const getImagesFormValues: (fileList: any, filesData: ImgUploadParam) => any[];
export declare const generateElementId: (key: string, form?: string) => string;
export {};
