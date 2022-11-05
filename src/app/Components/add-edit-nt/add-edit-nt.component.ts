import { Component, OnInit } from '@angular/core';
import { Inject} from '@angular/core';
import {MatDialog, MAT_DIALOG_DATA} from '@angular/material/dialog';
import {FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';
import { DepartementService } from 'src/app/services/departement.service';
import { Observable } from 'rxjs';

import { ServiceDService } from 'src/app/services/service-d.service';
import { UsersService } from 'src/app/services/users.service';
import { MatDialogRef } from '@angular/material/dialog';
import { NatureSService } from 'src/app/services/nature-s.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-edit-nt',
  templateUrl: './add-edit-nt.component.html',
  styleUrls: ['./add-edit-nt.component.css']
})
export class AddEditNtComponent implements OnInit {

  aide:any;
  actionBtn:string ="Ajouter";
  DetailTicket:FormGroup
  NomDetailM= new FormControl('', Validators.required);

  constructor( private formBuilder:FormBuilder,
    private DTS :NatureSService,
    @Inject(MAT_DIALOG_DATA) public editData:any,
    private router:Router,
    private dialogRef:MatDialogRef<AddEditNtComponent>){}
  
  ngOnInit(): void {

    this.DetailTicket=this.formBuilder.group({
     
      NomDetailM:['',Validators.required],
      idMat:['' ,Validators.required],
      

    });


    if(this.editData){
      this.actionBtn="Modifier"
      
      this.DetailTicket.controls['NomDetailM'].setValue(this.editData.nomDetailM);
      this.DetailTicket.controls['idMat'].setValue(this.editData.idMat);   
    }
  }
  

  addDetailM(){
   
    // var Detail={
    //   // idDetailM: this.editData.idDetailM,
    //   NomDetailM: this.DetailTicket.get("NomDetailM")?.value,
    //   idMat:this.DetailTicket.get("idMat")?.value,
      
    // }

    

    
    if(this.editData){
      var Detail={
        idDetailM: this.editData.idDetailM,
        NomDetailM: this.DetailTicket.get("NomDetailM")?.value,
        idMat:this.DetailTicket.get("idMat")?.value,
        
      }
      console.log(this.DetailTicket.value)
      console.log(this.editData.idDetailM)
      this.DTS.putNaureT(Detail,this.editData.idDetailM).subscribe({
        next:(res)=>{
          alert("la modification a été bien enregistrer ");
          this.DetailTicket.reset();
          this.dialogRef.close('Modifier')
        },
        error:(err)=>{
          alert(err)
        }
      })
    
       
      
    }else{
     
      this.DTS.addNaureT(this.DetailTicket.value).subscribe({
        next:(res)=>{
          alert("l'ajout a été bien enregitrer")
          this.DetailTicket.reset();
          this.dialogRef.close('ajouter');
        },
        error:()=>{
          console.log("error")
        }
      })
    }
  }

}
