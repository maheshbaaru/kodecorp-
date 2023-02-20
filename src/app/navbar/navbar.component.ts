import { Component,OnInit } from '@angular/core';
import { StorageService } from '../services/storage.service';
import { AuthguardService } from '../services/authguard.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit{
name="KODECORP"


private roles: string[] = [];
isLoggedIn = false;
showAdminBoard = false;
showModeratorBoard = false;
username?: string;
trigger: any;
isHome: boolean;


constructor(
  private router: Router,private storageService: StorageService, private authService: AuthguardService) { }

ngOnInit(): void {
  this.isLoggedIn = this.storageService.isLoggedIn();

  if (this.isLoggedIn) {
    const user = this.storageService.getUser();
    this.roles = user.roles;

    this.showAdminBoard = this.roles.includes('ROLE_ADMIN');
    this.showModeratorBoard = this.roles.includes('ROLE_MODERATOR');

    this.username = user.username;
  }
  this.isHome = true;

}
openMyMenu() {
  this.trigger.toggleMenu();
} 
hideHome(){
  this.isHome = false;
}


logout(): void {
  this.authService.logout().subscribe({
    next: res => {
      console.log(res);
      this.storageService.clean();

      window.location.reload();
    },
    error: err => {
      console.log(err);
    }
  });

  this.router.navigate(['/login']);
}
}

