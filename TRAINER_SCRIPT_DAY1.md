# Day 1 Script

## Front-End Accessibility Foundations

## Overall delivery rhythm

Use this pattern for every topic:

```text
1. Show slide briefly.
2. Explain the concept.
3. Demonstrate one small example.
4. Give participant the exercise.
5. Let participant test with NVDA/JAWS.
6. Review the code together.
7. Compare with improved version.
8. Retest.
9. Summarise the rule.
```

Your main role today:

> “I provide the frontend examples and implementation structure. You provide the screen reader experience and audit judgement.”

---

# Before starting

Open these:

```text
Slides:
Day-1-Front-End-Accessibility.pdf

Code files:
01-bad-page.html
02-good-page.html
03-structure-exercise-starter.html
03-structure-exercise-solution.html
04-native-vs-fake-controls.html
05-aria-lite-disclosure.html
06-mini-challenge-starter.html
07-mini-challenge-solution.html

Exercise files:
exercise-01-accessibility-experience-and-expectations.md
exercise-02-map-problems-to-wcag-principles.md
exercise-03-audit-a-bad-web-page.md
exercise-04-fix-the-bad-page-structure.md
exercise-05-headings-and-page-outline.md
exercise-06-link-or-button.md
exercise-07-image-alternative-text-decision.md
exercise-08-aria-lite-disclosure-test.md
exercise-09-final-day-1-mini-challenge.md
```

Ask before controlling anything:

> “Would you prefer to navigate the demos yourself, or would you like me to drive while you listen and comment?”

Also say:

> “I’ll avoid talking over the screen reader. Please stop me anytime if you need the audio to complete.”

---

# 9:00 – 9:20

## Opening and positioning

## Slides

Use slides 1–4:

```text
Slide 1: Day 1 — Accessible Front-End Foundations
Slide 2: Today’s Learning Approach
Slide 3: Why This Session Is Different
Slide 4: Day 1 Outcomes
```

Your slide deck already frames the class as lab-based, where screen reader feedback guides the review and every issue connects back to frontend decisions. 

## What to say

> “Today is not going to be a normal lecture. The slides will frame the topic, but the real learning will happen in the browser and the code.”

> “Since you already bring strong accessibility and screen reader experience, I do not want to explain accessibility from zero. Today we’ll focus on how frontend code creates or fixes accessibility issues.”

> “For each activity, we’ll test the experience first, inspect the code second, fix the implementation, and retest.”

## Exercise 1 setup

Open:

```text
exercise-01-accessibility-experience-and-expectations.md
```

## Demo before exercise

No code demo needed. Demonstrate the thinking style verbally:

> “For example, if a page has a large visual heading but the code uses a `<div>`, a sighted user may think the structure is clear. But a screen reader user may not get that heading in the heading list. So today we will always connect experience back to code.”

## Give the exercise

Say:

> “Let’s start with your experience. Please answer these briefly, then we’ll use your answers as reference points during the day.”

Ask him to answer:

```text
1. What accessibility issues do you commonly encounter?
2. What frontend mistakes do you often see?
3. What annoys you most in NVDA or JAWS?
4. What would you like more focus on today: code, WCAG, ARIA, or testing?
```

## How to handle the exercise

Do not correct him. Listen and write down key issues.

Create a quick note like:

```text
Participant examples:
- Bad headings
- Fake buttons
- Missing labels
- Poor links
- Modals
- Too much ARIA
```

## Debrief line

> “Good. Today we’ll keep returning to these issues and connect them to HTML, CSS, JavaScript, and ARIA decisions.”

---

# 9:20 – 10:10

## WCAG 2.2 in frontend language

## Slides

Use slides 5–9:

```text
Slide 5: WCAG in Frontend Language
Slide 6: Perceivable
Slide 7: Operable
Slide 8: Understandable
Slide 9: Robust
```

## What to say

> “For today, we are not going to memorise the whole WCAG standard. We’ll use WCAG as a practical debugging lens.”

> “From a frontend perspective, WCAG becomes four questions: Can the user perceive it? Can the user operate it? Can the user understand it? Can assistive technology interpret it correctly?”

Use this simple mapping:

```text
Perceivable = Can the user detect and understand the content?
Operable = Can the user use it with keyboard and assistive technology?
Understandable = Are labels, links, instructions, and actions clear?
Robust = Does the code expose correct meaning, role, and state?
```

## Exercise 2 setup

Open:

```text
exercise-02-map-problems-to-wcag-principles.md
```

## Demo before exercise

Say:

> “Let me demonstrate one.”

Use this example:

```text
Problem:
A button is visible on the page but cannot be reached using Tab.

Likely principle:
Operable.

Reason:
The control exists visually, but keyboard users cannot operate it.
```

Then say:

> “Some issues can map to more than one principle. That is fine. The purpose is to practise turning a user problem into accessibility language.”

## Give the exercise

Say:

> “Now you try the remaining examples. For each one, identify the likely POUR principle and explain the user impact.”

## How to handle the exercise

Let him answer first. Then ask:

> “What would be the frontend cause?”

Examples to guide him:

```text
Heading coded as div = Robust / Understandable
Click here link = Understandable
Red/green-only chart = Perceivable
Invalid input error = Understandable
Menu opens visually but not announced = Robust / Operable
```

## Debrief line

> “Good. Now we have the vocabulary. Next we’ll apply it to a real broken page.”

---

# 10:10 – 10:30

## Begin bad page audit

## Slide

Use slide 10:

```text
Slide 10: Exercise — Map Problems to WCAG
```

This slide directly tells the participant to open `01-bad-page.html`, audit first, map problems to POUR, and identify likely frontend causes. 

## Code file

Open in browser:

```text
01-bad-page.html
```

## What to say

> “We are not going to inspect the code yet. First, let’s experience the page like a real audit.”

> “Please use your normal NVDA or JAWS workflow. Tell me what feels broken, missing, confusing, or inefficient.”

## Exercise 3 setup

Open:

```text
exercise-03-audit-a-bad-web-page.md
```

## Demo before exercise

Demonstrate only one issue.

### Demo: fake heading

1. Ask him to navigate by headings.
2. If there is no proper heading, pause.
3. Say:

> “This is our first issue: visually, the page may appear to have a title, but heading navigation does not expose it properly.”

4. Open the code and show:

```html
<div class="big-title">Frontend Accessibility Course</div>
```

5. Explain:

> “This is only visually styled as a title. It is not programmatically a heading.”

6. Show the fix verbally:

```html
<h1>Frontend Accessibility Course</h1>
```

7. Say:

> “Now you’ll audit the rest using the same method: test first, then connect the experience to the likely code cause.”

## Give the exercise

Say:

> “Use the checklist in Exercise 3. Please record at least five issues.”

## How to handle the exercise

Ask him to test:

```text
- Page title
- Heading navigation
- Landmark/navigation discovery
- Links list
- Tab order
- Register control
- Image announcement
- Focus visibility
```

Create a live table as he reports:

| Experience issue               | Likely code cause | Fix                  |
| ------------------------------ | ----------------- | -------------------- |
| Cannot navigate by heading     | Heading is a div  | Use h1/h2            |
| Menu not announced as links    | span onclick      | Use a href           |
| Register not keyboard friendly | div onclick       | Use button           |
| Image not described            | missing alt       | Add alt text         |
| Generic title                  | title says Page   | Use meaningful title |

## Stop point before break

Say:

> “After the break, we’ll inspect the code and confirm what caused these issues.”

---

# 10:30 – 10:45

## Break

---

# 10:45 – 11:30

## Bad page code review and retest

## Code files

Open side by side:

```text
01-bad-page.html
02-good-page.html
```

## What to say

> “Now that we have the user experience problems, let’s inspect the frontend decisions that caused them.”

Go issue by issue.

---

## Demo 1: page title

Bad:

```html
<title>Page</title>
```

Say:

> “This gives poor orientation. A page title should describe the page purpose.”

Good:

```html
<title>Frontend Accessibility Course | Training Website</title>
```

---

## Demo 2: language

Bad:

```html
<html>
```

Good:

```html
<html lang="en">
```

Say:

> “The language attribute helps assistive technology use the correct language rules.”

---

## Demo 3: fake navigation

Bad:

```html
<span onclick="location.href='#courses'">Courses</span>
```

Good:

```html
<a href="#courses">Courses</a>
```

Say:

> “If it navigates, use a link.”

---

## Demo 4: fake button

Bad:

```html
<div class="fake-button" onclick="alert('Registered')">
  Register
</div>
```

Good:

```html
<button type="button">
  Register
</button>
```

Say:

> “If it performs an action, use a button.”

---

## Demo 5: missing image alternative

Bad:

```html
<img src="course-banner.jpg">
```

Good:

```html
<img src="course-banner.jpg" alt="Trainer leading a frontend accessibility workshop">
```

Say:

> “If the image communicates information, give it a useful text alternative.”

---

## Retest

Open:

```text
02-good-page.html
```

Ask:

```text
Can you navigate by headings now?
Are the menu items announced as links?
Is Register announced as a button?
Does the page title provide better orientation?
Does the structure feel clearer?
```

## Debrief line

> “Most of these fixes did not require complex ARIA. They required correct HTML.”

---

# 11:30 – 1:00

## Semantic HTML and page structure exercise

## Slides

Use slides 11–15:

```text
Slide 11: Accessibility Starts with HTML
Slide 12: Semantic Page Structure
Slide 13: Headings Are Navigation
Slide 14: Landmarks Give the Page a Map
Slide 15: Skip Links
```

The slides explain that semantic structure gives screen reader users a navigable architecture through headings, landmarks, lists, and skip links. 

## What to say

> “Now we’ll stop only reviewing and start fixing. The goal is not to make the page beautiful. The goal is to make the structure meaningful to the browser and assistive technology.”

## Exercise 4 setup

Open:

```text
exercise-04-fix-the-bad-page-structure.md
03-structure-exercise-starter.html
```

## Demo before exercise

Show one small conversion.

Bad:

```html
<div class="menu">
  <span onclick="location.href='#home'">Home</span>
  <span onclick="location.href='#courses'">Courses</span>
</div>
```

Good:

```html
<nav aria-label="Main navigation">
  <ul>
    <li><a href="#home">Home</a></li>
    <li><a href="#courses">Courses</a></li>
  </ul>
</nav>
```

Say:

> “This changes visual navigation into programmatic navigation. Now the browser knows this is navigation, and each item is a real link.”

Also show a skip link:

```html
<a class="skip-link" href="#main-content">Skip to main content</a>

<main id="main-content">
  <h1>Frontend Accessibility Course</h1>
</main>
```

Say:

> “The skip link allows keyboard users to bypass repeated navigation.”

## Give the exercise

Say:

> “Now improve the starter page. Use the checklist in Exercise 4. Focus on structure first.”

## How to handle the exercise

Let him work section by section.

Prompt him:

```text
What should be the h1?
Where should main start?
Should this be a link or a button?
Does this image need alt text?
Where should the skip link point?
```

## Compare with solution

Open:

```text
03-structure-exercise-solution.html
```

Say:

> “This is one possible accessible implementation. Let’s compare decisions, not memorise the answer.”

## Retest

Ask:

```text
Can you navigate by headings?
Can you navigate by landmarks?
Can you skip to main content?
Are links available in the links list?
```

## Debrief line

> “Semantic HTML creates the page map.”

---

# 1:00 – 2:00

## Lunch

---

# 2:00 – 2:30

## Headings and page outline

## Slide

Use slide 13:

```text
Slide 13: Headings Are Navigation
```

The slide states that headings must reflect document structure and should not be chosen for font size. 

## Exercise 5 setup

Open:

```text
exercise-05-headings-and-page-outline.md
```

## Demo before exercise

Show:

Bad:

```html
<div class="section-title">Course Overview</div>
```

Good:

```html
<h2>Course Overview</h2>
```

Say:

> “A heading is not just text that looks large. It is a navigation point.”

Then show this structure:

```html
<h1>Frontend Accessibility Course</h1>

<h2>Course Overview</h2>

<h2>Who Should Attend</h2>

<h2>Course Schedule</h2>

<h3>Day 1</h3>

<h3>Day 2</h3>

<h2>Registration</h2>
```

Say:

> “The heading level follows the information hierarchy, not the visual style.”

## Give the exercise

Say:

> “Convert the visual heading structure into real heading elements.”

## How to handle the exercise

Ask him:

```text
What is the main page title?
Which items are main sections?
Which items are subsections?
Would this make sense in a heading list?
```

## Debrief line

> “For screen reader users, headings are one of the fastest ways to understand and move through a page.”

---

# 2:30 – 3:15

## Native controls: link or button?

## Slides

Use slides 16–17:

```text
Slide 16: Meaningful Links
Slide 17: Native Controls
```

Slide 17 explains the key distinction: use `<button>` when something happens, use `<a href>` when the user goes somewhere, and avoid clickable `<div>` or `<span>`. 

## Code file

Open:

```text
04-native-vs-fake-controls.html
```

## Exercise 6 setup

Open:

```text
exercise-06-link-or-button.md
```

## Demo before exercise

Say:

> “This is probably the most practical frontend rule today.”

Show:

```html
<div onclick="saveForm()">Save</div>
```

Ask:

> “What might be wrong with this?”

Let him answer.

Then show:

```html
<button type="button">Save</button>
```

Say:

> “A real button gives us focusability, role, keyboard support, and expected screen reader announcement.”

Show:

```html
<span onclick="location.href='/courses'">Courses</span>
```

Then:

```html
<a href="/courses">Courses</a>
```

Say:

> “If it goes somewhere, use a link. If it does something, use a button.”

## Give the exercise

Say:

> “Now classify each scenario as link or button and explain why.”

## How to handle the exercise

Let him answer the scenario table.

Then test the file:

Ask:

```text
Which controls are reachable with Tab?
Which controls are announced as button or link?
Which work with Enter?
Which work with Space?
Which would you allow in a real audit?
```

## Debrief line

> “Many accessibility bugs come from building fake versions of controls that already exist in HTML.”

---

# 3:15 – 3:30

## Break

---

# 3:30 – 3:45

## Focus visibility mini demo

## Slide

Use slide 18:

```text
Slide 18: Focus Visibility
```

This slide explains that invisible focus makes the interface unusable for keyboard users and warns against `outline: none`. 

## What to say

> “Keyboard users need to know where they are. If focus is invisible, the interface becomes unusable.”

## Demo

Show this bad CSS:

```css
:focus {
  outline: none;
}
```

Say:

> “This removes the browser’s focus indicator. It is a common anti-pattern.”

Show better CSS:

```css
a:focus,
button:focus {
  outline: 3px solid black;
  outline-offset: 3px;
}
```

Ask:

> “When you navigate by keyboard, is the focus location clear enough?”

## Debrief line

> “Focus must be visible and predictable.”

---

# 3:45 – 4:05

## Images and alt text

## Slide

Use slide 19:

```text
Slide 19: Images and Alt Text
```

The slide separates informative, decorative, and functional images, which is the correct decision framework. 

## Exercise 7 setup

Open:

```text
exercise-07-image-alternative-text-decision.md
```

## Demo before exercise

Show three examples.

### Informative image

```html
<img
  src="page-structure.png"
  alt="Diagram showing header, navigation, main content, and footer areas">
```

Say:

> “This image gives information, so the alt text communicates the meaning.”

### Decorative image

```html
<img src="decorative-pattern.svg" alt="">
```

Say:

> “This image is decorative, so empty alt text prevents unnecessary announcement.”

### Icon-only button

```html
<button aria-label="Search">
  <span aria-hidden="true">🔍</span>
</button>
```

Say:

> “Here the button needs an accessible name. The icon itself can be hidden.”

## Give the exercise

Say:

> “For each scenario, decide whether the image needs descriptive alt text, empty alt text, an accessible name, or nearby text.”

## How to handle the exercise

Ask:

```text
What information does the image add?
Is the image decorative?
Is the image inside a control?
Would the page lose meaning if the image was removed?
```

## Debrief line

> “Alt text should communicate purpose or meaning in context, not describe every visual detail.”

---

# 4:05 – 4:35

## ARIA-lite disclosure

## Slide

Use slide 20:

```text
Slide 20: ARIA-Lite
```

Slide 20 correctly states that ARIA can communicate name, state, and relationships, but cannot create keyboard behaviour or fix broken HTML. 

## Code file

Open:

```text
05-aria-lite-disclosure.html
```

## Exercise 8 setup

Open:

```text
exercise-08-aria-lite-disclosure-test.md
```

## Demo before exercise

Say:

> “ARIA should enhance good HTML, not rescue bad HTML.”

Show:

```html
<button
  type="button"
  id="details-button"
  aria-expanded="false"
  aria-controls="course-details">
  Show course details
</button>

<div id="course-details" hidden>
  <p>This course covers WCAG 2.2, semantic HTML, keyboard access, and ARIA-lite.</p>
</div>
```

Explain:

```text
button = native role and keyboard behavior
aria-expanded = communicates open or closed state
aria-controls = connects button to controlled content
hidden = removes collapsed content
JavaScript = updates the state
```

## Demonstrate

1. Focus on the button.
2. Ask what NVDA/JAWS announces.
3. Activate the button.
4. Ask whether expanded/collapsed state is announced.
5. Collapse again.
6. Ask whether the content is hidden properly.

## Give the exercise

Say:

> “Now test the disclosure pattern using the checklist.”

## How to handle the exercise

Ask:

```text
Is the button announced clearly?
Is the state announced?
Can it be activated with Enter?
Can it be activated with Space?
Is the content available only when expanded?
Would this pass a real review?
```

## Debrief line

> “ARIA is useful here because it communicates state. The native button still does the interaction work.”

---

# 4:35 – 5:00

## Final Day 1 mini challenge

## Code file

Open:

```text
06-mini-challenge-starter.html
```

## Exercise 9 setup

Open:

```text
exercise-09-final-day-1-mini-challenge.md
```

## Demo before exercise

Show this broken section:

```html
<div class="section-title">Course Details</div>
<p>Click here for more information.</p>
<div onclick="showDetails()">Show details</div>
```

Then show the improved idea:

```html
<section>
  <h2>Course Details</h2>

  <p>
    <a href="#course-details">View course details</a>
  </p>

  <button type="button">Show details</button>
</section>
```

Say:

> “We changed visual structure into semantic structure. The heading is real, the link is meaningful, and the action is a real button.”

## Give the exercise

Say:

> “Now apply today’s rules to the mini challenge. Improve the page using semantic HTML, native controls, meaningful links, alt text, visible focus, and minimal ARIA.”

## How to handle the exercise

Let him work for 15–20 minutes.

Prompt with:

```text
Where should the h1 be?
Where should main start?
Are these links or buttons?
Does this image need alt text?
Is the focus visible?
Is ARIA adding useful state?
```

## Compare with solution

Open:

```text
07-mini-challenge-solution.html
```

Say:

> “This is one possible solution. Let’s compare the decisions.”

## Retest

Ask:

```text
Can you navigate by headings?
Can you navigate by landmarks?
Are links meaningful?
Are buttons clear?
Is state announced?
```

---

# Final closing script

Say:

> “Today we focused on the foundation: WCAG thinking, semantic HTML, headings, landmarks, skip links, meaningful links, native controls, focus visibility, image alternatives, and ARIA-lite.”

> “The main takeaway is: accessibility starts with structure. Use native HTML first. Add ARIA only when it provides useful meaning or state.”

Then ask:

> “Which issue from today do you think causes the most real-world frustration?”

That answer becomes your bridge into Day 2.

---

# Emergency script if you get stuck

Use this anytime:

> “Let’s test what NVDA or JAWS announces.”

Then:

> “From your experience, is that useful or confusing?”

Then:

> “Let’s inspect the code and identify what caused that.”

This is always a safe move.
