# Exercise 3: Component Review — React and Angular

## Code Files

React:

[`../code/react-broken-components.jsx`](../code/react-broken-components.jsx)

[`../code/react-accessible-components-reference.jsx`](../code/react-accessible-components-reference.jsx)

Angular:

[`../code/angular-broken-patterns.html`](../code/angular-broken-patterns.html)

[`../code/angular-accessible-patterns-reference.html`](../code/angular-accessible-patterns-reference.html)

## Objective

Review component patterns and identify how React or Angular can preserve or break accessibility.

## Instructions

1. Open the broken React component file.
2. Review each component for accessibility risks.
3. Open the broken Angular pattern file.
4. Review each template section for accessibility risks.
5. Do not look at the reference files until after your review.
6. Write recommendations for a design-system team.

## React Review Checklist

- [ ] Missing `id`
- [ ] Missing `htmlFor`
- [ ] Visual label not connected to input
- [ ] Error not connected to input
- [ ] `aria-invalid` missing or always present
- [ ] Clickable `div` instead of button
- [ ] Custom modal with no focus handling
- [ ] Missing `aria-expanded` for disclosure
- [ ] Component hides native semantics
- [ ] Duplicate or unstable IDs

## Angular Review Checklist

- [ ] `[attr.for]` missing
- [ ] `[id]` missing or unstable
- [ ] Help text not connected
- [ ] Error text not connected
- [ ] `aria-describedby` missing
- [ ] `aria-invalid` not bound correctly
- [ ] Click handlers placed on non-interactive elements
- [ ] Route change focus not considered
- [ ] Template creates visual structure but not semantic structure

## Review Notes

### Component 1

```text
Write your notes here.
```

### Component 2

```text
Write your notes here.
```

### Component 3

```text
Write your notes here.
```

## Design-System Recommendations

Write 5 rules for reusable accessible components.

```text
Write your recommendations here.
```

## Reflection Questions

1. What accessibility issue is easiest to hide inside a component?
2. Why is rendered HTML more important than framework syntax?
3. Which component should be standardized in a design system first?
4. What should be tested manually even if automated tests pass?
