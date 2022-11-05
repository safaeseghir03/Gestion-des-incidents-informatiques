import { Component, OnInit } from '@angular/core';
import { Inject} from '@angular/core';
import {MAT_DIALOG_DATA} from '@angular/material/dialog';
import {FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';

import { MatDialogRef } from '@angular/material/dialog';
import { AngularFirestore } from '@angular/fire/compat/firestore';

import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';
@Component({
  selector: 'app-modifier-p',
  templateUrl: './modifier-p.component.html',
  styleUrls: ['./modifier-p.component.css']
})
export class ModifierPComponent implements OnInit {

 
  AnMp= new FormControl('', Validators.required);
  NvMp= new FormControl('', Validators.required);
  
  actionBtn:string ="Ajouter";
  modifierMP:FormGroup
  Uid:any
  Password:any
  constructor( private formBuilder:FormBuilder,
   
    private fs: AngularFirestore,
    @Inject(MAT_DIALOG_DATA) public editData:any,
    private dialogRef:MatDialogRef<ModifierPComponent>){}
  

  ngOnInit(): void {
    var user = firebase.auth().currentUser;
    if (user) {
      this.Uid=user.uid;
      console.log("User is signed in.") 
      // var uidC=this.Uid
      // console.log(uidC)
      const docref =this.fs.collection("users").doc(this.Uid);
      docref.get().subscribe(doc=>{
        this.Password=doc.get('Password')
        
    
      })
    } else {
      console.log(" No user is signed in.")
      
    }
    this.modifierMP=this.formBuilder.group({
    
      AnMp:['',Validators.required],
      NvMp:['',Validators.required],
     

    });


  }

  

  modifier(){
    var user = firebase.auth().currentUser;
    console.log(user)
    var newpw=this.modifierMP.get("NvMp")?.value;
    console.log(newpw)
    var db = firebase.firestore();
    console.log(db)

    var id=this.Uid
    console.log(id)
    if(this.modifierMP.get("AnMp")?.value==this.Password){
           user?.updatePassword(newpw)
           .then(function() {
            db.collection("users").doc(id).update({
              Password:newpw
            })
            console.log(newpw+"ok")
          }).catch(function(error) {
            console.log(error)
          });
    }
    
  }
 


}
