import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MatDialog } from '@angular/material/dialog';

import {AfterViewInit, ViewChild} from '@angular/core';
import {MatPaginator} from '@angular/material/paginator';
import {MatSort} from '@angular/material/sort';
import {MatTableDataSource} from '@angular/material/table';
import { TicketUserSService } from 'src/app/services/ticket-user-s.service';
import { ChangeretatComponent } from '../changeretat/changeretat.component';
import { VoirTComponent } from '../voir-t/voir-t.component';
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';
@Component({
  selector: 'app-user-clo',
  templateUrl: './user-clo.component.html',
  styleUrls: ['./user-clo.component.css']
})
export class UserCloComponent implements OnInit {
  displayedColumns: string[] = ['idTicket', 'titre','type','statue', 'dateHeureCreation', 'dateHeureCloture','action'];
  dataSource: MatTableDataSource<any>;
tableT:any=[];
idTech:number=2;
Uid:any
  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;

  constructor( private TS :TicketUserSService,private route :Router,public dialog: MatDialog,private TUS :TicketUserSService) { }
  ngOnInit(): void {
    var user = firebase.auth().currentUser;
    if (user) {
      this.Uid=user.uid;
      console.log("User is signed in.") 
      
    } else {
      console.log(" No user is signed in.")
      
    }
     this.getAllTickets();
  }
  openDialog(row:any){
   
    this.dialog.open(ChangeretatComponent,{
      width:'55%',
      data:row
          }).afterClosed().subscribe(val=>{
            if(val==='Modifier'){
              this.getAllTickets();
              
            }
          })
  }
  voirT(row:any){
    this.dialog.open(VoirTComponent,{
      width:'55%',
      data:row
          }).afterClosed().subscribe(val=>{
            if(val==='Modifier'){
              this.getAllTickets();
            }
          })

  }

  getAllTickets(){
    this.tableT =[];
    this.TUS.getTicket().subscribe({
      next:(res)=>{
       
        for(let item of res){
       if (item.statue=="cloture" && item.idDemandeur==this.Uid ){
       this.tableT.push(item)
        
      }
        
        }
        console.log(this.tableT)
       
        this.dataSource=new MatTableDataSource(this.tableT);
        
        this.dataSource.paginator=this.paginator;
        this.dataSource.sort=this.sort
      },
      error:(err)=>{
        alert("error ");
      }
    })
  }


  comfirmer(row:any){
console.log(row)

  var Ticket1={
    idTicket: row.idTicket,
    Titre: row.titre,
    dateHeureCreation:row.dateHeureCreation,
    lieu:row.lieu,
    type:row.type,
    idEq:row.idEq,
    statue:"Cloturé et Comfirmé",
    priorite:row.priorite,
    noteResolution:row.noteResolution,
    dateHeureCloture:row.dateHeureCloture,
    description:row.description,
    idDetailM:row.idDetailM,
    IdDemandeur: row.idDemandeur
 
  }
  console.log(Ticket1)
  this.TS.putTicket(Ticket1,row.idTicket).subscribe({
    next:(res)=>{
      alert("le ticket est confirmé");
     
    },
    error:(err)=>{
      alert(err)
    }
  })


  }

  reouvrir(row:any){
    var Ticket1={
      idTicket: row.idTicket,
      Titre: row.titre,
      dateHeureCreation:row.dateHeureCreation,
      lieu:row.lieu,
      type:row.type,
      idEq:row.idEq,
      statue:"réouverte",
      priorite:row.priorite,
      noteResolution:row.noteResolution,
      dateHeureCloture:row.dateHeureCloture,
      description:row.description,
      idDetailM:row.idDetailM,
      IdDemandeur: row.idDemandeur
   
    }
    console.log(Ticket1)
    this.TS.putTicket(Ticket1,row.idTicket).subscribe({
      next:(res)=>{
        alert("le ticket est réouverte");
       
      },
      error:(err)=>{
        alert(err)
      }
    })
  }


  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  
    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }

 

}




