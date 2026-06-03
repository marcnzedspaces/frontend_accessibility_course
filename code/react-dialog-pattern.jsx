import React, { useEffect, useRef } from "react";

export function Dialog({ open, title, children, onClose }) {
  const dialogRef = useRef(null);
  const closeButtonRef = useRef(null);
  const previousFocus = useRef(null);

  useEffect(() => {
    const dialog = dialogRef.current;
    if (!dialog) return;

    if (open) {
      previousFocus.current = document.activeElement;
      dialog.showModal();
      closeButtonRef.current?.focus();
    } else if (dialog.open) {
      dialog.close();
    }
  }, [open]);

  function handleClose() {
    onClose();
    previousFocus.current?.focus();
  }

  return (
    <dialog ref={dialogRef} aria-labelledby="dialog-title" onClose={handleClose}>
      <h2 id="dialog-title">{title}</h2>
      <div>{children}</div>
      <button type="button" ref={closeButtonRef} onClick={handleClose}>Close</button>
    </dialog>
  );
}
