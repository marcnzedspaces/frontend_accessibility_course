# Exercise 1: Data Table Audit

## Code Files
Open this starter file:

[`../code/01-bad-data-table.html`](../code/01-bad-data-table.html)

Use this only after completing the audit:

[`../code/02-good-data-table.html`](../code/02-good-data-table.html)

## Objective
Audit a data table and identify problems that affect screen reader navigation, understanding, sorting, and data interpretation.

## Instructions
1. Open `01-bad-data-table.html`.
2. Test the page using keyboard and NVDA or JAWS.
3. Navigate the table using screen reader table navigation commands.
4. Do not inspect the code first.
5. Record what is difficult to understand.
6. Inspect the code.
7. Compare later with `02-good-data-table.html`.

## What to Test
- [ ] Is the data presented as a real table?
- [ ] Does the table have a meaningful caption?
- [ ] Are column headers exposed as headers?
- [ ] Are row headers needed?
- [ ] Is the sorting control announced clearly?
- [ ] Is the sorted column and sort direction clear?
- [ ] Is the data understandable without relying on colour?
- [ ] Are abbreviations or symbols explained?
- [ ] Is the table too wide for small screens?
- [ ] Is there a summary before the table?

## Code Areas to Inspect
Look for problems like:

```html
<div class="table">
  <div class="row">
    <div>Estate</div>
    <div>Actual</div>
    <div>Status</div>
  </div>
</div>
```

A better data table usually needs:

```html
<table>
  <caption>Monthly FFB production by estate</caption>
  <thead>
    <tr>
      <th scope="col">Estate</th>
      <th scope="col">Target</th>
      <th scope="col">Actual</th>
      <th scope="col">Status</th>
    </tr>
  </thead>
</table>
```

## Record Your Findings

### Issue 1
User experience problem:

```text
Write your notes here.
```

Likely code cause:

```text
Write your notes here.
```

Suggested fix:

```text
Write your notes here.
```

### Issue 2
User experience problem:

```text
Write your notes here.
```

Likely code cause:

```text
Write your notes here.
```

Suggested fix:

```text
Write your notes here.
```

### Issue 3
User experience problem:

```text
Write your notes here.
```

Likely code cause:

```text
Write your notes here.
```

Suggested fix:

```text
Write your notes here.
```

## Reflection Questions
1. What table information was missing from the screen reader experience?
2. Was the table structure or visual layout the bigger problem?
3. What should a table caption communicate?
4. What should happen when a sortable table changes order?
5. Would this data be better as a table, list, card layout, or both?
