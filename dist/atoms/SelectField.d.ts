import { ReactNode } from 'react';
import { FormAction, WrappedFieldProps } from 'redux-form';
import { SelectProps } from 'antd/lib/select';
import { FormItemProps } from 'antd/lib/form/FormItem';
import { FIELD_MODE } from '../utils/enums';
type Action = {
    title: string;
    icon?: ReactNode;
    onAction: () => void;
};
export type Props = {
    indicator: any;
    update?: (value: any, ref: any) => FormAction;
    actions?: Action[] | null;
    allowInfinityScroll?: boolean;
    maxTagLength?: number;
    fieldMode?: FIELD_MODE;
    maxTagsLimit?: number;
    backgroundColor?: string;
    showErrorWhenUntouched?: boolean;
    hideHelp?: boolean;
    hasExtra?: boolean;
    /** Klúč podľa ktorého sa vytiahnu dáta v onSearch */
    dataSourcePath?: string;
    /** propa urcena predovsetkym pre filtre, kedy mozeme skopirovat URL na novy TAB
     *  propa zabezpeci spravne initializovanie z query filtra a formu filtra (forcne dotiahnutie options dat pre select)
     *  posielat len vtedy ak mame v selecte search a dotahujeme vsetky data (spravidla vtedy ked nie je BE vyhladavanie, alebo neexistuje paginacia)
     */
    onDidMountSearch?: boolean;
    /**
     * Propa renderuje labels vo vnútri vstupného poľa
     * Use case: po vybraní položky z dropdown chcem aby sa položka vyrenderovala do inputu nezávysle od toho ako sa renderuje v dropdowne
     */
    renderInnerLabel?: (option: any, parentOpt: any) => ReactNode | string;
    emptyText?: string;
    itemRef?: any;
    autoBlur?: boolean;
    readOnly?: boolean;
    disableTpStyles?: boolean;
    disableMenuItemSelectedIcon?: boolean;
    onSelect?: (opt: any, option: any, value: any) => any;
    optionRender?: any;
} & WrappedFieldProps & SelectProps<any> & FormItemProps;
declare const SelectField: (props: Props) => JSX.Element;
export default SelectField;
