import { Component, OnInit } from '@angular/core';
import { AuthentificationService } from 'src/app/services/authentification.service';

@Component({
  selector: 'app-forgot-password',
  templateUrl: './forgot-password.component.html',
  styleUrls: ['./forgot-password.component.css']
})
export class ForgotPasswordComponent implements OnInit {
  email : string = '';
  constructor(private auth : AuthentificationService) { }

  ngOnInit(): void {
  }
  forgotPassword() {
    this.auth.forgotPassword(this.email);
    this.email = '';
  }
}
