import { Component, OnInit } from '@angular/core';
import { Inject} from '@angular/core';
import {MatDialog, MAT_DIALOG_DATA} from '@angular/material/dialog';
import {FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';

import { MatDialogRef } from '@angular/material/dialog';
import { TicketUserSService } from 'src/app/services/ticket-user-s.service';

import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore'
import { ProbSolService } from 'src/app/services/prob-sol.service';
import { AngularFireStorage, AngularFireStorageReference, AngularFireUploadTask } from '@angular/fire/compat/storage';
import { AngularFirestore } from '@angular/fire/compat/firestore';

@Component({
  selector: 'app-addprob-sol',
  templateUrl: './addprob-sol.component.html',
  styleUrls: ['./addprob-sol.component.css']
})
export class AddprobSolComponent implements OnInit {
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
  aide:any;
  actionBtn:string ="Ajouter";
  ProbForm:FormGroup
 extention:any
  
   constructor( private formBuilder:FormBuilder,
    private fst:AngularFireStorage,
     private prob :ProbSolService,
     private fs:AngularFirestore,

     @Inject(MAT_DIALOG_DATA) public editData:any,
     private dialogRef:MatDialogRef<AddprobSolComponent>){}
   
 
   ngOnInit(): void {
     var user = firebase.auth().currentUser;
     if (user) {
       this.Uid=user.uid;
       console.log("User is signed in.") 
     
    
     } else {
       console.log(" No user is signed in.")
       
     }
   
 
 this.ProbForm=this.formBuilder.group({
       
       probleme:[this.extention,Validators.required],
       solution:[this.Url,Validators.required],
       etapes:['',Validators.required],
      
       dateCr:[new Date()],
       idEq:[this.Uid],
      
     });
 
     if(this.editData){
       this.actionBtn="Modifier"
      
       this.ProbForm.controls['probleme'].setValue(this.editData.probleme);
       this.ProbForm.controls['etapes'].setValue(this.editData.etapes);   
       this.ProbForm.controls['solution'].setValue(this.editData.solution);
     }
   }
   NatureT(value:any){
     console.log(value);
     this.aide=value;
   }
   addProb(){
    
   
 
     if(this.editData){
       var solution={
      
         probleme:this.ProbForm.get("probleme")?.value,
         etapes:this.ProbForm.get("etapes")?.value,
         solution:this.ProbForm.get("solution")?.value,
         pc:this.Url,
         dateCr:new Date(),
         idEq:this.Uid,
       
       }
       console.log(solution)
       this.prob.putProbSol(solution,this.editData.idTicket).subscribe({
         next:(res)=>{
           alert("le ticket a été bien modifier ");
           this.ProbForm.reset();
           this.dialogRef.close('Modifier')
         },
         error:(err)=>{
           alert(err)
         }
       })
     }else{
 
      var solution={
      
        probleme:this.ProbForm.get("probleme")?.value,
        etapes:this.ProbForm.get("etapes")?.value,
        solution:this.ProbForm.get("solution")?.value,
        pc:this.Url,
        dateCr:new Date(),
        idEq:this.Uid,
      
      }
    
      console.log(this.ProbForm.value)
       this.prob.addProbSol(solution).subscribe({
         next:(res)=>{
           alert("la solution a été bien enregistrer")
           this.ProbForm.reset();
           this.dialogRef.close('ajouter');
         },
         error:(err)=>{
           alert(err)
         }
       })
     }
  
     }
 
     uploadImage(event:any){

      const id =Math.random().toString(36).substring(2);
      this.ref = this.fst.ref(id);
      this.task = this.ref.put(event.target.files[0]);
      this.extention=event.target.files[0].type;
      this.percentages=this.task.percentageChanges()
      this.task.then((data)=>{
        data.ref.getDownloadURL().then(url=>{
        this.Url=url.toString();
      
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
 
