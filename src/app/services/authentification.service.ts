import { Injectable } from '@angular/core';
import { AngularFireAuth} from  "@angular/fire/compat/auth";

import { BehaviorSubject, from, observable, Observable } from 'rxjs';

 import firebase from 'firebase/compat/app';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { Route, Router } from '@angular/router';
import { observableToBeFn } from 'rxjs/internal/testing/TestScheduler';
// import 'firebase/compat/auth';
// import 'firebase/compat/firestore';
// import { auth } from 'firebase/compat/app';
// const auth = firebase.auth();


// export { auth };


@Injectable({
  providedIn: 'root'
})
export class AuthentificationService {

 User:Observable<any>
 userUid : any;
  constructor(private af : AngularFireAuth, private fs:AngularFirestore, private route:Router) { 
    this.User= this.af.user;
  }

  public currentUser:any;
  public userStatus:string;
  public userStatusChanges:any;
  

  setUserStatusChanges(userStatus:any):void{
this.userStatus=userStatus;
this.userStatusChanges.next(userStatus);
 }
   signUp( email: string, password: string) {
    return this.af.createUserWithEmailAndPassword( email, password);
    
  
  }
  login(email: string, password: string) {
    this.af.signInWithEmailAndPassword(email,password)
    .then((user)=>{
      console.log(user.user?.email)
      if(user.user?.emailVerified == true) {
        this.fs.collection("users").ref.where("Email","==",user.user?.email).onSnapshot(snap=>{
          snap.forEach(userRef =>{
            console.log(userRef.data());
            
           
  
            if(userRef.get("role")=="user"){
              this.route.navigate(["/TicketUser"]);
  
            }else if(userRef.get("role")=="Gestionnaire des tickets"){
              this.route.navigate(["/TicketGest"]);
  
            }else if(userRef.get("role")=="Technicien"){
                this.route.navigate(["/TicketTech"]);
               
            }else if (userRef.get("role")=="Responsable SI")
                this.route.navigate(["/TicketRes"]);
  
  
  
          }
    
              
             
          )
        })
      } else {
        this.route.navigate(['/verifyEmail']);
      }
        
     
      

      
    })
  }

  signOut(){
    return from(this.af.signOut());
    
  }




forgotPassword(email:string){
  this.af.sendPasswordResetEmail(email).then(()=>{
    this.route.navigate(["/verifyEmail"])
  },err =>{
    alert('something went wrong');
  })
}

sendEmailForVarification(user : any) {
  console.log(user);
  user.sendEmailVerification().then((res : any) => {
    console.log("mail sent")
  }, (err : any) => {
    alert('Something went wrong. Not able to send mail to your email.')
  })
}

 }
