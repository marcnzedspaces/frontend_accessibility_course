# Exercise 2: Fix Labels and Descriptions

Complete this exercise after the trainer demonstration.

## Code File

Open this starter file:

[`../code/03-labels-descriptions-starter.html`](../code/03-labels-descriptions-starter.html)

Helpful comparison file:

[`../code/02-good-form.html`](../code/02-good-form.html)

## Objective

Improve form fields by adding proper labels, useful input types, autocomplete, and connected help text.

## Key Pattern

A field needs an accessible name. A connected label provides that name.

```html
<label for="email">Email address</label>
<input id="email" name="email" type="email" autocomplete="email">
```

Help text provides extra guidance.

```html
<label for="password">Password</label>
<p id="password-help">Use at least 12 characters.</p>

<input
  id="password"
  name="password"
  type="password"
  autocomplete="new-password"
  aria-describedby="password-help">
```

## Instructions

1. Open `03-labels-descriptions-starter.html`.
2. Test the current form using keyboard and NVDA or JAWS.
3. Identify which fields do not have proper accessible names.
4. Inspect the code.
5. Improve the fields.
6. Retest the form.

## Requirements

Update the code so that:

- [ ] Each input has a proper `<label>`.
- [ ] Each label is connected using `for` and `id`.
- [ ] The email field uses `type="email"`.
- [ ] The password help text has an `id`.
- [ ] The password input uses `aria-describedby`.
- [ ] Useful `autocomplete` values are added.
- [ ] The final result can be tested with NVDA or JAWS.

## Your Improved Code

```html
Write your improved code here.
```

## Testing Checklist

After improving the code, test it.

- [ ] What is announced for the full name field?
- [ ] What is announced for the email field?
- [ ] What is announced for the password field?
- [ ] Is the password help text announced?
- [ ] Is anything repeated unnecessarily?
- [ ] Is anything missing?

## Reflection Questions

1. What is the difference between visible text near an input and a real label?
2. When should `aria-describedby` be used?
3. What does autocomplete improve for the user?
4. How could a React or Angular component accidentally break this pattern?
