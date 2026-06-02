# Exercise 13: Building an Accessible Data Table

## Complete This After

Complete this exercise after the Instructor demonstrates proper table markup including `<caption>`, `<thead>`, `<tbody>`, `<th>`, and appropriate ARIA attributes.

## Practice File

Start with:

```text
11-table-exercise-starter.html
```

Reference after completion:

```text
11-table-exercise-solution.html
```

## Objective

To build an accessible data table that's easy to navigate and understand for all users, including screen reader users.

## Estimated Time

50–60 minutes

## Instructions

Open `11-table-exercise-starter.html`. This file contains a data table with poor accessibility. Your job is to make it properly structured so that screen reader users can understand the data.

---

## Part A: Test the Current Table

### 1. Screen Reader Test

Use NVDA or JAWS to navigate through the table:

- Can you identify the table purpose?
- Can you understand the column headers?
- Can you match data cells to their headers?
- Can you navigate table cells?

```text
Testing result:
```

---

### 2. Keyboard Navigation Test

- Can you navigate table cells with arrow keys?
- Can you reach all data?
- Is focus visible?

```text
Testing result:
```

---

### 3. Visual Review

- Are column headers clearly marked?
- Is the table readable without CSS?
- Are row headers (if any) obvious?

```text
Testing result:
```

---

## Part B: Identify Problems

List the accessibility problems you found:

```text
Problems:
```

---

## Part C: Build the Proper Structure

### 1. Add a Caption

Every table needs a caption that describes its purpose.

**Your Code:**
```html
<table>
  [Write the caption here]
  <thead>
    ...
  </thead>
</table>
```

**Explanation:** Why does the table need a caption?
```text
Your explanation:
```

---

### 2. Use Semantic Table Markup

Separate the header row from data rows using `<thead>` and `<tbody>`.

**Your Code:**
```html
<table>
  <caption>...</caption>
  [Write the thead and tbody markup here]
</table>
```

---

### 3. Mark Headers as `<th>`

All header cells must use `<th>`, not `<td>`.

**Current Code:**
```html
<tr>
  <td>Product</td>
  <td>Price</td>
  <td>Stock</td>
</tr>
```

**Your Fix:**
```html
[Write the corrected header row]
```

---

### 4. Handle Row Headers

If the table has row headers (data in the first column that identifies each row), mark them:

**Example:**
```html
<tr>
  <th scope="row">Product A</th>
  <td>$50</td>
  <td>In Stock</td>
</tr>
```

---

### 5. Use scope Attribute

Help screen readers match cells to headers using `scope`:

- `scope="col"` for column headers
- `scope="row"` for row headers

**Your Table with scope:**
```html
[Write your complete table with scope attributes]
```

---

## Part D: Complex Tables

If the table has complex headers (spanning multiple rows or columns):

### 1. Use id and headers Attributes

**Example:**
```html
<table>
  <tr>
    <th id="category" colspan="2">Sales</th>
  </tr>
  <tr>
    <th id="q1" headers="category">Q1</th>
    <th id="q2" headers="category">Q2</th>
  </tr>
  <tr>
    <td headers="q1">$100</td>
    <td headers="q2">$150</td>
  </tr>
</table>
```

If your table is complex, write the corrected version:

```html
[Write your complex table with proper headers attributes]
```

---

## Part E: Test After Fixes

### 1. Screen Reader Test

Using NVDA or JAWS:

- Navigate through the table cells
- Does each cell announce its header?
- Is the table purpose clear?

```text
Testing result:
```

---

### 2. Keyboard Navigation

- Can you navigate with arrow keys?
- Can you reach all cells?

```text
Testing result:
```

---

### 3. No-CSS Test

Disable CSS in your browser (or view the HTML-only version):

- Is the table readable without visual styling?
- Is the structure clear?

```text
Testing result:
```

---

## Part F: Comparison

Open `11-table-exercise-solution.html` and compare your table to the solution.

### Questions

1. What structure did the solution use?

```text
Your answer:
```

2. How did they handle the table caption?

```text
Your answer:
```

3. What scope attributes did they use?

```text
Your answer:
```

4. What would you do differently?

```text
Your answer:
```

---

## Part G: Advanced - Sortable Table

If you want an advanced challenge: Add JavaScript to sort the table by column. Ensure:

- Focus is managed when the table re-sorts
- Users are announced that the table was sorted
- The sort button is properly labeled

```javascript
[Write your JavaScript for table sorting]
```

```html
[Write the HTML for sort buttons]
```

**Announcement Code:**
```javascript
[Write code to announce the sort change to screen readers]
```
