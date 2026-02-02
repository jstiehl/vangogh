import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { AlternatingCaseComponent } from './alternating-case/alternating-case.component';
import { HeaderComponent } from './header/header.component';

@Component({
  imports: [AlternatingCaseComponent, HeaderComponent, RouterModule],
  selector: 'app-root',
  templateUrl: './app.html',
  styleUrl: './app.scss',
})
export class App {
  protected title = 'alternating-case';
}
