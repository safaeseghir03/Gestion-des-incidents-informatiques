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
  selector: 'app-valider-esc',
  templateUrl: './valider-esc.component.html',
  styleUrls: ['./valider-esc.component.css']
})
export class ValiderEscComponent implements OnInit {

  detailsList$:Observable<any[]>;
  Departements$:Observable<any[]>;
  aide:any;
  aideS:any
  actionBtn:string ="Ajouter";
  TicketForm:FormGroup;
  equipeITlist$:Observable<any[]>;


   constructor( private formBuilder:FormBuilder,
     private TS :TicketUserSService,
     private detail:NatureTService,
     private equipe :EquipeITService,
     @Inject(MAT_DIALOG_DATA) public editData:any,
     private dialogRef:MatDialogRef<ValiderEscComponent>){}
   
 
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
        IdDemandeur:[2]
      });
  
      if(this.editData){
        this.actionBtn="Modifier"
        this.TicketForm.controls['Titre'].setValue(this.editData.titre);
        this.TicketForm.controls['lieu'].setValue(this.editData.lieu);
        this.TicketForm.controls['type'].setValue(this.editData.type);
        this.TicketForm.controls['statue'].setValue(this.editData.statue);
        this.TicketForm.controls['description'].setValue(this.editData.description);
        this.TicketForm.controls['priorite'].setValue(this.editData.priorite); 
        this.TicketForm.controls['idEq'].setValue(this.editData.idEq);  
        this.TicketForm.controls['idDetailM'].setValue(this.editData.idDetailM);
      }
    }
    typeT(){
      var value=this.TicketForm.get("type")?.value
      if (value=="Incident"){
      this.aide="Technicien";
      this.aideS="en cours";
      }
      if (value=="Problème"){
        this.aide="Technicien";
        this.aideS="en cours";
      }
      if (value=="Changement"){
        this.aide="Responsable SI";
        this.aideS="Pour Aprobation"
      }

    }
    technicienS(value:any){

    }
    validerTicket(){
   
      var value=this.TicketForm.get("type")?.value
      if (value=="Incident"){
      this.aide="Technicien";
      this.aideS="en cours";
      }
      if (value=="Problème"){
        this.aide="Technicien";
        this.aideS="en cours";
      }
      if (value=="Changement"){
        this.aide="Responsable SI";
        this.aideS="Pour Aprobation"
      }

      
        var Ticket1={
          idTicket: this.editData.idTicket,
          Titre:this.editData.titre,
          dateHeureCreation:this.editData.dateHeureCreation,
          lieu:this.editData.lieu,
          type:this.TicketForm.get("type")?.value,
          priorite:this.TicketForm.get("priorite")?.value,
          statue:this.aideS,
          description:this.editData.description,
          idDetailM:this.editData.idDetailM,
          IdDemandeur:this.editData.idDemandeur,
          idEq:this.TicketForm.get("idEq")?.value,
       
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

