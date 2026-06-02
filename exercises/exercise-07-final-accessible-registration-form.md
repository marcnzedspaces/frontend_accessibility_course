# Exercise 7: Final Mini Challenge — Accessible Registration Form

Complete this exercise after the trainer demonstration.

## Code Files

Open this starter file:

[`../code/10-final-registration-starter.html`](../code/10-final-registration-starter.html)

Use this only after attempting the challenge:

[`../code/11-final-registration-solution.html`](../code/11-final-registration-solution.html)

Optional framework references:

[`../code/07-react-accessible-textfield.jsx`](../code/07-react-accessible-textfield.jsx)

[`../code/08-angular-accessible-field.component.html`](../code/08-angular-accessible-field.component.html)

[`../code/09-angular-accessible-field.component.ts`](../code/09-angular-accessible-field.component.ts)

## Objective

Build or improve a registration form using the accessible form patterns covered today.

You may complete this as:

- plain HTML
- a React component pattern
- an Angular component pattern
- a design-system checklist and prototype

## Required Form Fields

Your form should include:

- Full name
- Email address
- Phone number
- Password
- Confirm password
- Preferred contact method
- Terms agreement
- Submit button

## Requirements

Your solution should include:

- [ ] Every field has a proper label.
- [ ] Email uses `type="email"` and `autocomplete="email"`.
- [ ] Phone uses `type="tel"` and `autocomplete="tel"`.
- [ ] Password has help text.
- [ ] Password help text is connected using `aria-describedby`.
- [ ] Radio buttons use `fieldset` and `legend`.
- [ ] Terms checkbox has a clear label.
- [ ] Submit is a real `<button>`.
- [ ] Required fields are clearly indicated.
- [ ] Errors are specific and helpful.
- [ ] Invalid fields use `aria-invalid`.
- [ ] Error messages are connected using `aria-describedby`.
- [ ] Error summary appears after failed submit.
- [ ] Focus strategy is discussed or implemented.
- [ ] The form is tested with keyboard and NVDA or JAWS.

## Starter Pattern

Use this field pattern as a reference.

```html
<label for="email">Email address</label>
<p id="email-help">Use the email address you check most often.</p>

<input
  id="email"
  name="email"
  type="email"
  autocomplete="email"
  aria-describedby="email-help">
```

## Your Form Code

```html
Write your form code here.
```

## Optional React Component

If you choose React, write one reusable field component or adapt `07-react-accessible-textfield.jsx`.

```jsx
Write your React component here.
```

## Optional Angular Component

If you choose Angular, write one reusable field template or adapt `08-angular-accessible-field.component.html`.

```html
Write your Angular template here.
```

```ts
Write optional TypeScript logic here.
```

## Testing Checklist

### Keyboard Testing

- [ ] Can every field be reached using keyboard?
- [ ] Is the focus order logical?
- [ ] Is the submit button reachable?
- [ ] Is focus visible?
- [ ] Can radio buttons and checkboxes be operated?

### Screen Reader Testing

- [ ] Are field names announced clearly?
- [ ] Is help text announced where needed?
- [ ] Is the radio group question announced?
- [ ] Are required fields clear?
- [ ] Are invalid fields announced as invalid?
- [ ] Are error messages announced with the related fields?
- [ ] Does the error summary help the user recover?

### Code Review

- [ ] Labels are connected to inputs.
- [ ] IDs are unique and stable.
- [ ] `aria-describedby` points to existing IDs.
- [ ] `aria-invalid` is used only when the field is invalid.
- [ ] Native HTML is used before ARIA.
- [ ] Framework components preserve the rendered HTML relationships.

## Reflection Questions

1. Which part of the form is easiest to break in React or Angular?
2. Which pattern should become reusable?
3. Which screen reader announcement mattered most?
4. What would you put in a developer handoff note?
5. What would you test manually before releasing this form?
