import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { AltCasePipe } from '@vangogh/shared-pipes';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [RouterModule, AltCasePipe],
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent {
  header = 'Alternating Case';
}
