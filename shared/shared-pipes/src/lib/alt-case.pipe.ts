import { Pipe, PipeTransform } from '@angular/core';
import alternatingCase from '@jstiehl/alternating-case';

@Pipe({
  name: 'altCase',
  standalone: true,
})
export class AltCasePipe implements PipeTransform {
  transform(value: string, ...args: unknown[]): unknown {
    if (!value) return '';
    return alternatingCase(value, { start: 'lower' });
  }
}
