import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { AddeditUserComponent } from '../addedit-user/addedit-user.component';
import { ViewChild} from '@angular/core';
import {MatPaginator} from '@angular/material/paginator';
import {MatSort} from '@angular/material/sort';
import {MatTableDataSource} from '@angular/material/table';
import { UsersService } from 'src/app/services/users.service';
@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {


  displayedColumns: string[] = ['idDemandeur', 'nomDemandeur', 'prenomDemandeur', 'emailDemandeur','telDemandeur','login','password','serviceId','action'];
  dataSource: MatTableDataSource<any>;

  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;

  constructor(public dialog: MatDialog,private userS :UsersService) { }

  ngOnInit(): void {
    this.getAllUsers();
  }

  openDialog() {
    this.dialog.open(AddeditUserComponent, {
      width:'40%'
    }).afterClosed().subscribe(val=>{
      if(val==='ajouter'){
        this.getAllUsers();
      }
    })
  }

getAllUsers(){
this.userS.getUsers().subscribe({
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
  this.dialog.open(AddeditUserComponent,{
width:'40%',
data:row
    }).afterClosed().subscribe(val=>{
      if(val==='Modifier'){
        this.getAllUsers();
      }
    })
}

deleteUser(id:number){
  this.userS.deleteUser(id).subscribe({
    next:(res)=>{
      alert("l'utilisateur a été supprimer avec succées")
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



