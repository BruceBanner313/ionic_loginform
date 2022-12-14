import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthenticationService } from '../shared/authentication-service';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.page.html',
  styleUrls: ['./registration.page.scss'],
})
export class RegistrationPage implements OnInit {
  constructor(
    public authService: AuthenticationService,
    public router: Router
  ) {}

  ngOnInit() {}

  signUp(email, password) {
    this.authService
      .RegisterUser(email.value, password.value)
      .then((res) => {
        this.authService.SendVerificationMail();
      })
      .catch((error) => {
        window.alert(error.message);
      })
      if(this.authService.SendVerificationMail){
        window.alert('Verification Mail was sent');
        this.router.navigate(["/login"])
      } ;
  }
}
