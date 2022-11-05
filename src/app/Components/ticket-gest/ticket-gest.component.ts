import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MatDialog } from '@angular/material/dialog';
import { ViewChild} from '@angular/core';
import {MatPaginator} from '@angular/material/paginator';
import {MatSort} from '@angular/material/sort';
import {MatTableDataSource} from '@angular/material/table';
import { TicketUserSService } from 'src/app/services/ticket-user-s.service';

import { ValiderTicketComponent } from '../valider-ticket/valider-ticket.component';

import { VoirNComponent } from '../voir-n/voir-n.component';
import { NatureTService } from 'src/app/services/nature-t.service';
import { Observable } from 'rxjs';
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';
@Component({
  selector: 'app-ticket-gest',
  templateUrl: './ticket-gest.component.html',
  styleUrls: ['./ticket-gest.component.css']
})
export class TicketGestComponent implements OnInit {
  displayedColumns: string[] = ['idTicket', 'titre','statue', 'dateHeureCreation', 'lieu','idDetailM','action'];
  dataSource: MatTableDataSource<any>;
  detailsList$:Observable<any[]>;
  Uid:any
tableT:any=[]
  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;

  constructor(private route :Router,public dialog: MatDialog,private TUS :TicketUserSService, private detail:NatureTService,) { }
  ngOnInit(): void {
    var user = firebase.auth().currentUser;
    if (user) {
      this.Uid=user.uid;
      console.log(this.Uid)
      // User is signed in.
    } else {
      // No user is signed in.
    }
    this.getAllTickets();

    this.detailsList$=this.detail.getDetails();
  }
  openDialog(row:any){
   
    this.dialog.open(ValiderTicketComponent,{
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
       if (item.statue=='Nouveau' || item.statue=='réouverte'){
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

  voirT(row:any){
    this.dialog.open(VoirNComponent,{
      width:'44%',
      data:row
          }).afterClosed().subscribe(val=>{
            if(val==='Modifier'){
              this.getAllTickets();
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

