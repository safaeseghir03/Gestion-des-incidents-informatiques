import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { AddeditUserComponent } from '../addedit-user/addedit-user.component';

import {AfterViewInit, ViewChild} from '@angular/core';
import {MatPaginator} from '@angular/material/paginator';
import {MatSort} from '@angular/material/sort';
import {MatTableDataSource} from '@angular/material/table';
import { TicketUserSService } from 'src/app/services/ticket-user-s.service';
import { AddTicketUserComponent } from '../add-ticket-user/add-ticket-user.component';
import { VoirNComponent } from '../voir-n/voir-n.component';
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';
import { VoirNcComponent } from '../voir-nc/voir-nc.component';
@Component({
  selector: 'app-ticket-user',
  templateUrl: './ticket-user.component.html',
  styleUrls: ['./ticket-user.component.css']
})
export class TicketUserComponent implements OnInit {
  Uid:any
  displayedColumns: string[] = ['idTicket', 'titre','statue', 'dateHeureCreation', 'lieu','action'];
  dataSource: MatTableDataSource<any>;
  tableT:any=[];

  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;

  constructor(public dialog: MatDialog,private TUS :TicketUserSService) { }


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


  openDialog(){
   
      this.dialog.open(AddTicketUserComponent, {
        width:'40%'
      }).afterClosed().subscribe(val=>{
        if(val==='ajouter'){
          this.getAllTickets();
        }
      })
    }

    getAllTickets(){
      this.tableT =[];
      this.TUS.getTicket().subscribe({
        next:(res)=>{
         
          for(let item of res){
         if (item.idDemandeur==this.Uid){
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
  editTicket(row:any){
    this.dialog.open(AddTicketUserComponent,{
  width:'40%',
  data:row
      }).afterClosed().subscribe(val=>{
        if(val==='Modifier'){
          this.getAllTickets();
        }
      })
  }
  voirT(row:any){
    this.dialog.open(VoirNcComponent,{
      width:'60%',
      data:row
          }).afterClosed().subscribe(val=>{
            if(val==='Modifier'){
              this.getAllTickets();
            }
          })}

  deleteUser(id:number){
    this.TUS.deleteTicket(id).subscribe({
      next:(res)=>{
        alert("le ticket a été supprimer avec succées")
      },
      error:()=>{
        alert("error")
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
