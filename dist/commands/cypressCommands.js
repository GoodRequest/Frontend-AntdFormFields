"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.checkFirstCheckBox = exports.clearDropdownSelection = exports.checkSuccessToastMessage = exports.uploadFile = exports.clickDeleteButtonWithConf = exports.clickButton = exports.setSearchBoxValueAndSelectFirstOption = exports.selectOptionDropdown = exports.setInputValue = exports.apiAuth = void 0;
require("cypress-file-upload");
require("cypress-localstorage-commands");
const helper_1 = require("../utils/helper");
const apiAuth = (email, password, url) => {
    cy.log(`Login as ${email}`);
    cy.request({
        method: 'POST',
        url: url,
        body: {
            email,
            password
        }
    }).then(({ body }) => {
        window.localStorage.setItem('access_token', body.accessToken);
        if (body.refreshToken) {
            window.localStorage.setItem('refresh_token', body.refreshToken);
        }
        cy.saveLocalStorage();
    });
};
exports.apiAuth = apiAuth;
const setInputValue = (form, key, value, clear) => {
    const elementId = (0, helper_1.generateElementId)(key, form);
    if (clear) {
        cy.get(elementId).clear().type(value).should('have.value', value);
    }
    else {
        cy.get(elementId).type(value).should('have.value', value);
    }
};
exports.setInputValue = setInputValue;
const selectOptionDropdown = (form, key, value) => {
    const elementId = (0, helper_1.generateElementId)(key, form);
    cy.get(elementId).click();
    if (value) {
        // check for specific value in dropdown
        cy.get('.ant-select-dropdown :not(.ant-select-dropdown-hidden)', { timeout: 10000 })
            .should('be.visible')
            .find('.ant-select-item-option')
            .each((el) => {
            if (el.text() === value) {
                cy.wrap(el).click();
            }
        });
    }
    else {
        // default select first option in list
        cy.get('.ant-select-dropdown :not(.ant-select-dropdown-hidden)', { timeout: 10000 }).should('be.visible').find('.ant-select-item-option').first().click({ force: true });
    }
};
exports.selectOptionDropdown = selectOptionDropdown;
const setSearchBoxValueAndSelectFirstOption = (key, value, selectListKey, form, googleGeocoding, clear) => {
    const elementId = (0, helper_1.generateElementId)(key, form);
    if (clear) {
        cy.get(elementId).clear().type(value).should('have.value', value);
    }
    else {
        cy.get(elementId).type(value).should('have.value', value);
    }
    cy.get(selectListKey, { timeout: 10000 }).should('be.visible');
    // select option for google geocoding list
    if (googleGeocoding) {
        cy.get(elementId).type('{downarrow}');
    }
    cy.get(elementId).type('{enter}');
};
exports.setSearchBoxValueAndSelectFirstOption = setSearchBoxValueAndSelectFirstOption;
const clickButton = (key, form, switchBtn) => {
    const elementId = (0, helper_1.generateElementId)(key, form);
    if (switchBtn) {
        cy.get(elementId).find('button').click();
    }
    else {
        cy.get(elementId).click();
    }
};
exports.clickButton = clickButton;
const clickDeleteButtonWithConf = (form, key = 'delete-btn') => {
    cy.clickButton(key, form);
    // get popover conf box and click confirmation button
    cy.get('.ant-popover-inner-content', { timeout: 10000 }).should('be.visible').find('.ant-popover-buttons > :nth-child(2)').click();
};
exports.clickDeleteButtonWithConf = clickDeleteButtonWithConf;
const uploadFile = (key, filePath, form) => {
    cy.get((0, helper_1.generateElementId)(key, form)).attachFile(filePath);
};
exports.uploadFile = uploadFile;
const checkSuccessToastMessage = () => {
    cy.get('.ant-notification-notice-success .ant-notification-notice-close', { timeout: 10000 }).should('be.visible');
};
exports.checkSuccessToastMessage = checkSuccessToastMessage;
const clearDropdownSelection = (fieldName) => {
    cy.get(`.ant-select[name="${fieldName}"] > span.ant-select-clear`).click({ force: true });
};
exports.clearDropdownSelection = clearDropdownSelection;
const checkFirstCheckBox = (key, form) => {
    const elementId = (0, helper_1.generateElementId)(key, form);
    cy.get(elementId).first().check();
};
exports.checkFirstCheckBox = checkFirstCheckBox;
//# sourceMappingURL=cypressCommands.js.map