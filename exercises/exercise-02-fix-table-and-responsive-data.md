# Exercise 2: Fix Table and Responsive Data

## Code Files
Start from:

[`../code/01-bad-data-table.html`](../code/01-bad-data-table.html)

Compare later with:

[`../code/02-good-data-table.html`](../code/02-good-data-table.html)

Optional framework references:

[`../code/react-accessible-data-card.jsx`](../code/react-accessible-data-card.jsx)

[`../code/angular-table-caption-example.html`](../code/angular-table-caption-example.html)

## Objective
Improve a data table so it has semantic structure, clear headers, useful caption, sorting state, and a responsive strategy.

## Requirements
- [ ] Use a real `<table>`.
- [ ] Add a meaningful `<caption>`.
- [ ] Use `<th scope="col">` for column headers.
- [ ] Use `<th scope="row">` for row headers where useful.
- [ ] Use real buttons for sorting controls.
- [ ] Communicate sort direction.
- [ ] Do not use colour as the only status indicator.
- [ ] Add a short summary before the table.
- [ ] Keep the table usable on small screens.
- [ ] Test with NVDA or JAWS.

## Suggested Pattern

```html
<div class="table-wrapper" tabindex="0" aria-labelledby="table-title">
  <table>
    <caption id="table-title">Monthly FFB production by estate</caption>
    <thead>
      <tr>
        <th scope="col">Estate</th>
        <th scope="col">Target</th>
        <th scope="col">Actual</th>
        <th scope="col">Variance</th>
        <th scope="col">Status</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <th scope="row">Estate A</th>
        <td>1,200</td>
        <td>1,080</td>
        <td>-120</td>
        <td>Below target</td>
      </tr>
    </tbody>
  </table>
</div>
```

## Your Improved Code

```html
Write your improved code here.
```

## Testing Checklist
- [ ] Can the participant navigate cell by cell?
- [ ] Are headers announced with cells?
- [ ] Is the table caption announced?
- [ ] Does the status make sense without colour?
- [ ] Does the responsive layout preserve meaning?
- [ ] Is the table still usable when zoomed or narrowed?

## Reflection Questions
1. When should data stay as a table?
2. When might cards be better on mobile?
3. How can a card layout preserve labels for each value?
4. What should a React or Angular data table component require by default?
