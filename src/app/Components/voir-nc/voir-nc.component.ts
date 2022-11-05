import { Component, OnInit } from '@angular/core';
import { Inject} from '@angular/core';
import {MatDialog, MAT_DIALOG_DATA} from '@angular/material/dialog';
import { MatDialogRef } from '@angular/material/dialog';
import { NatureTService } from 'src/app/services/nature-t.service';
import { Observable } from 'rxjs';
import { UsersService } from 'src/app/services/users.service';
@Component({
  selector: 'app-voir-nc',
  templateUrl: './voir-nc.component.html',
  styleUrls: ['./voir-nc.component.css']
})
export class VoirNcComponent implements OnInit {
  idTicket:any
  titre:any
  dateHeureCreation:any
  lieu:any
  description:any
  idDetailM:any
  type:any
  priorite:any
  statue:any
  
  idEq:any
  IdDemandeur:any
  dateHeureCloture:any
  noteResolution:any
  plannifierDe:any
  plannifierA:any
  detailsList$:Observable<any[]>;
  demandeurList$:Observable<any[]>;
  constructor(
    @Inject(MAT_DIALOG_DATA) public editData:any,
    private dialogRef:MatDialogRef<VoirNcComponent>,
    private detail:NatureTService,
  private userS:UsersService
  ) { }

  ngOnInit(): void {
    if(this.editData){
     
      this.idTicket=this.editData.idTicket;
      this.titre=this.editData.titre;
      this.dateHeureCreation=this.editData.dateHeureCreation;
      this.lieu=this.editData.lieu;
      this.description=this.editData.description;
      this.idDetailM=this.editData.idDetailM;
      this.type=this.editData.type;
      this.priorite=this.editData.priorite;
      this.statue=this.editData.statue;
      this.idEq=this.editData.idEq;
      this.IdDemandeur=this.editData.idDemandeur;
      this.dateHeureCloture=this.editData.dateHeureCloture;
      this.noteResolution=this.editData.noteResolution;
      this.plannifierA=this.editData.plannifierA;
      this.plannifierDe=this.editData.plannifierDe;
      
      
     
    }
    this.detailsList$=this.detail.getDetails();
    this.demandeurList$=this.userS.getUsers();
  }

}

