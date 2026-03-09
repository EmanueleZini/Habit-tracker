import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HeaderComponent } from './header.component/header.component';
import { ActiveHabitsComponent } from './active-habits.component/active-habits.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [FormsModule, HeaderComponent, ActiveHabitsComponent],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})

export class AppComponent {
}