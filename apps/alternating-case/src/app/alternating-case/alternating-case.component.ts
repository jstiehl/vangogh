import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormControl, ReactiveFormsModule, Validators } from '@angular/forms';
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
  public readonly MAX_CHARS = 1000;
  inputControl = new FormControl('', [Validators.maxLength(1000)]);
  output = '';
  copied = false;

  /**
   * Estimate the number of rows required to display MAX_CHARS without scrolling.
   * Uses an estimated characters-per-line value which depends on layout/font.
   */
  get rowsCount(): number {
    const estimatedCharsPerLine = 80; // adjust if your layout is wider/narrower
    return Math.max(5, Math.ceil(this.MAX_CHARS / estimatedCharsPerLine));
  }

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
    this.copied = false;
    const value = this.inputControl.value ?? '';
    this.output = this.transform(value);
    this.inputControl.setValue('');
  }

  // new: limit pasted content to MAX_CHARS
  onPaste(event: ClipboardEvent) {
    const pasted = event.clipboardData?.getData('text') ?? '';
    const current = (this.inputControl.value ?? '') as string;
    const remaining = this.MAX_CHARS - current.length;
    if (pasted.length > remaining) {
      // prevent default paste and insert truncated content
      event.preventDefault();
      const toInsert = pasted.slice(0, Math.max(0, remaining));
      this.inputControl.setValue(current + toInsert);
    }
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
        this.copied = true;
      })
      .catch((err) => {
        console.error('Failed to copy!', err);
      });
  }
}
