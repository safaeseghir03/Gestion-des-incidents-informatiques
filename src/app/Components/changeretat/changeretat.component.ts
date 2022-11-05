import { Component, OnInit } from '@angular/core';
import { Inject} from '@angular/core';
import {MatDialog, MAT_DIALOG_DATA} from '@angular/material/dialog';
import {FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';
import { Observable } from 'rxjs';
import { UsersService } from 'src/app/services/users.service';
import { MatDialogRef } from '@angular/material/dialog';
import { TicketUserSService } from 'src/app/services/ticket-user-s.service';
import { NatureTService } from 'src/app/services/nature-t.service';
import { EquipeITService } from 'src/app/services/equipe-it.service';

@Component({
  selector: 'app-changeretat',
  templateUrl: './changeretat.component.html',
  styleUrls: ['./changeretat.component.css']
})
export class ChangeretatComponent implements OnInit {
  detailsList$:Observable<any[]>;
  Departements$:Observable<any[]>;
  aide:any;
  aideS:any
  actionBtn:string ="Ajouter";
  TicketForm:FormGroup;
  equipeITlist$:Observable<any[]>;
showInput:boolean=false;
dateclo:any
   constructor( private formBuilder:FormBuilder,
     private TS :TicketUserSService,
     private detail:NatureTService,
     private equipe :EquipeITService,
     @Inject(MAT_DIALOG_DATA) public editData:any,
     private dialogRef:MatDialogRef<ChangeretatComponent>){}
   
 
     ngOnInit(): void {
   
      this.detailsList$=this.detail.getDetails();
      
     this.equipeITlist$=this.equipe.getMembersIT();
     console.log(this.equipeITlist$)

      this.TicketForm=this.formBuilder.group({
        
        Titre:[''],
        dateHeureCreation:[new Date()],
        lieu:[''],
        type:[''],
        statue:[''],
        priorite:[''],
        description:[''],
        idDetailM:[''],
        idEq:[''],
        IdDemandeur:[2],
        noteResolution:['']
      });
  
      if(this.editData){
        this.actionBtn="Modifier"
        this.TicketForm.controls['Titre'].setValue(this.editData.titre);
        this.TicketForm.controls['lieu'].setValue(this.editData.lieu);
        this.TicketForm.controls['description'].setValue(this.editData.description); 
        this.TicketForm.controls['statue'].setValue(this.editData.statue);  
        this.TicketForm.controls['type'].setValue(this.editData.type);
        this.TicketForm.controls['priorite'].setValue(this.editData.priorite);
      }
    }
    typeT(value:any){
      console.log(value);
      if (value=="cloture"){
      this.showInput=true;
      this.dateclo=new Date();
      }else{
        this.showInput=false;
        this.dateclo=null;
      }
    

    }
   
    validerTicket(){
   
        var Ticket1={
          idTicket: this.editData.idTicket,
          Titre:this.editData.titre,
          dateHeureCreation:this.editData.dateHeureCreation,
          lieu:this.editData.lieu,
          type:this.editData.type,
          priorite:this.TicketForm.get("priorite")?.value,
          statue:this.TicketForm.get("statue")?.value,
          description:this.TicketForm.get("description")?.value,
          noteResolution:this.TicketForm.get("noteResolution")?.value,
          dateHeureCloture:this.dateclo,
          idDetailM:this.editData.idDetailM,
          IdDemandeur:this.editData.idDemandeur,
          idEq:this.editData.idEq,
       
        }
        console.log(Ticket1)
        this.TS.putTicket(Ticket1,this.editData.idTicket).subscribe({
          next:(res)=>{
            alert("le ticket est validé ");
            this.TicketForm.reset();
            this.dialogRef.close('Modifier')
          },
          error:(err)=>{
            alert(err)
          }
        })
      }
    


}

