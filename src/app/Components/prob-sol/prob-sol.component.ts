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
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';
import { AngularFirestore } from '@angular/fire/compat/firestore';
@Component({
  selector: 'app-prob-sol',
  templateUrl: './prob-sol.component.html',
  styleUrls: ['./prob-sol.component.css']
})
export class ProbSolComponent implements OnInit {
 
  
  displayedColumns: string[] = ['idPro', 'probleme','action'];
  dataSource: MatTableDataSource<any>;

  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;
  tableT:any=[]
  Uid:any
  constructor(private fs:AngularFirestore,public dialog: MatDialog,private probS :ProbSolService) { }

  ngOnInit(): void {
    var user = firebase.auth().currentUser;
    if (user) {
      this.Uid=user.uid;
      console.log(this.Uid)
      // User is signed in.
    } else {
      // No user is signed in.
    }
    this.getAllProbSol();
  }

  openDialog() {
    this.dialog.open(AddprobSolComponent, {
      width:'60%'
    }).afterClosed().subscribe(val=>{
      if(val==='ajouter'){
        this.getAllProbSol();
      }
    })
  }

getAllProbSol(){



  this.tableT =[];
this.probS.getProbSol().subscribe({
  next:(res)=>{

    for(let item of res){
      if (item.idEq==this.Uid){
      this.tableT.push(item)
       
     }
       
       }
    this.dataSource=new MatTableDataSource(this.tableT);
    this.dataSource.paginator=this.paginator;
    this.dataSource.sort=this.sort
  },
  error:(err)=>{
    alert("error ");
  }
})
}

editProbr(row:any){
  this.dialog.open(AddprobSolComponent,{
width:'60%',
data:row
    }).afterClosed().subscribe(val=>{
      if(val==='Modifier'){
        this.getAllProbSol();
      }
    })
}

deleteProb(id:number){
  this.probS.deleteProbSol(id).subscribe({
    next:(res)=>{
      alert("la solution a été supprimer avec succées")
    },
    error:()=>{
      alert("error")
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



