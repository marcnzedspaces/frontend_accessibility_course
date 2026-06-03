# Exercise 6: Final Mini Challenge — Accessible Interactive Page

Complete this exercise after the trainer demonstration.

## Code Files

Open this starter file:

[`../code/10-final-interactive-page-starter.html`](../code/10-final-interactive-page-starter.html)

Use this only after attempting the challenge:

[`../code/11-final-interactive-page-solution.html`](../code/11-final-interactive-page-solution.html)

Optional framework references:

[`../code/react-navigation-pattern.jsx`](../code/react-navigation-pattern.jsx)

[`../code/react-dialog-pattern.jsx`](../code/react-dialog-pattern.jsx)

[`../code/angular-route-focus-example.ts`](../code/angular-route-focus-example.ts)

## Objective

Apply Day 3 concepts by improving a small interactive page.

The page should keep users oriented while navigation, panels, dialogs, and content changes occur.

## Required Features

Your improved page should include:

- main navigation
- breadcrumb
- current page or current section indication
- accordion or FAQ section
- open/close dialog
- simulated SPA route or content change
- visible focus
- predictable keyboard behaviour

## Requirements

### Navigation

- [ ] Navigation uses `<nav>`.
- [ ] Multiple navigation regions are labelled where needed.
- [ ] Current page or section uses `aria-current`.
- [ ] Breadcrumb uses `nav aria-label="Breadcrumb"`.
- [ ] Link text is meaningful.

### Accordion or Disclosure

- [ ] Triggers are real buttons.
- [ ] Buttons use `aria-expanded`.
- [ ] Buttons use `aria-controls`.
- [ ] Collapsed content is hidden.
- [ ] State updates when content opens or closes.

### Dialog

- [ ] Dialog has an accessible name.
- [ ] Focus moves into the dialog when opened.
- [ ] Close button is clear.
- [ ] Escape closes the dialog where appropriate.
- [ ] Background content is not reachable while modal is open.
- [ ] Focus returns to the trigger after closing.

### SPA or Content Change

- [ ] Main heading updates when content changes.
- [ ] Document title or page context updates.
- [ ] Focus moves to the new main heading or region.
- [ ] Current navigation state updates.
- [ ] Announcements are useful but not noisy.

### General

- [ ] Native HTML is used before ARIA.
- [ ] Focus indicator is visible.
- [ ] Keyboard operation is predictable.
- [ ] The page is tested with NVDA or JAWS.

## Optional Framework Extension

Choose one:

- Convert the navigation pattern into a React component.
- Convert the dialog pattern into a React component.
- Describe how Angular should manage route-change focus.
- Write a design-system checklist for navigation, accordions, and dialogs.

## Your Implementation Notes

```text
Write your plan here.
```

## Your Code

```html
Write your improved HTML, CSS, or JavaScript here.
```

## Optional React Notes

```jsx
Write React component notes or code here.
```

## Optional Angular Notes

```ts
Write Angular route or component notes here.
```

## Testing Checklist

### Keyboard Testing

- [ ] Can all interactive elements be reached?
- [ ] Is focus order logical?
- [ ] Is focus visible?
- [ ] Do buttons work with Enter and Space?
- [ ] Do links work with Enter?
- [ ] Does focus return after closing the dialog?

### Screen Reader Testing

- [ ] Are navigation regions announced clearly?
- [ ] Is current page or section clear?
- [ ] Is expanded/collapsed state announced?
- [ ] Is the dialog title announced?
- [ ] Is route or content change clear?
- [ ] Are announcements helpful without being excessive?

## Reflection Questions

1. Which interaction created the most orientation risk?
2. Which component required the most focus management?
3. Which issue would be easiest to miss without screen reader testing?
4. How would React or Angular make this easier or harder?
5. What should be included in a design-system accessibility checklist?
