# Exercise 4: Design Tokens, Motion, and Focus

## Code Files
Open this starter file:

[`../code/05-tokens-motion-starter.html`](../code/05-tokens-motion-starter.html)

Use this only after attempting the exercise:

[`../code/06-tokens-motion-good.html`](../code/06-tokens-motion-good.html)

Optional React reference:

[`../code/react-reduced-motion-hook.jsx`](../code/react-reduced-motion-hook.jsx)

## Objective
Review visual design decisions that affect accessibility, including focus visibility, colour contrast, state indication, spacing, and motion.

## Instructions
1. Open `05-tokens-motion-starter.html`.
2. Test keyboard focus.
3. Look for state indicators that rely only on colour.
4. Check whether motion or animation is distracting or unnecessary.
5. Inspect the CSS.
6. Improve the design tokens.
7. Compare with `06-tokens-motion-good.html`.

## What to Test
- [ ] Is focus visible on all interactive elements?
- [ ] Is focus style removed anywhere?
- [ ] Are hover and focus states both supported?
- [ ] Is colour the only state indicator?
- [ ] Are disabled states clear and semantic?
- [ ] Is text readable?
- [ ] Is spacing comfortable?
- [ ] Does motion respect `prefers-reduced-motion`?
- [ ] Does the UI still work when zoomed?

## CSS Areas to Inspect

```css
button:focus {
  outline: none;
}

.status-good {
  color: green;
}

.card {
  animation: slide-in 1s ease-in-out infinite;
}
```

Better patterns include:

```css
button:focus-visible {
  outline: 3px solid #000;
  outline-offset: 3px;
}

.status-good::before {
  content: "✓ ";
}

@media (prefers-reduced-motion: reduce) {
  * {
    animation: none;
    transition: none;
  }
}
```

## Improvement Task
- [ ] Make focus indicators visible.
- [ ] Do not communicate state by colour alone.
- [ ] Respect reduced-motion preferences.
- [ ] Make button and link states distinguishable.
- [ ] Ensure design tokens support accessibility.

## Your Improved CSS Notes

```text
Write your CSS changes or design-token notes here.
```

## Reflection Questions
1. Which design token affects accessibility the most?
2. Why is removing focus outline risky?
3. How should a design system define focus states?
4. How should React or Angular components respect reduced motion?
