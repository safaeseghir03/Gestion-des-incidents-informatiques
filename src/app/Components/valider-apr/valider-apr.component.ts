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
  selector: 'app-valider-apr',
  templateUrl: './valider-apr.component.html',
  styleUrls: ['./valider-apr.component.css']
})
export class ValiderAprComponent implements OnInit {
  detailsList$:Observable<any[]>;
  Departements$:Observable<any[]>;
  aide:boolean=false;
  aideS:boolean=false;
  actionBtn:string ="Ajouter";
  TicketForm:FormGroup;
  equipeITlist$:Observable<any[]>;
statue:any

   constructor( private formBuilder:FormBuilder,
     private TS :TicketUserSService,
     private detail:NatureTService,
     private equipe :EquipeITService,
     @Inject(MAT_DIALOG_DATA) public editData:any,
     private dialogRef:MatDialogRef<ValiderAprComponent>){}
   
 
     ngOnInit(): void {
   
      this.detailsList$=this.detail.getDetails();
      
     this.equipeITlist$=this.equipe.getMembersIT();
     console.log(this.equipeITlist$)

      this.TicketForm=this.formBuilder.group({
        
        Titre:['',Validators.required],
        dateHeureCreation:[new Date(),Validators.required],
        lieu:['',Validators.required],
        type:['',Validators.required],
        statue:['',Validators.required],
        priorite:['',Validators.required],
        description:['',Validators.required],
        idDetailM:['',Validators.required],
        plannifierDe:[''],
        plannifierA:[''],
        idEq:[''],
        IdDemandeur:[2]
      });
   
      if(this.editData){
        this.statue=this.TicketForm.get("statue")?.value
        this.actionBtn="Modifier"
       
        this.TicketForm.controls['Titre'].setValue(this.editData.titre);
        this.TicketForm.controls['lieu'].setValue(this.editData.lieu);
        this.TicketForm.controls['type'].setValue(this.editData.type);
        this.TicketForm.controls['statue'].setValue(this.editData.statue);
        if (this.TicketForm.get("statue")?.value=="à planifier"){
          this.aide=true;
         this.aideS=true
          }
        this.TicketForm.controls['priorite'].setValue(this.editData.priorite);
        this.TicketForm.controls['description'].setValue(this.editData.description);   
        this.TicketForm.controls['idDetailM'].setValue(this.editData.idDetailM);
        this.TicketForm.controls['plannifierDe'].setValue(this.editData.plannifierDe);
        this.TicketForm.controls['plannifierA'].setValue(this.editData.plannifierA);
      
      
      }
    }
    typeT(value:any){
      console.log(value);
      if (value=="à planifier" && this.TicketForm.get("statue")?.value=="à planifier"){
      this.aide=true;
     this.aideS=true
      }
    

    }
    technicienS(value:any){

    }
    validerTicket(){
   
        var Ticket1={
          idTicket: this.editData.idTicket,
          Titre:this.editData.titre,
          dateHeureCreation:this.editData.dateHeureCreation,
          lieu:this.editData.lieu,
          type:this.TicketForm.get("type")?.value,
          priorite:this.TicketForm.get("priorite")?.value,
          statue:this.TicketForm.get("statue")?.value,
          description:this.editData.description,
          idDetailM:this.editData.idDetailM,
          IdDemandeur:this.editData.idDemandeur,
          plannifierDe:this.TicketForm.get("plannifierDe")?.value,
          plannifierA: this.TicketForm.get("plannifierA")?.value,
          idEq:this.editData.idEq,
       
        }
        console.log(Ticket1)
        this.TS.putTicket(Ticket1,this.editData.idTicket).subscribe({
          next:(res)=>{
            alert("le ticket est validé");
            this.TicketForm.reset();
            this.dialogRef.close('Modifier')
          },
          error:(err)=>{
            alert(err)
          }
        })
      }
    


}

