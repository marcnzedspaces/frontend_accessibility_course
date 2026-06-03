# Exercise 1: Navigation and Orientation Audit

Complete this exercise after the trainer demonstration.

## Code Files

Open this starter file:

[`../code/01-bad-navigation.html`](../code/01-bad-navigation.html)

Use this only after completing the audit:

[`../code/02-good-navigation.html`](../code/02-good-navigation.html)

## Objective

Audit a page navigation structure and identify problems that affect orientation.

The goal is to check whether the page helps users understand:

- where they are
- where they can go
- what page or section is current
- how to move through navigation efficiently

## Instructions

1. Open `01-bad-navigation.html` in the browser.
2. Do not inspect the source code first.
3. Navigate using keyboard and NVDA or JAWS.
4. Check headings, landmarks, links, and current page state.
5. Record issues before looking at the code.
6. Inspect the HTML and identify likely causes.
7. Compare with `02-good-navigation.html` after the audit.

## What to Test

- [ ] Is the main navigation exposed as navigation?
- [ ] Is there a clear page title?
- [ ] Is there one clear main heading?
- [ ] Can the user identify the current page?
- [ ] Is there a breadcrumb trail where useful?
- [ ] Are navigation links meaningful out of context?
- [ ] Is the navigation list structured as a list?
- [ ] Is there a skip link to main content?
- [ ] Does the focus order make sense?
- [ ] Does the page provide enough orientation?

## Code Areas to Inspect After Testing

Look for issues such as:

```html
<div class="menu">
  <span onclick="location.href='/home'">Home</span>
  <span onclick="location.href='/courses'">Courses</span>
</div>
```

and missing current page state:

```html
<a href="/courses">Courses</a>
```

A better current-page pattern may use:

```html
<a href="/courses" aria-current="page">Courses</a>
```

A breadcrumb pattern may use:

```html
<nav aria-label="Breadcrumb">
  <ol>
    <li><a href="/">Home</a></li>
    <li><a href="/courses">Courses</a></li>
    <li aria-current="page">Frontend Accessibility</li>
  </ol>
</nav>
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

## Reflection Questions

1. What helped you understand where you were on the page?
2. What made orientation harder?
3. How did `aria-current` affect the navigation experience?
4. How did the breadcrumb help or not help?
5. What would you include in a navigation accessibility checklist?
