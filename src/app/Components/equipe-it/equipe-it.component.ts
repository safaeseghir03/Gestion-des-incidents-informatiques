import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { AddeditUserComponent } from '../addedit-user/addedit-user.component';

import {AfterViewInit, ViewChild} from '@angular/core';
import {MatPaginator} from '@angular/material/paginator';
import {MatSort} from '@angular/material/sort';
import {MatTableDataSource} from '@angular/material/table';

import { EquipeITService } from 'src/app/services/equipe-it.service';
import { AddEditEquipeItComponent } from '../add-edit-equipe-it/add-edit-equipe-it.component';


@Component({
  selector: 'app-equipe-it',
  templateUrl: './equipe-it.component.html',
  styleUrls: ['./equipe-it.component.css']
})
export class EquipeITComponent implements OnInit {

  displayedColumns: string[] = ['idEq','NomEq', 'PrenomEq', 'Email', 'Tel','username','Mp','typeEq','etatEq','action'];
  dataSource: MatTableDataSource<any>;

  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;

  constructor(public dialog: MatDialog,private ITS :EquipeITService) { }



  ngOnInit(): void {
    this.getMembres();
   
  }

  openDialog() {
    this.dialog.open(AddEditEquipeItComponent, {
      width:'40%'
    }).afterClosed().subscribe(val=>{
      if(val==='ajouter'){
        this.getMembres();
      }
    })
  }


  getMembres(){
    this.ITS.getMembersIT().subscribe({
      next:(res)=>{
        this.dataSource=new MatTableDataSource(res);
        this.dataSource.paginator=this.paginator;
        this.dataSource.sort=this.sort
      },
      error:(err)=>{
        alert("error ");
      }
    })
    }


    editUser(row:any){
     
      this.dialog.open(AddEditEquipeItComponent,{
    width:'40%',
    data:row
        }).afterClosed().subscribe(val=>{
          if(val==='Modifier'){
            this.getMembres();
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
