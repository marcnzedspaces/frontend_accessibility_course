# Mini Challenge

## Complete This After

Complete this exercise after the Instructor demonstrates how to improve one small broken section using semantic HTML, meaningful links, and real buttons.

## Practice File

Start with:

```text
06-mini-challenge-starter.html
```

Reference after completion:

```text
07-mini-challenge-solution.html
```

## Objective

To apply all Day 1 concepts by improving a small course landing page.

## Estimated Time

30–45 minutes

## Instructions

Open `06-mini-challenge-starter.html`.

Improve the page using:

- semantic HTML
- keyboard-accessible controls
- meaningful text
- image alternatives
- visible focus
- minimal ARIA

Focus on accessibility and structure before visual styling.

---

## Part A: Requirements

Your completed page should include:

```text
[ ] Meaningful page title
[ ] Correct language attribute
[ ] Skip link
[ ] Header
[ ] Main navigation
[ ] Main content area
[ ] Footer
[ ] One clear h1
[ ] Logical h2 sections
[ ] Meaningful link text
[ ] Real links for navigation
[ ] Real buttons for actions
[ ] Informative image with useful alt text
[ ] Decorative image with empty alt text
[ ] Visible keyboard focus
[ ] One expandable section using aria-expanded
```

---

## Part B: Keyboard Testing

After improving the page, test it with keyboard only.

```text
[ ] Can all interactive elements be reached with Tab?
[ ] Is the focus order logical?
[ ] Is focus visible?
[ ] Do links activate with Enter?
[ ] Do buttons activate with Enter and Space?
```

---

## Part C: Screen Reader Testing

Test the page using NVDA or JAWS.

```text
[ ] Is the page title meaningful?
[ ] Is the page language correct?
[ ] Can the page be navigated by headings?
[ ] Can the page be navigated by landmarks?
[ ] Are links understandable out of context?
[ ] Are buttons clearly named?
[ ] Is expanded/collapsed state announced?
```

---

## Part D: Code Review

Review your code.

```text
[ ] Native HTML is used before ARIA.
[ ] There are no clickable divs or spans.
[ ] Headings are real heading elements.
[ ] Navigation is inside <nav>.
[ ] Main content is inside <main>.
[ ] ARIA is used only where it adds useful meaning.
```

---

## Part E: Before and After Notes

Complete the table.

| Area | Original Problem | Your Improvement |
|---|---|---|
| Page title |  |  |
| Language |  |  |
| Skip link |  |  |
| Navigation |  |  |
| Headings |  |  |
| Links |  |  |
| Buttons |  |  |
| Images |  |  |
| Focus |  |  |
| ARIA |  |  |

---

## Part F: Reflection Questions

### 1. Which fix made the biggest difference to the user experience?

```text
Your answer:
```

---

### 2. Which issue would be most common in real frontend projects?

```text
Your answer:
```

---

### 3. Which issue would be hardest for developers to notice without screen reader testing?

```text
Your answer:
```

---

### 4. Which part was fixed using semantic HTML?

```text
Your answer:
```

---

### 5. Which part needed ARIA?

```text
Your answer:
```

---

### 6. What developer handoff note would you write for this page?

Example:

```text
Use real heading elements for visible section headings. Do not use styled divs as headings.
```

Your handoff note:

```text
Your answer:
```

---

## Suggested Answer Guide

Use this only after attempting the challenge.

Good practices to look for:

```text
[ ] Page has <html lang="en">
[ ] Page has a descriptive <title>
[ ] Skip link points to <main id="main-content">
[ ] Navigation uses <nav>
[ ] Navigation items use <a href="">
[ ] Main page title uses <h1>
[ ] Sections use <h2>
[ ] Actions use <button>
[ ] Links describe destination or purpose
[ ] Informative images have meaningful alt text
[ ] Decorative images use alt=""
[ ] Focus indicator is visible
[ ] Disclosure button uses aria-expanded
[ ] Disclosure content is hidden when collapsed
```

---

## Key Takeaway

The biggest lesson from Day 1:

```text
Most accessibility improvements start with correct HTML.

ARIA should enhance semantic HTML, not replace it.
```
