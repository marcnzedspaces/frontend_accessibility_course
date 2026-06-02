# Exercise 5: Inline Errors and Error Summary

Complete this exercise after the trainer demonstration.

## Code Files

Open this working demo:

[`../code/05-validation-error-summary.html`](../code/05-validation-error-summary.html)

Useful final reference:

[`../code/11-final-registration-solution.html`](../code/11-final-registration-solution.html)

## Objective

Improve form validation by connecting error messages to fields and providing an error summary.

## Key Patterns

An inline error should be specific and connected to the field.

```html
<label for="email">Email address</label>

<input
  id="email"
  name="email"
  type="email"
  aria-invalid="true"
  aria-describedby="email-error">

<p id="email-error">
  Enter an email address in the format name@example.com.
</p>
```

An error summary gives an overview.

```html
<div role="alert" aria-labelledby="error-summary-title" tabindex="-1">
  <h2 id="error-summary-title">There is a problem</h2>

  <ul>
    <li>
      <a href="#email">
        Enter an email address in the format name@example.com.
      </a>
    </li>
  </ul>
</div>
```

## Instructions

1. Open `05-validation-error-summary.html`.
2. Submit the form empty.
3. Observe what happens visually.
4. Test what NVDA or JAWS announces.
5. Inspect the code.
6. Identify how the error summary is created.
7. Identify how each error is connected to its field.
8. Discuss whether the focus behaviour is useful.

## Code Areas to Inspect

Look for:

```html
<div id="error-summary" class="error-summary" role="alert" aria-labelledby="error-summary-title" tabindex="-1" hidden>
```

and:

```html
<p id="email-error" class="error" hidden></p>
```

and in the JavaScript:

```js
input.setAttribute("aria-invalid", "true");
input.setAttribute("aria-describedby", errorId);
summary.focus();
```

## Your Review Notes

### Error Summary

What does the error summary do?

```text
Write your notes here.
```

### Inline Errors

How are inline errors connected to the fields?

```text
Write your notes here.
```

### Focus

Where does focus move after failed submit?

```text
Write your notes here.
```

### Screen Reader Experience

What did NVDA or JAWS announce?

```text
Write your notes here.
```

## Improvement Task

Create or describe an improved error state for this starter code.

```html
<label for="email">Email</label>
<input id="email" name="email" type="email">

<label for="password">Password</label>
<input id="password" name="password" type="password">

<p>Invalid input</p>
```

## Your Improved Code

```html
Write your improved code here.
```

## Testing Checklist

After improving the code, test it.

- [ ] Is the error summary announced?
- [ ] Can the user jump from the error summary to each field?
- [ ] Is each field announced as invalid?
- [ ] Is the related error message announced with the field?
- [ ] Does the error message explain how to fix the problem?
- [ ] Is the focus behaviour predictable?

## Focus Discussion

After failed submit, where should focus move?

Choose one and explain your reasoning.

- Error summary
- First invalid field
- Other strategy

Your answer:

```text
Write your answer here.
```

## Reflection Questions

1. Why is “Invalid input” not enough?
2. What is the difference between an inline error and an error summary?
3. How can validation become noisy for screen reader users?
4. What validation behaviour would you recommend for a production form?
