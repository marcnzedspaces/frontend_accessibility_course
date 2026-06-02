# Exercise 4: Input Types, Autocomplete, and Masking Decisions

Complete this exercise after the trainer demonstration.

## Code Files

Use this file for discussion:

[`../code/02-good-form.html`](../code/02-good-form.html)

Use this file for validation-timing discussion:

[`../code/06-live-validation-demo.html`](../code/06-live-validation-demo.html)

## Objective

Choose appropriate input types and autocomplete values, then discuss how input masking can affect screen reader users.

## Key Idea

Input type and autocomplete are not only convenience features. They can help browsers, password managers, mobile keyboards, and assistive technologies.

Examples:

```html
<input type="email" autocomplete="email">
<input type="tel" autocomplete="tel">
<input type="text" autocomplete="name">
<input type="password" autocomplete="current-password">
```

## Part A: Review the Good Form

Open `02-good-form.html`.

Inspect the following fields:

- full name
- email address
- phone number
- password

For each field, identify:

- the `type`
- the `autocomplete`
- any connected help text
- whether the screen reader announcement is clear

## Part B: Choose Type and Autocomplete

For each field, choose the most suitable `type` and `autocomplete`.

### Full name

Type:

```text
Write your answer here.
```

Autocomplete:

```text
Write your answer here.
```

### Email address

Type:

```text
Write your answer here.
```

Autocomplete:

```text
Write your answer here.
```

### Mobile number

Type:

```text
Write your answer here.
```

Autocomplete:

```text
Write your answer here.
```

### Current password

Type:

```text
Write your answer here.
```

Autocomplete:

```text
Write your answer here.
```

### New password

Type:

```text
Write your answer here.
```

Autocomplete:

```text
Write your answer here.
```

### One-time code

Type:

```text
Write your answer here.
```

Autocomplete:

```text
Write your answer here.
```

### Street address

Type:

```text
Write your answer here.
```

Autocomplete:

```text
Write your answer here.
```

### Postal code

Type:

```text
Write your answer here.
```

Autocomplete:

```text
Write your answer here.
```

## Part C: Live Validation and Masking Discussion

Open `06-live-validation-demo.html`.

Test the field using keyboard and NVDA or JAWS.

Discuss this alternative behaviour:

```text
As the user types, JavaScript automatically inserts spaces or dashes into the phone number.
```

## Discussion Questions

1. Could automatic formatting create screen reader noise?
2. Should formatting happen while typing, after blur, or after submit?
3. How should the help text explain the expected format?
4. What should happen if the user pastes a phone number?
5. How would you test this with NVDA or JAWS?

## Reflection

Write one recommendation for developers building phone, date, or ID number inputs.

```text
Write your recommendation here.
```
