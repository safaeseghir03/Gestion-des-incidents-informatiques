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
import { VoirTComponent } from '../voir-t/voir-t.component';

@Component({
  selector: 'app-ticket-clo',
  templateUrl: './ticket-clo.component.html',
  styleUrls: ['./ticket-clo.component.css']
})
export class TicketCloComponent implements OnInit {

  displayedColumns: string[] = ['idTicket', 'titre','type','statue', 'dateHeureCreation', 'dateHeureCloture','idDetailM','action'];
  dataSource: MatTableDataSource<any>;
tableT:any=[];
idTech:number=2;
  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;

  constructor(private route :Router,public dialog: MatDialog,private TUS :TicketUserSService) { }
  ngOnInit(): void {

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
       if ( item.statue=="Cloturé et Comfirmé" ){
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





  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  
    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }

 

}



