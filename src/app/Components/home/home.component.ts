import { Component, OnInit } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { HotToastService } from '@ngneat/hot-toast';
import * as firebase from 'firebase/compat';
import { AuthentificationService } from 'src/app/services/authentification.service';
import { getAuth, onAuthStateChanged } from "firebase/auth";
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  hide = true;
  Uid:any
  email = new FormControl('', [Validators.required, Validators.email]);
  constructor(private fs:AngularFirestore,private authService: AuthentificationService ,private route : Router , private toast: HotToastService) { }

  loginForm = new FormGroup({
    email: new FormControl('', [Validators.required, Validators.email]),
    password: new FormControl('', [Validators.required])
  });
  ngOnInit(): void {
  }
 
  submit() {
    if (!this.loginForm.valid) {
      return;
    }
    
const { email,password} = this.loginForm.value;
  return this.authService.login(email, password)
  // .pipe(
  //     this.toast.observe({
  //       success: 'Connecté avec succès',
  //       loading: 'Se connecter...',
  //       error: ({ message }) => `Il y avait une erreur: ${message} `
  //     })
  //   ).subscribe(() =>{
  
  
  
  // })
}
  getErrorMessage() {
    if (this.email.hasError('required')) {
      return 'You must enter a value';
    }

    return this.email.hasError('email') ? 'Not a valid email' : '';
  }
  goToDeprtement(){
    return this.route.navigate(["/DepartementC"])
  }
  forgotPassword(){
    return this.route.navigate(["/forgotPassword"])
  }

}
