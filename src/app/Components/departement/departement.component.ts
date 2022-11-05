import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Departement } from 'src/app/models/departement.model';
import { DepartementService } from 'src/app/services/departement.service';

@Component({
  selector: 'app-departement',
  templateUrl: './departement.component.html',
  styleUrls: ['./departement.component.css']
})
export class DepartementComponent implements OnInit {

  constructor(public service:DepartementService) { }

  ngOnInit(): void {
    this.service.getAllDepartements();

    this.service.departement={
      idDept:0,
      nomDept:"null",
      etat:"null"
    }
  }

  submit(){
    if(this.service.departement.idDept==0){
      this.service.postDepartement().subscribe(res=>{
        this.service.getAllDepartements()
            },
            err=>{
              console.log(err)
            })
    }else{
      this.service.putDepartement().subscribe(res=>{
        this.service.getAllDepartements()
            },
            err=>{
              console.log(err)
            })
    }
   
  }


  fillData(item:Departement){
    this.service.departement.idDept=item.idDept;
    this.service.departement.nomDept=item.nomDept;
    this.service.departement.etat=item.etat;
  }
}
