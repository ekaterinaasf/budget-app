# budget-app

This web application is very useful for temporarily and fast budget calculation. You can check the rest value after all expenses applied for your pre-defined budget value. You can use whatever currency you wish, as budget app uses absolute decimal system.

Live site should be available [here](https://ekaterinaasf.github.io/budget-app/)
For the creation this [video tutorial](https://www.youtube.com/watch?v=m_HJ3juuFvo) was used. All additional styles, fonts, images etc were taken from this [repository](https://github.com/john-smilga/js-budget-setup).

## DOM

| tag name   | attributes                                                                     | role                                               |
| ---------- | ------------------------------------------------------------------------------ | -------------------------------------------------- |
| `<div>`    | `class="container-fluid"`                                                      | the container for app-budget                       |
| `<h3>`     | `class="text-uppercase mb-4"`                                                  | for the title of budget app                        |
| `<div>`    | `class="budget-feedback alert alert-danger text-capitalize"`                   | place to inform user about invalid values in input |
| `<form>`   | `id="budget-form" class="budget-form"`                                         | form for budget filling in                         |
| `<div>`    | `class="form-group"`                                                           | container for the elements                         |
| `<input>`  | `type="number" class="form-control budget-input" id="budget-input"`            | field for budget value                             |
| `<button>` | `type="submit" class="btn text-capitalize budget-submit" id="budget-submit"`   | action element to submit input value               |
| `<div>`    | `"col-4 text-center mb-2"`                                                     | the container for budget vs expenses board         |
| `<h6>`     | `class="text-uppercase info-title"`                                            | budget information block                           |
| `<h4>`     | `class="text-uppercase mt-2 budget" id="budget"`                               | budget amount block                                |
| `<h6>`     | `class="text-uppercase info-title"`                                            | expenses information block                         |
| `<h4>`     | `class="text-uppercase mt-2 expense" id="expense"`                             | expenses amount block                              |
| `<h6>`     | `class="text-uppercase info-title"`                                            | balance information block                          |
| `<h4>`     | `class="text-uppercase mt-2 balance" id="balance"`                             | balance amount block                               |
| `<div>`    | `class="expense-feedback alert alert-danger text-capitalize"`                  | expenses incorrect input value feedback            |
| `<form>`   | `id="expense-form" class="expense-form"`                                       | form for expenses input                            |
| `<input>`  | `type="text" class="form-control expense-input" id="expense-input"`            | field for expense title                            |
| `<input>`  | `type="number" class="form-control expense-input" id="amount-input"`           | field for expense amount                           |
| `<button>` | `type="submit" class="btn text-capitalize expense-submit" id="expense-submit"` | button for submitting expense information          |
| `<div>`    | `class="expense-list" id="expense-list"`                                       | the container for expense list                     |
| `<h5>`     | `class="list-item"`                                                            | expense title block                                |
| `<h5>`     | `class="list-item"`                                                            | expense value block                                |

## Styling

| class name                             | description                                    | role                                                            |
| -------------------------------------- | ---------------------------------------------- | --------------------------------------------------------------- |
| `:root, body`                          | sets page color styling                        | make divs more visible                                          |
| `.budget-feedback, .expense-feedback`  | set display options                            | make feedback field invisible until they are necessary          |
| `.budget-form, .expense-form,`         | sets padding, border and border-radius         | make input forms more accurate                                  |
| `.budget-submit, .expense-submit`      | sets background, border and color styles       | make submit buttons more visible                                |
| `.showRed, .showGreen, .showBlack`     | sets colors for the values                     | depending on the distance from 0 make value red, black or green |
| `@media screen and (min-width: 992px)` | adapt the content size regarding user's screen | make content adaptable to screen-size                           |

## Listeners

| type       | attached to         | callback                                                                                         |
| ---------- | ------------------- | ------------------------------------------------------------------------------------------------ |
| `'submit'` | `id="budget-form"`  | `event.preventDefault(); ui.submitBudgetForm();`                                                 |
| `'submit'` | `id="expense-form"` | `event.preventDefault(); ui.submitExpenseForm();`                                                |
| `'click'`  | `id="expense-list"` | `ui.editExpense(event.target.parentElement);` or `ui.deleteExpense(event.target.parentElement);` |

## Handlers

| syntax     | parameters              | return value                    | behavior                                            |
| ---------- | ----------------------- | ------------------------------- | --------------------------------------------------- |
| `class UI` | event, element, expense | element(s), total value, update | apply depending on the parameters and called method |
