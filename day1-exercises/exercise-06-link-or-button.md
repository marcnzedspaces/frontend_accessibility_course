# Exercise 6: Link or Button?

## Complete This After

Complete this exercise after the Instructor demonstrates the difference between a link and a button.

## Practice File

Use:

```text
04-native-vs-fake-controls.html
```

## Objective

To decide whether an interface control should be coded as a link or a button.

## Estimated Time

30–40 minutes

## Rule to Use

```text
If it goes somewhere, use a link.
If it does something, use a button.
```

Use:

```html
<a href="">Link text</a>
```

when the user navigates to another page, section, document, or destination.

Use:

```html
<button type="button">Button text</button>
```

when the user performs an action on the current page.

---

## Part A: Classify Each Scenario

For each scenario, decide whether the correct element is a link or a button.

| No. | Scenario | Link or Button? | Reason |
|---|---|---|---|
| 1 | Go to the course details page |  |  |
| 2 | Submit a registration form |  |  |
| 3 | Open a modal dialog |  |  |
| 4 | Download a PDF brochure |  |  |
| 5 | Expand an FAQ answer |  |  |
| 6 | Go to the contact section on the page |  |  |
| 7 | Save user preferences |  |  |
| 8 | Open the user’s email client |  |  |
| 9 | Show or hide course details |  |  |
| 10 | Navigate to another website |  |  |

---

## Part B: Code Review A

Review this code:

```html
<div onclick="saveForm()">Save</div>
```

Answer the questions.

### 1. Is this reachable by keyboard by default?

```text
Your answer:
```

### 2. Is it announced as a button?

```text
Your answer:
```

### 3. Will Enter and Space work as expected by default?

```text
Your answer:
```

### 4. What should it be changed to?

```html
Your improved version:
```

---

## Part C: Code Review B

Review this code:

```html
<span onclick="location.href='/courses'">Courses</span>
```

Answer the questions.

### 1. Is this a real link?

```text
Your answer:
```

### 2. Is it available in the screen reader links list?

```text
Your answer:
```

### 3. What should it be changed to?

```html
Your improved version:
```

---

## Part D: Test the Practice File

Open `04-native-vs-fake-controls.html`.

Compare the fake controls and native controls.

```text
[ ] Which controls are reachable by Tab?
[ ] Which controls are announced correctly?
[ ] Which controls work with Enter?
[ ] Which controls work with Space?
[ ] Which implementation feels more predictable?
```

---

## Part E: Reflection

### Why should developers choose elements based on behavior rather than appearance?

```text
Your answer:
```

### What are the risks of using clickable `<div>` or `<span>` elements?

```text
Your answer:
```

### What accessibility features does a native `<button>` provide automatically?

```text
Your answer:
```

---

## Suggested Answer Guide

| Scenario | Correct Element |
|---|---|
| Go to the course details page | Link |
| Submit a registration form | Button |
| Open a modal dialog | Button |
| Download a PDF brochure | Link |
| Expand an FAQ answer | Button |
| Go to the contact section | Link |
| Save user preferences | Button |
| Open email client | Link |
| Show or hide course details | Button |
| Navigate to another website | Link |

---

## Key Takeaway

Accessible frontend development chooses elements based on purpose and behavior, not visual appearance.
