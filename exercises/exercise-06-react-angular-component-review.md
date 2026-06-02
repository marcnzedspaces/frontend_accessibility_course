# Exercise 6: React and Angular Component Review

Complete this exercise after the trainer demonstration.

## Code Files

Review these files:

[`../code/07-react-accessible-textfield.jsx`](../code/07-react-accessible-textfield.jsx)

[`../code/08-angular-accessible-field.component.html`](../code/08-angular-accessible-field.component.html)

[`../code/09-angular-accessible-field.component.ts`](../code/09-angular-accessible-field.component.ts)

## Objective

Review component-based form code and identify where accessibility relationships are preserved or broken.

## Key Idea

React and Angular do not change the accessibility contract.

The final rendered HTML still needs:

- an accessible name
- a correct role
- helpful descriptions
- valid state
- predictable focus behaviour

## Part A: Review a Broken React Component

Review this component.

```jsx
function BadTextField({ label, error }) {
  return (
    <div className="field">
      <p>{label}</p>
      <input type="text" />
      {error && <p>{error}</p>}
    </div>
  );
}
```

## Review Checklist

Identify what is missing.

- [ ] Is there a stable `id`?
- [ ] Is there a real `<label>`?
- [ ] Is the label connected using `htmlFor`?
- [ ] Does the input have an accessible name?
- [ ] Can the input type be configured?
- [ ] Can autocomplete be configured?
- [ ] Does the error message have an `id`?
- [ ] Is the error connected using `aria-describedby`?
- [ ] Is `aria-invalid` used when there is an error?

## Your Notes

```text
Write your review notes here.
```

## Part B: Compare with the React Reference Pattern

Open `07-react-accessible-textfield.jsx`.

Identify how the component handles:

- `id`
- `label`
- `helpText`
- `error`
- `aria-describedby`
- `aria-invalid`
- `autocomplete`

Your notes:

```text
Write your notes here.
```

## Part C: Improve the React Component

Rewrite the broken component so that it supports:

- `id`
- `label`
- `type`
- `autocomplete`
- `helpText`
- `error`
- `aria-describedby`
- `aria-invalid`

```jsx
Write your improved React component here.
```

## Part D: Angular Review

Open:

- `08-angular-accessible-field.component.html`
- `09-angular-accessible-field.component.ts`

Review how the Angular example creates:

- a label/input relationship
- help text ID
- error text ID
- `aria-describedby`
- `aria-invalid`

Your notes:

```text
Write your notes here.
```

## Part E: Improve This Angular Pattern

Review this Angular-style template.

```html
<p>{{ label }}</p>

<input [type]="type">

<p *ngIf="error">
  {{ error }}
</p>
```

Write an improved Angular-style template.

```html
Write your improved Angular template here.
```

Optional TypeScript helper logic:

```ts
Write helper logic here if needed.
```

## Reflection Questions

1. What accessibility relationships are easiest to break in a component?
2. Why are stable IDs important?
3. Why is the final rendered HTML more important than the framework syntax?
4. What should be included in a design-system form component checklist?
