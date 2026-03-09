import { Component } from '@angular/core';
import { Input } from '@angular/core';

@Component({
  selector: 'app-active-habits',
  imports: [],
  templateUrl: './active-habits.component.html',
  styleUrl: './active-habits.component.css',
})
export class ActiveHabitsComponent {
  @Input() activeCount: number = 0;
}
