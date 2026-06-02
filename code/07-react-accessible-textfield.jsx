import React from "react";

export function TextField({
  id,
  label,
  helpText,
  error,
  type = "text",
  autocomplete,
  required = false
}) {
  const helpId = helpText ? `${id}-help` : undefined;
  const errorId = error ? `${id}-error` : undefined;
  const describedBy = [helpId, errorId].filter(Boolean).join(" ") || undefined;

  return (
    <div className="field">
      <label htmlFor={id}>
        {label}
        {required && <span aria-hidden="true"> *</span>}
      </label>

      {helpText && (
        <p id={helpId} className="hint">
          {helpText}
        </p>
      )}

      <input
        id={id}
        name={id}
        type={type}
        autoComplete={autocomplete}
        required={required}
        aria-invalid={error ? "true" : undefined}
        aria-describedby={describedBy}
      />

      {error && (
        <p id={errorId} className="error">
          {error}
        </p>
      )}
    </div>
  );
}

/*
Trainer notes:
- htmlFor + id creates the label relationship.
- aria-describedby can point to both help text and error text.
- aria-invalid appears only when invalid.
- id must be stable and unique.
- The final rendered HTML matters more than the framework syntax.
*/
