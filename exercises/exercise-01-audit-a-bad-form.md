# Exercise 1: Audit a Bad Form

Complete this exercise after the trainer demonstration.

## Code File

Open this file:

[`../code/01-bad-form.html`](../code/01-bad-form.html)

Optional comparison file after the audit:

[`../code/02-good-form.html`](../code/02-good-form.html)

## Objective

Audit a poorly implemented form using keyboard navigation and NVDA or JAWS.

Your goal is to identify what is confusing, missing, or broken before inspecting the source code.

## Instructions

1. Open `01-bad-form.html` in the browser.
2. Do not inspect the source code first.
3. Navigate through the form using keyboard only.
4. Test the form using NVDA or JAWS.
5. Record what the screen reader announces.
6. Identify what is missing or confusing.
7. After testing, inspect the code and identify the likely cause.
8. After completing the audit, compare the experience with `02-good-form.html`.

## What to Test

Check the following:

- [ ] Are all inputs announced with clear labels?
- [ ] Are labels programmatically connected to inputs?
- [ ] Are required fields clear?
- [ ] Are radio buttons grouped properly?
- [ ] Is the checkbox label clear?
- [ ] Is the submit control a real button?
- [ ] Are field instructions announced?
- [ ] Are input types appropriate?
- [ ] Is autocomplete used where helpful?

## Code Area to Inspect After Testing

Look for patterns like:

```html
<p>Email</p>
<input type="text">
```

and:

```html
<div class="fake-button" onclick="alert('Submitted')">
  Submit
</div>
```

## Record Your Findings

### Issue 1

User experience problem:

```text
Write your notes here.
```

Likely code cause:

```text
Write your notes here.
```

Suggested fix:

```text
Write your notes here.
```

### Issue 2

User experience problem:

```text
Write your notes here.
```

Likely code cause:

```text
Write your notes here.
```

Suggested fix:

```text
Write your notes here.
```

### Issue 3

User experience problem:

```text
Write your notes here.
```

Likely code cause:

```text
Write your notes here.
```

Suggested fix:

```text
Write your notes here.
```

### Issue 4

User experience problem:

```text
Write your notes here.
```

Likely code cause:

```text
Write your notes here.
```

Suggested fix:

```text
Write your notes here.
```

### Issue 5

User experience problem:

```text
Write your notes here.
```

Likely code cause:

```text
Write your notes here.
```

Suggested fix:

```text
Write your notes here.
```

## Reflection Questions

1. Which problem created the biggest barrier?
2. Which issue would be easiest for a sighted developer to miss?
3. Which issues can be fixed using native HTML?
4. Which issue might require ARIA?
5. What would you tell a frontend developer to change first?
