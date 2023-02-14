import { Component } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {
name="KODECORP"
  trigger: any;



openMyMenu() {
  this.trigger.toggleMenu();
} 
}
