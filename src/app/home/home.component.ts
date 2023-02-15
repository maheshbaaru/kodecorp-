import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent {
  data = [
    { pendingLeaves: 24, upComingRevision: 0, ActiveEmploye: 36, profile: '' },
  ];
}
