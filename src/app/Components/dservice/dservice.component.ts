import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { ServiceDService } from 'src/app/services/service-d.service';
import { DepartementService } from 'src/app/services/departement.service';
import { MatDialog } from '@angular/material/dialog';
import { AddeditUserComponent } from '../addedit-user/addedit-user.component';

import {AfterViewInit, ViewChild} from '@angular/core';
import {MatPaginator} from '@angular/material/paginator';
import {MatSort} from '@angular/material/sort';
import {MatTableDataSource} from '@angular/material/table';
import { AddEditserviceComponent } from '../add-editservice/add-editservice.component';


@Component({
  selector: 'app-dservice',
  templateUrl: './dservice.component.html',
  styleUrls: ['./dservice.component.css']
})
export class DserviceComponent implements OnInit {
  // servicesList$:Observable<any[]>;
  // Departements$:Observable<any[]>;
  // Departements:any=[];
  
  // //Map to display data associate with foreign keys
  // DepartementMap:Map<number,string>=new Map();
  
  //   constructor(private serviceDS:ServiceDService,private ServiceD:DepartementService) { }
  
  
  //   ngOnInit(): void {
  //     this.servicesList$=this.serviceDS.getServices();
  //     this.Departements$=this.ServiceD.getDepartements();
  //     this.refreshDepartementMap();
  //     const ss=this.ServiceD.getAllDepartements;
  // console.log(ss);
  
  //   }
  
  
  // //variables (properties)
  // Modaltitle:string='';
  // activeAddEdit:boolean=false;
  // service:any;
  
  // modalAdd(){
  //   this.service={
  //     serviceId:0,
  //     nomService:null,
  //     idDept:null
  //   }
  //   this.Modaltitle="Ajouter un nouveau service";
  //   this.activeAddEdit=true;
  // }
  // EditService(item:any){
  //   this.service=item;
  //   this.Modaltitle="Modifier Service";
  //   this.activeAddEdit=true;
  
  // }
  
  // modalClose(){
  //   this.activeAddEdit=false;
  //   this.servicesList$=this.serviceDS.getServices();
  // }
  
  //   refreshDepartementMap(){
  //     this.ServiceD.getDepartements().subscribe(data =>{
  //       this.Departements=data;
  
  //       for(let i=0;i<data.length;i++){
  //         this.DepartementMap.set(this.Departements[i].idDept,this.Departements[i].nomDept)
  //       }
  //     })
  //   }
  
  
  // }
 
  

  
  displayedColumns: string[] = ['serviceId','nomService', 'idDept','action'];
  dataSource: MatTableDataSource<any>;

  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;

  constructor(public dialog: MatDialog,private DS:ServiceDService) { }



  ngOnInit(): void {
    this.getServices();
   
  }

  openDialog() {
    this.dialog.open(AddEditserviceComponent, {
      width:'40%'
    }).afterClosed().subscribe(val=>{
      if(val==='ajouter'){
        this.getServices();
      }
    })
  }


  getServices(){
    this.DS.getServices().subscribe({
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


    editService(row:any){
     
      this.dialog.open(AddEditserviceComponent,{
    width:'40%',
    data:row
        }).afterClosed().subscribe(val=>{
          if(val==='Modifier'){
            this.getServices();
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
