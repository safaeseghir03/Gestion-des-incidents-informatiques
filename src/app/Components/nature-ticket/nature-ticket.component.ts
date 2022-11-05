import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { AddeditUserComponent } from '../addedit-user/addedit-user.component';

import {AfterViewInit, ViewChild} from '@angular/core';
import {MatPaginator} from '@angular/material/paginator';
import {MatSort} from '@angular/material/sort';
import {MatTableDataSource} from '@angular/material/table';

import { AddEditNtComponent } from '../add-edit-nt/add-edit-nt.component';
import { NatureSService } from 'src/app/services/nature-s.service';

@Component({
  selector: 'app-nature-ticket',
  templateUrl: './nature-ticket.component.html',
  styleUrls: ['./nature-ticket.component.css']
})
export class NatureTicketComponent implements OnInit {
  
  displayedColumns: string[] = ['idDetailM', 'NomDetailM', 'idMat','action'];
  dataSource: MatTableDataSource<any>;

  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;

  constructor(public dialog: MatDialog,private NTS:NatureSService) { }

  ngOnInit(): void {
    this.getAllNatureT();
  }
  

  openDialog() {
    this.dialog.open(AddEditNtComponent, {
      width:'40%'
    }).afterClosed().subscribe(val=>{
      if(val==='ajouter'){
        this.getAllNatureT();
      }
    })
  }


  getAllNatureT(){
    
    this.NTS.getNaureT().subscribe({
      next:(res)=>{
        console.log(res)
        this.dataSource=new MatTableDataSource(res);
        this.dataSource.paginator=this.paginator;
        this.dataSource.sort=this.sort
      },
      error:(err)=>{
        alert("error ");
      }
    })
    }

    editNatureS(row:any){
      console.log(row)
      this.dialog.open(AddEditNtComponent,{
    width:'40%',
    data:row
        }).afterClosed().subscribe(val=>{
          if(val==='Modifier'){
            this.getAllNatureT();
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
