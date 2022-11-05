import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MatDialog } from '@angular/material/dialog';
import { ViewChild} from '@angular/core';
import {MatPaginator} from '@angular/material/paginator';
import {MatSort} from '@angular/material/sort';
import {MatTableDataSource} from '@angular/material/table';
import { TicketUserSService } from 'src/app/services/ticket-user-s.service';

import { ValiderTicketComponent } from '../valider-ticket/valider-ticket.component';

import { VoirNcComponent } from '../voir-nc/voir-nc.component';

@Component({
  selector: 'app-ticket-en-cours',
  templateUrl: './ticket-en-cours.component.html',
  styleUrls: ['./ticket-en-cours.component.css']
})
export class TicketEnCoursComponent implements OnInit {
  displayedColumns: string[] = ['idTicket', 'titre','statue', 'dateHeureCreation', 'lieu','idDetailM','idDemandeur','action'];
  dataSource: MatTableDataSource<any>;
tableT:any=[];
cpt:any=0;
  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;
  constructor(private route :Router,public dialog: MatDialog,private TUS :TicketUserSService) { }
  ngOnInit(): void {

    this.getAllTickets();
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


  getAllTickets(){
    this.tableT =[];
    this.TUS.getTicket().subscribe({
      next:(res)=>{
       

        for(let item of res){
       if (item.statue=="en cours"){
       this.tableT.push(item);
       this.cpt++;
        
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

