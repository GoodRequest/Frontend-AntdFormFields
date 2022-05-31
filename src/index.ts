import dayjs from 'dayjs'
import utcPlugin from 'dayjs/plugin/utc'
import timezonePlugin from 'dayjs/plugin/timezone'
import isBetween from 'dayjs/plugin/isBetween'
import minMax from 'dayjs/plugin/minMax'

// cypress commands
import {
    apiAuth, checkFirstCheckBox,
    checkSuccessToastMessage,
    clearDropdownSelection,
    clickButton, clickDeleteButtonWithConf,
    selectOptionDropdown, setInputValue,
    setSearchBoxValueAndSelectFirstOption, uploadFile
} from './commands/cypressCommands'

// dayjs extended plugins
dayjs.extend(isBetween)
dayjs.extend(utcPlugin)
dayjs.extend(timezonePlugin)
dayjs.extend(minMax)

export { default as CheckboxField } from './atoms/CheckboxField'
export { default as CheckboxGroupField } from './atoms/CheckboxGroupField'
export { default as DateField } from './atoms/DateField'
export { default as DateRangeField } from './atoms/DateRangeField'
export { default as DateRangePickerField } from './atoms/DateRangePickerField'
export { default as FileUploadField } from './atoms/FileUploadField'
export { default as ImgUploadField } from './atoms/ImgUploadField'
export { default as InputField } from './atoms/InputField'
export { default as InputMaskedField } from './atoms/InputMaskedField'
export { default as InputNumberField } from './atoms/InputNumberField'
export { default as InputPasswordField } from './atoms/InputPasswordField'
export { default as RadioGroupField } from './atoms/RadioGroupField'
export { default as SelectField } from './atoms/SelectField'
export { default as SwitchField } from './atoms/SwitchField'
export { default as TextareaField } from './atoms/TextareaField'
export { default as TimeField } from './atoms/TimeField'
export { default as TimeRangeField } from './atoms/TimeRangeField'
export { default as ToggleField } from './atoms/ToggleField'

// add all custom test commands for cypress
const initializeCustomCommands = () => {
    Cypress.Commands.addAll({
        apiAuth,
        setInputValue,
        selectOptionDropdown,
        setSearchBoxValueAndSelectFirstOption,
        clickButton,
        clickDeleteButtonWithConf,
        uploadFile,
        checkSuccessToastMessage,
        clearDropdownSelection,
        checkFirstCheckBox
    })
}

// init all commands
initializeCustomCommands()
