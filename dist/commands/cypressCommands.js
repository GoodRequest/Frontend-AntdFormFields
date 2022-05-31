"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
require("cypress-file-upload");
require("cypress-localstorage-commands");
const helper_1 = require("../utils/helper");
Cypress.Commands.add('apiAuth', (email, password) => {
    cy.log(`Login as ${email}`);
    cy.request({
        method: 'POST',
        url: '/api/b2b/admin/auth/login',
        body: {
            email,
            password
        }
    }).then(({ body }) => {
        window.localStorage.setItem('access_token', body.accessToken);
        window.localStorage.setItem('refresh_token', body.refreshToken);
        cy.saveLocalStorage();
    });
});
Cypress.Commands.add('setInputValue', (form, key, value, clear) => {
    const elementId = (0, helper_1.generateElementId)(key, form);
    if (clear) {
        cy.get(elementId).clear().type(value).should('have.value', value);
    }
    else {
        cy.get(elementId).type(value).should('have.value', value);
    }
});
Cypress.Commands.add('selectOptionDropdown', (form, key, value) => {
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
});
Cypress.Commands.add('setSearchBoxValueAndSelectFirstOption', (key, value, selectListKey, form, googleGeocoding, clear) => {
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
});
Cypress.Commands.add('clickButton', (key, form, switchBtn) => {
    const elementId = (0, helper_1.generateElementId)(key, form);
    if (switchBtn) {
        cy.get(elementId).find('button').click();
    }
    else {
        cy.get(elementId).click();
    }
});
Cypress.Commands.add('clickDeleteButtonWithConf', (form, key = 'delete-btn') => {
    cy.clickButton(key, form);
    // get popover conf box and click confirmation button
    cy.get('.ant-popover-inner-content', { timeout: 10000 }).should('be.visible').find('.ant-popover-buttons > :nth-child(2)').click();
});
Cypress.Commands.add('uploadFile', (key, filePath, form) => {
    cy.get((0, helper_1.generateElementId)(key, form)).attachFile(filePath);
});
Cypress.Commands.add('checkSuccessToastMessage', () => {
    cy.get('.ant-notification-notice-success .ant-notification-notice-close', { timeout: 10000 }).should('be.visible');
});
Cypress.Commands.add('clearDropdownSelection', (fieldName) => {
    cy.get(`.ant-select[name="${fieldName}"] > span.ant-select-clear`).click({ force: true });
});
//# sourceMappingURL=cypressCommands.js.map