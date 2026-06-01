# Exercise 4: Fix the Bad Page Structure

## Complete This After

Complete this exercise after the Instructor demonstrates how to convert a fake navigation menu into semantic navigation using `<nav>`, `<ul>`, `<li>`, and `<a>`.

## Practice File

Start with:

```text
03-structure-exercise-starter.html
```

Reference after completion:

```text
03-structure-exercise-solution.html
```

## Objective

To convert a poorly structured page into a semantic HTML page.

## Estimated Time

45–60 minutes

## Instructions

Open `03-structure-exercise-starter.html`.

Improve the page structure using semantic HTML. Focus on meaning, structure, and accessibility, not visual design.

---

## Part A: Required Fixes

Update the page so that it includes:

```text
[ ] Correct language attribute on the HTML element
[ ] Meaningful page title
[ ] Skip link to main content
[ ] Header section
[ ] Navigation using <nav>
[ ] Navigation links using <a href="">
[ ] Main content using <main>
[ ] One clear <h1>
[ ] Logical <h2> headings
[ ] Footer section
[ ] Real button using <button>
[ ] Meaningful link text
[ ] Image with appropriate alt text
[ ] Visible keyboard focus
```

---

## Part B: Suggested Page Structure

Use this as a guide:

```html
<body>
  <a href="#main-content">Skip to main content</a>

  <header>
    <nav aria-label="Main navigation">
      ...
    </nav>
  </header>

  <main id="main-content">
    <h1>...</h1>

    <section>
      <h2>...</h2>
      ...
    </section>
  </main>

  <footer>
    ...
  </footer>
</body>
```

---

## Part C: Testing

After editing the page, test it using keyboard and screen reader navigation.

```text
[ ] Can you Tab to all interactive elements?
[ ] Can you skip to the main content?
[ ] Can you navigate by headings?
[ ] Can you navigate by landmarks?
[ ] Are links announced as links?
[ ] Is the button announced as a button?
[ ] Is focus visible?
```

---

## Part D: Before and After Review

Complete the table.

| Area | Original Problem | Improved Code or Approach |
|---|---|---|
| Page title |  |  |
| Language |  |  |
| Navigation |  |  |
| Main heading |  |  |
| Link text |  |  |
| Button |  |  |
| Image |  |  |
| Focus |  |  |

---

## Part E: Reflection Questions

### 1. What changed when the page used real headings?

```text
Your answer:
```

### 2. What changed when the navigation used real links?

```text
Your answer:
```

### 3. What changed when the fake button became a real button?

```text
Your answer:
```

### 4. Did this page need a lot of ARIA?

```text
Your answer:
```

### 5. What was the most important semantic HTML improvement?

```text
Your answer:
```

---

## Key Takeaway

Semantic HTML provides structure, meaning, and built-in browser behavior. Many accessibility improvements can be achieved before adding ARIA.
