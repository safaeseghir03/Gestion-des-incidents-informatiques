import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { AddeditUserComponent } from '../addedit-user/addedit-user.component';

import {AfterViewInit, ViewChild} from '@angular/core';
import {MatPaginator} from '@angular/material/paginator';
import {MatSort} from '@angular/material/sort';
import {MatTableDataSource} from '@angular/material/table';

import { EquipeITService } from 'src/app/services/equipe-it.service';
import { AddEditEquipeItComponent } from '../add-edit-equipe-it/add-edit-equipe-it.component';
import { AddEditDetailtComponent } from '../add-edit-detailt/add-edit-detailt.component';
import { DepartementService } from 'src/app/services/departement.service';

@Component({
  selector: 'app-nature-t',
  templateUrl: './nature-t.component.html',
  styleUrls: ['./nature-t.component.css']
})
export class NatureTComponent implements OnInit {

  displayedColumns: string[] = ['idDept','nomDept', 'etat','action'];
  dataSource: MatTableDataSource<any>;

  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;

  constructor(public dialog: MatDialog,private DS :DepartementService) { }


  
  ngOnInit(): void {
   this.getDepartements(); 
  }


  openDialog() {
    this.dialog.open(AddEditDetailtComponent, {
      width:'40%'
    }).afterClosed().subscribe(val=>{
      if(val==='ajouter'){
        this.getDepartements();
      }
    })
  }

  getDepartements(){

    this.DS.getDepartements().subscribe({
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

  editDepartement(row:any){
     
    this.dialog.open(AddEditDetailtComponent,{
  width:'40%',
  data:row
      }).afterClosed().subscribe(val=>{
        if(val==='Modifier'){
          this. getDepartements();
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

