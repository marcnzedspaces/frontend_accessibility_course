# Exercise 5: Responsive Navigation and Tooltip Review

Complete this exercise after the trainer demonstration.

## Code File

Open this starter file:

[`../code/09-responsive-nav-tooltip-starter.html`](../code/09-responsive-nav-tooltip-starter.html)

## Objective

Review responsive navigation and tooltip/help patterns for keyboard and screen reader accessibility.

## Part A: Responsive Navigation

A mobile or responsive menu is often a disclosure pattern.

## Key Pattern

```html
<button
  type="button"
  aria-expanded="false"
  aria-controls="mobile-menu">
  Menu
</button>

<nav id="mobile-menu" hidden aria-label="Mobile navigation">
  <!-- navigation links -->
</nav>
```

## Instructions

1. Open `09-responsive-nav-tooltip-starter.html`.
2. Test the responsive menu using keyboard and NVDA or JAWS.
3. Check whether the menu button communicates state.
4. Check whether the menu links are hidden when the menu is collapsed.
5. Inspect the code.
6. Improve the menu pattern.

## Responsive Navigation Checklist

- [ ] Is the menu trigger a real button?
- [ ] Does it use `aria-expanded`?
- [ ] Does it use `aria-controls`?
- [ ] Is the menu hidden when collapsed?
- [ ] Are menu links reachable only when the menu is open?
- [ ] Does button text or state make sense?
- [ ] Does focus remain predictable?
- [ ] Is navigation still available on larger screens?

## Part B: Tooltip and Help Text Review

Tooltips are often problematic when they are hover-only, disappear too quickly, or contain important information.

## Problematic Tooltip Pattern

```html
<label for="username">Username</label>
<input id="username" name="username" type="text">

<span class="tooltip">Use 6 to 20 characters.</span>
```

## Better Help Text Pattern

```html
<label for="username">Username</label>
<p id="username-help">Use 6 to 20 characters.</p>

<input
  id="username"
  name="username"
  type="text"
  aria-describedby="username-help">
```

## Tooltip Review Questions

1. Is the information important for completing the field?
2. Is it available without hover?
3. Is it available to keyboard users?
4. Is it announced by the screen reader?
5. Would visible help text be better than a tooltip?
6. Does the tooltip contain interactive content?

## Improvement Task

Improve the responsive navigation or tooltip/help pattern so that:

- [ ] Important information is not hover-only.
- [ ] Help text is connected using `aria-describedby`.
- [ ] The menu button communicates expanded/collapsed state.
- [ ] Hidden menu content is not reachable when collapsed.

## Your Notes

```text
Write your observations and proposed changes here.
```

## Reflection Questions

1. When is a tooltip unnecessary?
2. Why is visible help text often better?
3. What makes a responsive menu similar to an accordion?
4. What would you test in a mobile navigation component?
