import { Component, OnInit } from '@angular/core';
import { AuthService } from '../_services/auth.service';
import { AlertifyService } from '../_services/alertify.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {

  model: any = {};
  photoUrl: string;

  constructor(public authService: AuthService, private alertify: AlertifyService, private router: Router) { }

  ngOnInit() {
    this.authService.currentPhotoUrl.subscribe(photoUrl => {
      this.photoUrl = photoUrl;
      this.alertify.message('current photo url: ' + this.photoUrl)
    });
  }

  login() {
    // console.log(this.model);
    this.authService.login(this.model).subscribe(
      next => {
        // console.log('successfully logged in');
        this.alertify.success('successfully logged in');
      },
      error => {
        // console.log(error);
        this.alertify.error(error);
      },
      () => {
        this.router.navigate(['/members']);
      }
    );
  }

  loggedIn() {
    return this.authService.isLoggedIn();
  }

  loggedOut() {
    localStorage.removeItem('token');
    this.authService.decodedToken = null;

    localStorage.removeItem('user');
    this.authService.currentUser = null;

    this.alertify.message('logged out');
    this.router.navigate(['/home']);
  }

}
