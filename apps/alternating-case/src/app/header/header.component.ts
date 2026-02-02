import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import alternatingCase from '@jstiehl/alternating-case';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [RouterModule],
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent {
  header = alternatingCase('Alternating Case', { start: 'lower' });
}
