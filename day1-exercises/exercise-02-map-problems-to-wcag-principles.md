# Exercise 2: Mapping Frontend Problems to WCAG Principles

## Complete This After

Complete this exercise after the Instructor demonstrates one example of mapping a frontend problem to a WCAG principle.

## Objective

To translate frontend accessibility problems into WCAG thinking using the POUR principles:

- Perceivable
- Operable
- Understandable
- Robust

## Estimated Time

20–25 minutes

## Instructions

For each problem below, identify which WCAG principle is affected. Some problems may involve more than one principle.

Use the following guide:

| Principle | Meaning |
|---|---|
| Perceivable | The user can detect and understand the content. |
| Operable | The user can navigate and use the interface. |
| Understandable | The content, instructions, and interactions are clear. |
| Robust | The code exposes correct meaning to browsers and assistive technologies. |

---

## Question 1

A button is visible on the page but cannot be reached using the Tab key.

### Affected principle

```text
Your answer:
```

### Reason

```text
Your explanation:
```

---

## Question 2

A heading looks large and bold visually, but it is coded as a `<div>` instead of a heading element.

### Affected principle

```text
Your answer:
```

### Reason

```text
Your explanation:
```

---

## Question 3

A link says only “click here.”

### Affected principle

```text
Your answer:
```

### Reason

```text
Your explanation:
```

---

## Question 4

A chart uses only red and green to show good and bad performance.

### Affected principle

```text
Your answer:
```

### Reason

```text
Your explanation:
```

---

## Question 5

A form error message says only “Invalid input.”

### Affected principle

```text
Your answer:
```

### Reason

```text
Your explanation:
```

---

## Question 6

A menu opens visually, but the screen reader does not announce that it has opened.

### Affected principle

```text
Your answer:
```

### Reason

```text
Your explanation:
```

---

## Part B: Reflection

### Which of the above issues would be easiest for a sighted developer to miss?

```text
Your answer:
```

### Which issue would be easiest to catch with keyboard-only testing?

```text
Your answer:
```

### Which issue would require screen reader testing to understand properly?

```text
Your answer:
```

---

## Suggested Answer Guide

Use this section after you have attempted the exercise.

| Problem | Likely WCAG Principle |
|---|---|
| Button cannot be reached using Tab | Operable |
| Heading coded as `<div>` | Robust / Understandable |
| Link says “click here” | Understandable |
| Red/green-only chart | Perceivable |
| Error says “Invalid input” | Understandable |
| Menu opens but is not announced | Robust / Operable |

---

## Key Takeaway

Most frontend accessibility issues are practical problems: the user cannot find, understand, operate, or interpret something because the code does not communicate it correctly.
