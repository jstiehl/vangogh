import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormControl, ReactiveFormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatTooltipModule } from '@angular/material/tooltip';
import { alternatingCase } from '@jstiehl/alternating-case';

@Component({
  selector: 'app-alternating-case',
  imports: [
    ReactiveFormsModule,
    CommonModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    MatIconModule,
    MatTooltipModule,
  ],
  templateUrl: './alternating-case.component.html',
  styleUrl: './alternating-case.component.scss',
})
export class AlternatingCaseComponent {
  inputControl = new FormControl('');
  output = '';
  copied = false;

  onEnter(event: Event) {
    // Allow Shift+Enter for new lines

    const keyboardEvent = event as KeyboardEvent;
    if (keyboardEvent.shiftKey) {
      return;
    }

    event.preventDefault();
    this.onSubmit();
  }

  onSubmit(event?: Event) {
    event?.preventDefault();
    event?.stopPropagation();
    const value = this.inputControl.value ?? '';
    this.output = this.transform(value);
    this.inputControl.setValue('');
  }

  private transform(value: string): string {
    // Replace with your function
    return alternatingCase(value, { start: 'lower' });
  }

  copyToClipboard() {
    if (!this.output) return;

    navigator.clipboard
      .writeText(this.output)
      .then(() => {
        // Optional: give feedback to user
        console.log('Copied to clipboard!');
      })
      .catch((err) => {
        console.error('Failed to copy!', err);
      });
  }
}
