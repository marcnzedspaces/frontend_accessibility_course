# Exercise 4: SPA Route Change Focus and Page Updates

Complete this exercise after the trainer demonstration.

## Code Files

Open this starter file:

[`../code/07-spa-route-change-bad.html`](../code/07-spa-route-change-bad.html)

Use this only after attempting the exercise:

[`../code/08-spa-route-change-good.html`](../code/08-spa-route-change-good.html)

Optional framework reference:

[`../code/angular-route-focus-example.ts`](../code/angular-route-focus-example.ts)

## Objective

Identify and improve accessibility issues that happen when a single-page application changes content without a full page reload.

## Key Idea

In a traditional page load, the browser naturally changes page context.

In a single-page application, React or Angular may update content without resetting focus or announcing the change.

The application must manage orientation intentionally.

## What Should Happen on Route Change

After route or view change:

- document title should update
- the main heading should update
- focus should move to a meaningful location
- skip link behaviour should still work
- the user should know the page changed
- motion should respect user preferences

## Instructions

1. Open `07-spa-route-change-bad.html`.
2. Use the navigation links or buttons to switch views.
3. Test with keyboard and NVDA or JAWS.
4. Observe whether you know that the content changed.
5. Observe where focus remains.
6. Inspect the code.
7. Improve the route-change behaviour.
8. Retest and compare with `08-spa-route-change-good.html`.

## What to Test

- [ ] Does the document title change?
- [ ] Does the main heading change?
- [ ] Does focus move to the new main heading or main region?
- [ ] Does the screen reader announce the new context?
- [ ] Is the navigation current state updated?
- [ ] Does the browser history or URL make sense?
- [ ] Is there unnecessary live region noise?
- [ ] Does the transition respect reduced motion?

## Code Pattern to Review

Simplified focus management idea:

```js
function focusMainHeading() {
  const heading = document.querySelector("main h1");

  if (heading) {
    heading.setAttribute("tabindex", "-1");
    heading.focus();
  }
}
```

Simplified React concept:

```jsx
useEffect(() => {
  document.title = pageTitle;

  const heading = document.querySelector("main h1");
  heading?.focus();
}, [location.pathname]);
```

Simplified Angular concept:

```ts
this.router.events.subscribe(event => {
  if (event instanceof NavigationEnd) {
    document.title = this.title;
    const heading = document.querySelector('main h1') as HTMLElement;
    heading?.focus();
  }
});
```

## Improvement Task

Improve the route-change behaviour so that:

- [ ] The document title changes.
- [ ] The main heading changes.
- [ ] Focus moves to the new main heading or main region.
- [ ] The current navigation item is identified.
- [ ] The update is not overly noisy.
- [ ] The pattern could be adapted to React or Angular routing.

## Your Notes

```text
Write your observations and proposed changes here.
```

## Reflection Questions

1. How did you know the route or view changed?
2. Where did focus remain in the bad version?
3. Where should focus move after a route change?
4. Should every content update use `aria-live`?
5. How would you implement this in a React or Angular app?
