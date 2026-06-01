# Exercise 3: Audit a Bad Web Page

## Complete This After

Complete this exercise after the Instructor demonstrates one example of testing the page, finding an issue, and connecting the issue to the code.

## Practice File

Use:

```text
01-bad-page.html
```

## Objective

To identify accessibility issues by testing a poorly implemented page using keyboard navigation and NVDA or JAWS.

## Estimated Time

60–75 minutes

## Instructions

Open `01-bad-page.html` in the browser.

Do not begin by reading the code. First, test the page as a user.

Use your normal workflow with keyboard navigation and NVDA or JAWS.

---

## Part A: User Experience Audit

Check the following.

```text
[ ] Is the page title meaningful?
[ ] Is the page language defined?
[ ] Can you navigate by headings?
[ ] Can you identify the navigation area?
[ ] Are the navigation items announced as links?
[ ] Can all interactive elements be reached using Tab?
[ ] Can the Register control be activated using keyboard?
[ ] Does the link text make sense out of context?
[ ] Does the image have useful alternative text?
[ ] Is the focus indicator visible?
[ ] Does the page structure feel predictable?
```

---

## Part B: Record Your Findings

Use the table below.

| No. | Issue Found | User Experience Problem | Possible Code Cause | Suggested Fix |
|---|---|---|---|---|
| 1 |  |  |  |  |
| 2 |  |  |  |  |
| 3 |  |  |  |  |
| 4 |  |  |  |  |
| 5 |  |  |  |  |
| 6 |  |  |  |  |

---

## Example Finding

| Issue Found | User Experience Problem | Possible Code Cause | Suggested Fix |
|---|---|---|---|
| Visual heading is not announced as a heading | Cannot navigate to it using heading shortcut | Text is coded as `<div>` | Use `<h1>` or `<h2>` |

---

## Part C: Code Review

After completing the user experience audit, open the code.

For each issue found, identify the related code.

### Issue 1 code causing the problem

```html
Paste or describe the code:
```

### Suggested improved code

```html
Write improved code:
```

---

### Issue 2 code causing the problem

```html
Paste or describe the code:
```

### Suggested improved code

```html
Write improved code:
```

---

### Issue 3 code causing the problem

```html
Paste or describe the code:
```

### Suggested improved code

```html
Write improved code:
```

---

## Part D: Reflection Questions

### 1. Which issue caused the biggest usability problem?

```text
Your answer:
```

### 2. Which issue would be difficult to detect visually?

```text
Your answer:
```

### 3. Which issue could be fixed using semantic HTML?

```text
Your answer:
```

### 4. Which issue might require ARIA?

```text
Your answer:
```

### 5. Which issue should be fixed without ARIA?

```text
Your answer:
```

---

## Key Takeaway

Many accessibility failures are caused by basic frontend implementation choices such as fake buttons, fake links, missing headings, unclear link text, missing alt text, and poor focus handling.
