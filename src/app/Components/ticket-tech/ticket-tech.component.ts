import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MatDialog } from '@angular/material/dialog';
import { AddeditUserComponent } from '../addedit-user/addedit-user.component';

import {AfterViewInit, ViewChild} from '@angular/core';
import {MatPaginator} from '@angular/material/paginator';
import {MatSort} from '@angular/material/sort';
import {MatTableDataSource} from '@angular/material/table';
import { TicketUserSService } from 'src/app/services/ticket-user-s.service';
import { AddTicketUserComponent } from '../add-ticket-user/add-ticket-user.component';
import { ValiderTicketComponent } from '../valider-ticket/valider-ticket.component';
import { ChangeretatComponent } from '../changeretat/changeretat.component';
import { VoirNcComponent } from '../voir-nc/voir-nc.component';
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';
@Component({
  selector: 'app-ticket-tech',
  templateUrl: './ticket-tech.component.html',
  styleUrls: ['./ticket-tech.component.css']
})
export class TicketTechComponent implements OnInit {

  displayedColumns: string[] = ['idTicket', 'titre','type','priorite','statue', 'dateHeureCreation','idDetailM','action'];
  dataSource: MatTableDataSource<any>;
tableT:any=[];

Uid:any
  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;

  constructor(private route :Router,public dialog: MatDialog,private TUS :TicketUserSService) { }
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


  getAllTickets(){
    this.tableT =[];
    this.TUS.getTicket().subscribe({
      next:(res)=>{
       
        for(let item of res){
       if ( item.idEq==this.Uid && item.statue!=="escalade"&& item.statue!=="cloture"){
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
    this.dialog.open(VoirNcComponent,{
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

