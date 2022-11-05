import { Component, OnInit } from '@angular/core';
import { Inject} from '@angular/core';
import {MatDialog, MAT_DIALOG_DATA} from '@angular/material/dialog';
import {FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';
import { Observable } from 'rxjs';
import { UsersService } from 'src/app/services/users.service';
import { MatDialogRef } from '@angular/material/dialog';
import { TicketUserSService } from 'src/app/services/ticket-user-s.service';
import { NatureTService } from 'src/app/services/nature-t.service';
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore'

@Component({
  selector: 'app-add-ticket-user',
  templateUrl: './add-ticket-user.component.html',
  styleUrls: ['./add-ticket-user.component.css']
})
export class AddTicketUserComponent implements OnInit {
 detailsList$:Observable<any[]>;
 Departements$:Observable<any[]>;
 aide:any;
 actionBtn:string ="Ajouter";
 TicketForm:FormGroup
 Uid:any
 
  constructor( private formBuilder:FormBuilder,
    private TS :TicketUserSService,
    private detail:NatureTService,
    @Inject(MAT_DIALOG_DATA) public editData:any,
    private dialogRef:MatDialogRef<AddTicketUserComponent>){}
  

  ngOnInit(): void {
    var user = firebase.auth().currentUser;
    if (user) {
      this.Uid=user.uid;
      console.log("User is signed in.") 
    
   
    } else {
      console.log(" No user is signed in.")
      
    }
    this.detailsList$=this.detail.getDetails();
    console.log(this.detailsList$)
    // var detail2=this.detail.getAllDetails();
    // console.log(detail2);


this.TicketForm=this.formBuilder.group({
      
      Titre:['',Validators.required],
      dateHeureCreation:[new Date()],
      lieu:['',Validators.required],
      statue:['Nouveau'],
      description:['',Validators.required],
      idDetailM:['',Validators.required],
      IdDemandeur:[this.Uid]
    });

    if(this.editData){
      this.actionBtn="Modifier"
      this.TicketForm.controls['Titre'].setValue(this.editData.titre);
      this.TicketForm.controls['lieu'].setValue(this.editData.lieu);
      this.TicketForm.controls['description'].setValue(this.editData.description);   
      this.TicketForm.controls['idDetailM'].setValue(this.editData.idDetailM);
    }
  }
  NatureT(value:any){
    console.log(value);
    this.aide=value;
  }
  addTicket(){
   
  

    if(this.editData){
      var Ticket1={
        idTicket: this.editData.idTicket,
        Titre: this.TicketForm.get("Titre")?.value,
        dateHeureCreation:new Date(),
        lieu:this.TicketForm.get("lieu")?.value,
        description:this.TicketForm.get("description")?.value,
        idDetailM:this.TicketForm.get("idDetailM")?.value,
        IdDemandeur: 2
     
      }
      console.log(Ticket1)
      this.TS.putTicket(Ticket1,this.editData.idTicket).subscribe({
        next:(res)=>{
          alert("le ticket a été bien modifier ");
          this.TicketForm.reset();
          this.dialogRef.close('Modifier')
        },
        error:(err)=>{
          alert(err)
        }
      })
    }else{

      
      var Ticket2={
        
        Titre: this.TicketForm.get("Titre")?.value,
        dateHeureCreation:new Date(),
        lieu:this.TicketForm.get("lieu")?.value,
        statue:"Nouveau",
        description:this.TicketForm.get("description")?.value,
        idDetailM:this.TicketForm.get("idDetailM")?.value,
        IdDemandeur:this.Uid
  }
     console.log(Ticket2)
      this.TS.addTicket(this.TicketForm.value).subscribe({
        next:(res)=>{
          alert("le ticket a été bien enregistrer")
          this.TicketForm.reset();
          this.dialogRef.close('ajouter');
        },
        error:(err)=>{
          alert(err)
        }
      })
    }
  
    }



}
