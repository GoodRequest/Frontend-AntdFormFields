# antd-form-fields

From this package you can import all basic form fields components and also wrappers for regression testing using cypress framework.

## Implementation

First you need to install the module as dev dependency into your project.
```sh
npm install --save-dev GoodRequest/antd-form-fields
```
### Form fileds
This is all types of form fields which module contains
- CheckboxField, CheckboxGroupField, RadioGroupField
- DateField, DateRangeField, DateRangePickerField, TimeField, TimeRangeField
- FileUploadField, ImdUploadField
- InputField, InputMaskedField, InputNumberField, InputPasswordField, TextareaField
- SwitchField, ToggleField
- SelectField

##### Usage
Import form field in component where you want to use it.
```
import { InputField } from 'antd-form-fields'
```
### Cypress commands
| Type | Selector |
| ------ | ------ |
| API Authentication with access and refresh token | cy.apiAuth() |
| InputField | cy.setInputValue() |
| SelectField | cy.selectOptionDropdown(), cy.clearDropdownSelection() |
| SelectField with search | cy.setSearchBoxValueAndSelectFirstOption() |
| FileUploadField, ImdUploadField  | cy.uploadFile() |
| Button | cy.clickButton () |
| DeleteButton | cy.clickDeleteButtonWithConf() |
| Check success toast message | cy.checkSuccessToastMessage() |
| CheckboxField, CheckboxGroupField, RadioGroupField | cy.checkFirstCheckBox() |

##### Usage
If you want to use form fields selector for cypress tests you need import package and initialize method to  `cypress/support/commands.ts` file
```
import 'antd-form-fields'
import initializeCustomCommands from 'antd-form-fields/dist/commands/cypressCommands'

initializeCustomCommands()
```

## Development
Run storybook to check form fields.

```sh
npm run storybook
```
#### Building for source

For production release:
```sh
npm run build
```