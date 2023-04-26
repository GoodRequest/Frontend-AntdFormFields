import 'cypress-file-upload'
import 'cypress-localstorage-commands'

import { generateElementId } from '../utils/helper'

export const apiAuth = (email: string, password: string, url: string) => {
    cy.log(`Login as ${email}`)
    cy.request({
        method: 'POST',
        url: url,
        body: {
            email,
            password
        }
    }).then(({ body }: any) => {
        window.localStorage.setItem('access_token', body.accessToken)
        if (body.refreshToken) {
            window.localStorage.setItem('refresh_token', body.refreshToken)
        }
        cy.saveLocalStorage()
    })
}

export const setInputValue = (form: string, key: string, value: string, force = false, clear?: boolean) => {
    const elementId: string = generateElementId(key, form)
    if (clear) {
        cy.get(elementId).clear({ force }).type(value, { force }).should('have.value', value)
    } else {
        cy.get(elementId).type(value, { force }).should('have.value', value)
    }
}

export const selectOptionDropdown = (form?: string, key?: string, value?: string, force?: boolean) => {
    const elementId: string = form ? `#${form}-${key}` : `#${key}`
    cy.get(elementId).click({ force })
    if (value) {
        // check for specific value in dropdown
        cy.get('.ant-select-dropdown :not(.ant-select-dropdown-hidden)', { timeout: 10000 })
            .should('be.visible')
            .find('.ant-select-item-option')
            .each((el: any) => {
                if (el.text() === value) {
                    cy.wrap(el).click({ force })
                }
            })
    } else {
        // default select first option in list
        cy.get('.ant-select-dropdown :not(.ant-select-dropdown-hidden)', { timeout: 10000 }).should('be.visible').find('.ant-select-item-option').first().click({ force: true })
    }
}

export const clickDropdownItem = (triggerId: string, dropdownItemId?: string, force?: boolean) => {
    cy.get(triggerId).click({ force })
    if (dropdownItemId) {
        // check for specific value in dropdown
        cy.get('.ant-dropdown :not(.ant-dropdown-hidden)', { timeout: 10000 })
            .should('be.visible')
            .find('.ant-dropdown-menu-item')
            .each((el: any) => {
                if (el.has(dropdownItemId)) {
                    cy.wrap(el).click({ force })
                }
            })
    } else {
        // default select first item in list
        cy.get('.ant-dropdown :not(.ant-dropdown-hidden)', { timeout: 10000 }).should('be.visible').find('.ant-dropdown-menu-item').first().click({ force: true })
    }
}

export const setSearchBoxValueAndSelectFirstOption = (key: string, value: string, selectListKey: string, form?: string, googleGeocoding?: boolean, clear?: boolean, timeout?: number) => {
    const elementId: string = form ? `#${form}-${key}` : `#${key}`
    if (clear) {
        cy.get(elementId).clear().type(value, { timeout }).should('have.value', value)
    } else {
        cy.get(elementId).type(value, { timeout }).should('have.value', value)
    }
    cy.get(selectListKey, { timeout: 10000 }).should('be.visible')
    // select option for google geocoding list
    if (googleGeocoding) {
        cy.get(elementId).type('{downarrow}')
    }
    cy.get(elementId).type('{enter}')
}

export const clickButton = (key: string, form?: string, switchBtn?: boolean) => {
    const elementId: string = generateElementId(key, form)
    if (switchBtn) {
        cy.get(elementId).find('button').click()
    } else {
        cy.get(elementId).click()
    }
}

export const clickDeleteButtonWithConf = (form?: string, key = 'delete-btn') => {
    clickButton(key, form)
    // get popover conf box and click confirmation button
    cy.get('.ant-popover-inner-content', { timeout: 10000 }).should('be.visible').find('.ant-popconfirm-buttons > :nth-child(2)').click()
}

export const uploadFile = (key: string, filePath: string, form?: string) => {
    cy.get(generateElementId(key, form)).attachFile(filePath)
}

export const checkSuccessToastMessage = () => {
    cy.get('.ant-notification-notice-success .ant-notification-notice-close', { timeout: 10000 }).should('be.visible')
}

export const clearDropdownSelection = (fieldName: string) => {
    cy.get(`.ant-select[name="${fieldName}"] > span.ant-select-clear`).click({ force: true })
}

export const checkFirstCheckBox = (key: string, form?: string,) => {
    const elementId: string = generateElementId(key, form)
    cy.get(elementId).first().check()
}


// add all custom test commands for cypress
const initializeCustomCommands = () => {
    Cypress.Commands.addAll({
        apiAuth,
        setInputValue,
        selectOptionDropdown,
        clickDropdownItem,
        setSearchBoxValueAndSelectFirstOption,
        clickButton,
        clickDeleteButtonWithConf,
        uploadFile,
        checkSuccessToastMessage,
        clearDropdownSelection,
        checkFirstCheckBox
    })
}
export default initializeCustomCommands
