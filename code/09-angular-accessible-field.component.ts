import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-accessible-field',
  templateUrl: './accessible-field.component.html'
})
export class AccessibleFieldComponent {
  @Input() id = '';
  @Input() label = '';
  @Input() type = 'text';
  @Input() autocomplete = '';
  @Input() helpText = '';
  @Input() error = '';
  @Input() required = false;

  get helpId(): string | null {
    return this.helpText ? `${this.id}-help` : null;
  }

  get errorId(): string | null {
    return this.error ? `${this.id}-error` : null;
  }

  get describedBy(): string | null {
    const ids = [];

    if (this.helpId) {
      ids.push(this.helpId);
    }

    if (this.errorId) {
      ids.push(this.errorId);
    }

    return ids.length ? ids.join(' ') : null;
  }
}

/*
Trainer notes:
- The Angular syntax is different, but the final rendered HTML must still preserve:
  label -> input
  input -> help text
  input -> error text
  invalid state -> aria-invalid
*/
