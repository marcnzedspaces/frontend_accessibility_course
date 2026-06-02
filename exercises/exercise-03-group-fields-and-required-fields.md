# Exercise 3: Group Fields and Required Fields

Complete this exercise after the trainer demonstration.

## Code File

Open this starter file:

[`../code/04-grouping-required-starter.html`](../code/04-grouping-required-starter.html)

Helpful comparison file:

[`../code/02-good-form.html`](../code/02-good-form.html)

## Objective

Use `fieldset`, `legend`, labels, and clear required-field indicators to improve grouped form controls.

## Key Pattern

Related radio buttons or checkboxes should be grouped.

```html
<fieldset>
  <legend>Preferred contact method</legend>

  <label>
    <input type="radio" name="contact" value="email">
    Email
  </label>

  <label>
    <input type="radio" name="contact" value="phone">
    Phone
  </label>
</fieldset>
```

## Instructions

1. Open `04-grouping-required-starter.html`.
2. Test the current radio group using keyboard and NVDA or JAWS.
3. Ask whether the group question is announced clearly.
4. Inspect the code.
5. Improve the group using semantic HTML.
6. Retest the improved group.

## Requirements

Update the code so that:

- [ ] The group uses `<fieldset>`.
- [ ] The group question uses `<legend>`.
- [ ] Each radio option has a clear label.
- [ ] Required status is communicated clearly.
- [ ] The asterisk is not the only required-field indicator.
- [ ] The group can be tested with NVDA or JAWS.

## Your Improved Code

```html
Write your improved code here.
```

## Testing Checklist

After improving the code, test it.

- [ ] Is the group question announced?
- [ ] Are the options announced clearly?
- [ ] Is the selected state announced?
- [ ] Is the required status clear?
- [ ] Does the group make sense without visual layout?

## Reflection Questions

1. Why is text above a radio group not always enough?
2. What does the `legend` provide that individual labels do not?
3. How should required fields be communicated?
4. What could go wrong if a framework component renders the radio buttons but omits the `fieldset`?
