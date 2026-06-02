# Exercise 11: Keyboard Navigation and Focus Management

## Complete This After

Complete this exercise after the Instructor demonstrates keyboard traps, focus order, and programmatic focus management.

## Practice File

Start with:

```text
09-keyboard-exercise-starter.html
```

Reference after completion:

```text
09-keyboard-exercise-solution.html
```

## Objective

To fix keyboard traps, establish correct focus order, and manage focus in interactive components.

## Estimated Time

45–55 minutes

## Instructions

Open `09-keyboard-exercise-starter.html`. This page has several keyboard navigation problems. Your job is to make it fully keyboard accessible with a logical focus order.

---

## Part A: Map the Current Focus Order

### 1. Test Keyboard Navigation

Use **Tab** and **Shift+Tab** to navigate through the page. List each interactive element in the order it receives focus:

```text
1. 
2. 
3. 
4. 
5. 
6. 
7. 
8. 
```

---

### 2. Identify Problems

As you tab, look for:

- Elements that can't be reached with keyboard
- Elements that receive focus out of order
- Focus that jumps unexpectedly
- Focus traps where you can't escape

```text
Problems found:
```

---

## Part B: Test Specific Scenarios

### 1. Modal or Popup Test

If the page has a modal or popup:

- Can you open it with keyboard?
- Is focus moved to the modal?
- Can you close it with keyboard?
- Does focus return to the trigger button?

```text
Testing result:
```

---

### 2. Dropdown or Menu Test

If the page has a dropdown menu:

- Can you open it with keyboard?
- Can you navigate menu items?
- Can you activate a menu item?
- Does focus return to the trigger button?

```text
Testing result:
```

---

### 3. Skip Links Test

- Is there a skip link visible on Tab?
- Does the skip link move focus to main content?
- Can you use it to bypass navigation?

```text
Testing result:
```

---

## Part C: Fix the Code

### 1. Fix Hidden Elements

Elements that are hidden should not receive focus.

**Current Problem Code:**
```html
<div style="display: none;">
  <a href="/hidden-page">Hidden Link</a>
</div>
```

**Your Fix:**
```html
[Write your fix here]
```

**Explanation:**
```text
Your explanation:
```

---

### 2. Fix Keyboard-Only Interactions

Some interactions are only possible with a mouse.

**Current Problem Code:**
```html
<div onmouseover="showMenu()">
  Menu Trigger
</div>
```

**Your Fix:**
```html
[Write your fix here, add keyboard support]
```

**Explanation:**
```text
Your explanation:
```

---

### 3. Add a Skip Link

Create a skip link that allows keyboard users to jump to main content.

**Your Code:**
```html
[Write your skip link code]
```

**CSS for visibility on focus:**
```css
[Write your CSS to show/hide the skip link]
```

---

### 4. Fix Focus Traps

If the page has a modal that traps focus, manage focus properly.

**Your Code:**
```html
[Write your fix to manage focus in a modal]
```

**JavaScript for focus management:**
```javascript
[Write your JavaScript to move focus]
```

---

## Part D: Implement Focus Styles

Ensure every interactive element has a visible focus indicator.

### 1. Add Focus Styles

```css
[Write CSS to make focus indicators visible and clear]
```

---

### 2. Test Focus Visibility

For each interactive element, answer:

- Is focus visible?
- Is the focus indicator easy to see?
- Does it work on different background colors?

```text
Testing result:
```

---

## Part E: Advanced: Programmatic Focus

If the page has dynamic content or components that show/hide:

### 1. Detect When Content Becomes Available

Write code that moves focus when new content appears.

**Your Code:**
```javascript
[Write your focus management code]
```

---

### 2. Test the Flow

- Content appears
- Focus is moved appropriately
- User can immediately interact
- No focus is lost

```text
Testing result:
```

---

## Part F: Comparison

Open `09-keyboard-exercise-solution.html` and compare.

### Questions

1. How did the solution handle focus management?

```text
Your answer:
```

2. What focus indicators did they use?

```text
Your answer:
```

3. What would you do differently next time?

```text
Your answer:
```
