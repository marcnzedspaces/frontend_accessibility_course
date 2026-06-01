# Exercise 8: ARIA Disclosure Test

## Complete This After

Complete this exercise after the Instructor demonstrates the disclosure pattern and explains `aria-expanded`, `aria-controls`, and `hidden`.

## Practice File

Use:

```text
05-aria.html
```

## Objective

To test a simple ARIA disclosure pattern and understand how ARIA communicates state.

## Estimated Time

30–40 minutes

## Instructions

Open `05-aria.html` in the browser.

Test the disclosure button using keyboard navigation and NVDA or JAWS.

---

## Part A: Testing Checklist

```text
[ ] Can the button be reached using Tab?
[ ] Is it announced as a button?
[ ] Is the expanded or collapsed state announced?
[ ] Can it be activated using Enter?
[ ] Can it be activated using Space?
[ ] When expanded, is the content available?
[ ] When collapsed, is the content hidden?
[ ] Does the button text update clearly?
```

---

## Part B: Code Review

Review the code below.

```html
<button
  type="button"
  id="details-button"
  aria-expanded="false"
  aria-controls="course-details">
  Show course details
</button>

<div id="course-details" hidden>
  <p>This course covers WCAG 2.2, semantic HTML, keyboard access, and ARIA-lite.</p>
</div>
```

Answer the questions.

### 1. What does `<button>` provide automatically?

```text
Your answer:
```

---

### 2. What does `aria-expanded` communicate?

```text
Your answer:
```

---

### 3. What does `aria-controls` communicate?

```text
Your answer:
```

---

### 4. What does `hidden` do?

```text
Your answer:
```

---

### 5. Why is this better than using a clickable `<div>`?

```text
Your answer:
```

---

## Part C: State Change Review

When the button is collapsed:

### What should the button communicate?

```text
Your answer:
```

### Should the content be available to users?

```text
Your answer:
```

---

When the button is expanded:

### What should the button communicate?

```text
Your answer:
```

### Should the content be available to users?

```text
Your answer:
```

---

## Part D: Improve a Bad Disclosure

Review this poor implementation:

```html
<div onclick="showDetails()">Show course details</div>

<div id="course-details">
  <p>This course covers WCAG 2.2 and semantic HTML.</p>
</div>
```

### What are the problems?

```text
Your answer:
```

### Rewrite it using a native button and ARIA state.

```html
Your improved version:
```

---

## Part E: Reflection

### Is ARIA replacing native HTML here, or enhancing it?

```text
Your answer:
```

### When is ARIA useful?

```text
Your answer:
```

### What can go wrong when ARIA is added without correct keyboard behavior?

```text
Your answer:
```

---

## Key Takeaway

ARIA should enhance correct HTML by communicating state, relationships, or meaning. It should not be used to hide or compensate for poor HTML.
