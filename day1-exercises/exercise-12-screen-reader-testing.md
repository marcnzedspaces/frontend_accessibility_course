# Exercise 12: Screen Reader Testing and Announcements

## Complete This After

Complete this exercise after the Instructor demonstrates how to use NVDA or JAWS and shows how page structure affects what screen readers announce.

## Practice File

Use:

```text
10-screen-reader-exercise.html
```

## Objective

To test a page with a screen reader and identify announcement problems that require fixes.

## Estimated Time

40–50 minutes

## Instructions

Open `10-screen-reader-exercise.html` in your browser. Use **NVDA** (Windows) or **JAWS** (Windows) or **VoiceOver** (macOS) to test the page. Document what the screen reader announces and identify missing information.

---

## Part A: Initial Screen Reader Tour

### 1. Start a Screen Reader

Start NVDA, JAWS, or VoiceOver:

- **NVDA (Windows):** Press `Ctrl+Alt+N` or start from the Start menu
- **JAWS (Windows):** Press `Insert+Spacebar` or start manually
- **VoiceOver (macOS):** Press `Cmd+F5` to toggle on/off

---

### 2. Virtual Cursor Tour

Use the virtual cursor to read the page from top to bottom. Take notes on what you hear:

**Page Title/Heading:**
```text
What the screen reader announced:
```

**Page Structure:**
```text
Document outline (H1, H2, sections, etc.):
```

**Navigation:**
```text
How is the navigation announced?
```

**Main Content:**
```text
What landmarks are announced? (main, article, region)
```

**Buttons and Links:**
```text
How are buttons and links announced?
```

**Forms:**
```text
How are form fields announced? Are labels clear?
```

**Images:**
```text
What does the screen reader say about images?
```

---

## Part B: Find Announcement Problems

### 1. Missing Landmarks

List any major sections that lack proper landmarks:

```text
Problems found:
```

---

### 2. Missing Labels

Listen for form fields. Which fields lack proper labels?

```text
Problems found:
```

---

### 3. Link and Button Confusion

Which links or buttons have unclear announcements?

```text
Problems found:
```

**Example:** "Click here" link, "more" link, icon-only buttons without text

---

### 4. Image Alternative Text

Which images lack proper alt text or have poor alt text?

```text
Problems found:
```

---

### 5. Missing Page Purpose

Does the page clearly state its purpose in the first few lines?

```text
Your assessment:
```

---

## Part C: Fix the Announcements

### 1. Add Semantic Landmarks

If the page lacks proper landmarks, add them:

**Current Code:**
```html
<div>
  <div><a href="/">Home</a></div>
  <!-- navigation links -->
</div>

<div class="main-content">
  <!-- page content -->
</div>
```

**Your Fix:**
```html
[Write your improved markup with landmarks]
```

---

### 2. Add Labels to Form Fields

Find a form field without a proper label and fix it:

**Current Code:**
```html
[Paste the problematic code from the page]
```

**Your Fix:**
```html
[Write the corrected code with a proper label]
```

---

### 3. Improve Link Text

Find a link with unclear text (like "Click here" or "Read more"):

**Current Code:**
```html
[Paste the problematic link from the page]
```

**Your Fix:**
```html
[Write the corrected link with descriptive text]
```

---

### 4. Fix Image Alt Text

Find an image with missing or poor alt text:

**Current Code:**
```html
[Paste the problematic img tag from the page]
```

**Your Fix:**
```html
[Write the corrected img tag with good alt text]
```

---

## Part D: Test After Fixes

### 1. Run Through Again

Using the same screen reader, test the page again with your fixes:

- Are landmarks now announced?
- Are form fields now labeled?
- Are links clearer?
- Are images described?

```text
Results:
```

---

### 2. Page Outline Test

Ask the screen reader for the page outline (Headings list):

**NVDA:** Press `Insert+F7` to open Elements List, filter to "Headings"
**JAWS:** Press `Insert+F6` for Headings List
**VoiceOver:** Use the Web Rotor (`Ctrl+Option+U`) and select "Headings"

Record the heading structure:

```text
Page Outline:
- 
- 
- 
- 
```

---

### 3. Forms List Test

Ask the screen reader to show all form fields:

**NVDA:** Elements List → Filter for "Form fields"
**JAWS:** Insert+F5 for Forms List
**VoiceOver:** Web Rotor → Form Controls

List all form fields and their labels:

```text
Form Fields:
1. 
2. 
3. 
```

---

### 4. Links List Test

Ask the screen reader to show all links:

**NVDA:** Elements List → Filter for "Links"
**JAWS:** Insert+F7 for Links List
**VoiceOver:** Web Rotor → Links

Do all link texts clearly describe the link destination?

```text
Your assessment:
```

---

## Part E: Document Your Testing Session

### 1. Summarize Problems Found

```text
The main accessibility issues were:
```

---

### 2. Summarize Fixes Applied

```text
The fixes I applied:
```

---

### 3. Summarize Improvements

```text
After the fixes, the screen reader now:
```

---

## Part F: Discussion

### Questions

1. What surprised you most about how the screen reader announced the page?

```text
Your answer:
```

2. Which fix had the biggest impact on the user experience?

```text
Your answer:
```

3. What patterns will you use in your own projects?

```text
Your answer:
```
