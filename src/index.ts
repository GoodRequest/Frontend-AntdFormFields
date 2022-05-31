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
