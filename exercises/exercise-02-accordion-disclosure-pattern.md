# Exercise 2: Accordion and Disclosure Pattern

Complete this exercise after the trainer demonstration.

## Code Files

Open this starter file:

[`../code/03-bad-accordion.html`](../code/03-bad-accordion.html)

Use this only after attempting the exercise:

[`../code/04-good-accordion.html`](../code/04-good-accordion.html)

## Objective

Improve an accordion or disclosure component so that expanded and collapsed state is clear to keyboard and screen reader users.

## Key Pattern

A basic disclosure should use a real button and communicate state.

```html
<button
  type="button"
  aria-expanded="false"
  aria-controls="faq-answer-1">
  What is included in this course?
</button>

<div id="faq-answer-1" hidden>
  <p>The course includes semantic HTML, forms, dialogs, and SPA patterns.</p>
</div>
```

## Instructions

1. Open `03-bad-accordion.html`.
2. Test the accordion using keyboard and NVDA or JAWS.
3. Do not inspect the code first.
4. Try to identify whether the control is announced as a button.
5. Check whether expanded or collapsed state is announced.
6. Check whether hidden content is exposed when collapsed.
7. Inspect the code.
8. Improve the implementation.
9. Retest and compare with `04-good-accordion.html`.

## What to Test

- [ ] Can each accordion trigger be reached with Tab?
- [ ] Is each trigger announced as a button?
- [ ] Can each trigger be activated with Enter?
- [ ] Can each trigger be activated with Space?
- [ ] Is expanded or collapsed state announced?
- [ ] Is collapsed content hidden from keyboard and screen reader navigation?
- [ ] Is expanded content available in a predictable location?
- [ ] Does focus remain predictable after expanding or collapsing?

## Code Review Checklist

Look for these common problems:

- [ ] Clickable `<div>` or `<span>` used instead of `<button>`.
- [ ] No `aria-expanded`.
- [ ] No `aria-controls`.
- [ ] Content is visually hidden but still available to assistive technology.
- [ ] JavaScript changes visibility but does not update ARIA state.
- [ ] Trigger text does not describe the panel content.

## Improvement Task

Improve the accordion so that:

- [ ] Each trigger is a real `<button>`.
- [ ] Each button has `aria-expanded`.
- [ ] Each button uses `aria-controls`.
- [ ] Each panel has a matching `id`.
- [ ] Collapsed panels use `hidden`.
- [ ] JavaScript updates both visibility and `aria-expanded`.

## Your Improved Code Notes

```text
Write your notes or code approach here.
```

## Reflection Questions

1. What changed when the trigger became a real button?
2. Was the expanded or collapsed state announced clearly?
3. Was ARIA replacing native HTML or enhancing it?
4. How would this pattern be implemented in React or Angular state?
5. What could go wrong if component state changes but `aria-expanded` does not update?
