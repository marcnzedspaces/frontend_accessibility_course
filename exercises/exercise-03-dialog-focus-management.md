# Exercise 3: Dialog Focus Management

Complete this exercise after the trainer demonstration.

## Code Files

Open this starter file:

[`../code/05-bad-dialog.html`](../code/05-bad-dialog.html)

Use this only after attempting the exercise:

[`../code/06-good-dialog.html`](../code/06-good-dialog.html)

Optional framework reference:

[`../code/react-dialog-pattern.jsx`](../code/react-dialog-pattern.jsx)

## Objective

Test and improve a dialog or modal so that focus, naming, closing, and background interaction are handled correctly.

## Key Idea

A dialog is not just a visual overlay.

A dialog temporarily changes the user's focus context.

## Dialog Requirements

An accessible dialog should:

- move focus into the dialog when opened
- have a clear accessible name
- prevent interaction with background content while open
- provide a clear close button
- close with Escape where appropriate
- return focus to the trigger after closing

## Instructions

1. Open `05-bad-dialog.html`.
2. Test the page using keyboard and NVDA or JAWS.
3. Activate the button that opens the dialog.
4. Observe where focus goes.
5. Try to navigate outside the dialog.
6. Try to close the dialog.
7. Observe where focus goes after closing.
8. Inspect the code.
9. Improve the dialog behaviour.
10. Retest and compare with `06-good-dialog.html`.

## What to Test

- [ ] When the dialog opens, does focus move into it?
- [ ] Is the dialog title announced?
- [ ] Does the dialog have an accessible name?
- [ ] Can the user reach the close button?
- [ ] Can the dialog be closed with Escape?
- [ ] Is background content unreachable while the dialog is open?
- [ ] After closing, does focus return to the opening button?
- [ ] Is the focus order inside the dialog logical?
- [ ] Does the dialog content make sense without visual context?

## Code Patterns to Review

Native dialog pattern:

```html
<button type="button" id="open-dialog">
  Open registration details
</button>

<dialog id="registration-dialog" aria-labelledby="dialog-title">
  <h2 id="dialog-title">Registration details</h2>

  <p>This dialog contains registration information.</p>

  <button type="button" id="close-dialog">
    Close
  </button>
</dialog>
```

Focus return idea:

```js
const openButton = document.getElementById("open-dialog");
const dialog = document.getElementById("registration-dialog");
const closeButton = document.getElementById("close-dialog");

openButton.addEventListener("click", () => {
  dialog.showModal();
  closeButton.focus();
});

closeButton.addEventListener("click", () => {
  dialog.close();
  openButton.focus();
});
```

## Improvement Task

Improve the dialog so that:

- [ ] It has an accessible name.
- [ ] Focus moves into the dialog.
- [ ] There is a clear close control.
- [ ] Escape closes it where supported.
- [ ] Background content is not reachable.
- [ ] Focus returns to the trigger.

## Your Notes

```text
Write your observations and proposed changes here.
```

## Reflection Questions

1. What was the most serious issue in the bad dialog?
2. Where should focus move when the dialog opens?
3. Why is focus return important?
4. What should happen if a dialog contains a form?
5. What would you check in a React or Angular modal component?
