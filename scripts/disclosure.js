function setupDisclosure(buttonId, contentId) {
  const button = document.getElementById(buttonId);
  const content = document.getElementById(contentId);

  if (!button || !content) {
    return;
  }

  button.addEventListener("click", () => {
    const isExpanded = button.getAttribute("aria-expanded") === "true";
    const nextExpandedState = !isExpanded;

    button.setAttribute("aria-expanded", String(nextExpandedState));
    content.hidden = !nextExpandedState;

    button.textContent = nextExpandedState
      ? "Hide course details"
      : "Show course details";
  });
}

setupDisclosure("details-button", "course-details");
