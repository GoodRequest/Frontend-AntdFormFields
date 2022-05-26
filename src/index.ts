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

// atoms
import CheckboxField from './atoms/CheckboxField'
import CheckboxGroupField from './atoms/CheckboxGroupField'
import DateField from './atoms/DateField'
import DateRangeField from './atoms/DateRangeField'
import DateRangePickerField from './atoms/DateRangePickerField'
import FileUploadField from './atoms/FileUploadField'
import ImgUploadField from './atoms/ImgUploadField'
import InputField from './atoms/InputField'
import RadioGroupField from './atoms/RadioGroupField'
import SelectField from './atoms/SelectField'
import SwitchField from './atoms/SwitchField'
import TextareaField from './atoms/TextareaField'
import TimeField from './atoms/TimeField'
import TimeRangeField from './atoms/TimeRangeField'
import ToggleField from './atoms/ToggleField'
import InputMaskedField from './atoms/InputMaskedField'
import InputNumberField from './atoms/InputNumberField'
import InputPasswordField from './atoms/InputPasswordField'

// dayjs extended plugins
dayjs.extend(isBetween)
dayjs.extend(utcPlugin)
dayjs.extend(timezonePlugin)
dayjs.extend(minMax)

module.exports = {
    CheckboxField,
    CheckboxGroupField,
    DateField,
    DateRangeField,
    DateRangePickerField,
    FileUploadField,
    ImgUploadField,
    InputField,
    InputMaskedField,
    InputNumberField,
    InputPasswordField,
    RadioGroupField,
    SelectField,
    SwitchField,
    TextareaField,
    TimeField,
    TimeRangeField,
    ToggleField

}

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
