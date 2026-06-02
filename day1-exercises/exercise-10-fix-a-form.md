# Exercise 10: Fix an Inaccessible Form

## Complete This After

Complete this exercise after the Instructor demonstrates accessible form patterns including labels, error messages, and keyboard navigation.

## Practice File

Start with:

```text
08-form-exercise-starter.html
```

Reference after completion:

```text
08-form-exercise-solution.html
```

## Objective

To build an accessible form by fixing labels, error announcements, and keyboard navigation.

## Estimated Time

50–60 minutes

## Instructions

Open `08-form-exercise-starter.html`. This form has common accessibility problems. Your job is to make it fully keyboard accessible and properly announced by screen readers.

---

## Part A: Test the Current State

### 1. Keyboard Navigation Test

Use the **Tab** key to navigate through the form. Record your findings:

- Can you reach all form fields?
- Can you reach the Submit button?
- Is the focus order logical?
- Are there any focus traps?

```text
Your findings:
```

---

### 2. Screen Reader Test

Use NVDA or JAWS to test the form. Record your findings:

- Is each field labeled?
- Does the screen reader announce the label when you focus the field?
- Are error messages announced?
- Is the form's purpose clear?

```text
Your findings:
```

---

## Part B: Required Fixes

Update the form to include:

```text
[ ] Proper <label> elements for every form field
[ ] Labels explicitly associated with fields using for="" and id=""
[ ] Visible focus state on all interactive elements
[ ] Error messages associated with fields using aria-describedby
[ ] Clear visual and programmatic indication of required fields
[ ] Submit button with descriptive text
[ ] Logical keyboard Tab order
[ ] No keyboard traps
```

---

## Part C: Fix the Code

### 1. Fix the Name Field

**Current Code:**
```html
<input type="text" placeholder="Your Name">
```

**Your Improved Code:**
```html
[Write your fix here]
```

---

### 2. Fix the Email Field

**Current Code:**
```html
<input type="email" placeholder="Email Address">
```

**Your Improved Code:**
```html
[Write your fix here]
```

---

### 3. Fix the Error Message

**Current Code:**
```html
<input type="text" id="password">
```

With an error message that appears below:
```html
<div style="color: red;">Password must be at least 8 characters</div>
```

**Your Improved Code:**
```html
[Write your fix here, including both the input and the error message]
```

---

### 4. Fix the Required Fields

Make it clear which fields are required, both visually and for screen readers.

**Your Code:**
```html
[Write your fix here]
```

---

## Part D: Test Your Fix

### 1. Keyboard Navigation

- Tab through the form
- Verify the focus order is logical
- Confirm no fields are unreachable
- Check that focus is visible on every field

```text
Testing result:
```

---

### 2. Screen Reader Test

- Read through with NVDA or JAWS
- Confirm each label is announced with its field
- Tab to an error field and confirm the error is announced
- Tab to required fields and confirm they're marked as required

```text
Testing result:
```

---

### 3. Visual Review

- Are there sufficient focus states?
- Is the focus indicator clear?
- Are required fields visually marked?

```text
Testing result:
```

---

## Part E: Comparison

Open `08-form-exercise-solution.html` and compare your solution.

### Questions

1. What did the solution do differently?

```text
Your answer:
```

2. What patterns did you notice in the accessible version?

```text
Your answer:
```

3. What would you change in your own approach?

```text
Your answer:
```
