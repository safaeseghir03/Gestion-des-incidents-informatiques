import { Component, OnInit } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { Router } from '@angular/router';
import { AuthentificationService } from 'src/app/services/authentification.service';
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';
import { AngularFireStorage, AngularFireStorageReference, AngularFireUploadTask } from '@angular/fire/compat/storage';
import { HotToastService } from '@ngneat/hot-toast';
import { getAuth, updatePassword } from "firebase/auth";
import { MatDialog } from '@angular/material/dialog';
import { ModifierPComponent } from 'src/app/Components/modifier-p/modifier-p.component';

import { getStorage, ref, getDownloadURL } from "firebase/storage";
@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
Uid:any;
PhotoURL:any
task: AngularFireUploadTask;
ref:AngularFireStorageReference;
Url:any;
Nom:any
Prenom:any
role:any
percentages:any;
id:any
MP:any
Email:any
Tele:any
user$ =this.authService.User

  constructor(public dialog: MatDialog,private route :Router,private authService:AuthentificationService,private fs : AngularFirestore,private as: AuthentificationService, private router: Router, private toast: HotToastService, private fst : AngularFireStorage) { }


  ngOnInit(): void {
    var user = firebase.auth().currentUser;
    if (user) {
      this.Uid=user.uid;
      console.log("User is signed in.") 
      // var uidC=this.Uid
      // console.log(uidC)
      const docref =this.fs.collection("users").doc(this.Uid);
      docref.get().subscribe(doc=>{
        this.Nom=doc.get('Nom')
        this.Prenom=doc.get('Prenom')
        this.role=doc.get('role')
    
      })
    } else {
      console.log(" No user is signed in.")
      
    }
 
  
  const docref =this.fs.collection("users").doc(this.Uid);
  docref.get().subscribe(Rec=>{
  if(Rec.exists){
    this. PhotoURL=Rec.get('photoURL'),
    this.id=this.Uid
    this.Nom=Rec.get('Nom')
    this.Prenom=Rec.get('Prenom')
    this.Email=Rec.get('Email')
    this.Tele=Rec.get('Tele')
    this.MP=Rec.get('Password')
    this.role=Rec.get('role')
  
   
  }else{
    console.log("error photo")
   
  }
  })
  
  
    }

    openDialog() {
      this.dialog.open(ModifierPComponent, {
        width:'35%'
      }).afterClosed().subscribe(val=>{
        
      })
    }
  
  uploadImage(event:any){

    const id =Math.random().toString(36).substring(2);
    this.ref = this.fst.ref(id);
    this.task = this.ref.put(event.target.files[0]);
    this.percentages=this.task.percentageChanges()
    this.task.then((data)=>{
      data.ref.getDownloadURL().then(url=>{
      this.Url=url
      this.fs.collection("users").doc(this.Uid).update({
        photoURL: url
      })
    })
    
    })
   
    var user = firebase.auth().currentUser;
    if (user) {
      this.Uid=user.uid;
      // User is signed in.
    } else {
      // No user is signed in.
    }
    console.log(this.Uid)
    console.log(this.Url)
   

    // this.fs.collection("Recruteurs").doc(this.Uid).set({
    
    //   photoURL: this.Url
    // })
  

}



}
