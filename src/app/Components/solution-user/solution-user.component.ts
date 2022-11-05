import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { AddeditUserComponent } from '../addedit-user/addedit-user.component';
import { ViewChild} from '@angular/core';
import {MatPaginator} from '@angular/material/paginator';
import {MatSort} from '@angular/material/sort';
import {MatTableDataSource} from '@angular/material/table';
import { UsersService } from 'src/app/services/users.service';
import { AddprobSolComponent } from '../addprob-sol/addprob-sol.component';
import { ProbSolService } from 'src/app/services/prob-sol.service';
import { VoirSComponent } from '../voir-s/voir-s.component';
@Component({
  selector: 'app-solution-user',
  templateUrl: './solution-user.component.html',
  styleUrls: ['./solution-user.component.css']
})
export class SolutionUserComponent implements OnInit {

  displayedColumns: string[] = ['idPro', 'probleme','action'];
  dataSource: MatTableDataSource<any>;

  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;

  constructor(public dialog: MatDialog,private probS :ProbSolService) { }

  ngOnInit(): void {
    this.getAllProbSol();
  }



getAllProbSol(){
this.probS.getProbSol().subscribe({
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




voirS(row:any){
  this.dialog.open(VoirSComponent,{
    width:'50%',
    data:row
        }).afterClosed().subscribe(val=>{
         
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




