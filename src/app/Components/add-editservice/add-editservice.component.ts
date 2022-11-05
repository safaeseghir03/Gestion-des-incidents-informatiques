import { Component,Input, OnInit } from '@angular/core';
import { Inject} from '@angular/core';
import {MatDialog, MAT_DIALOG_DATA} from '@angular/material/dialog';
import {FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';

import { MatDialogRef } from '@angular/material/dialog';
import { DepartementService } from 'src/app/services/departement.service';
import { Observable } from 'rxjs';
import { ServiceDService } from 'src/app/services/service-d.service';
@Component({
  selector: 'app-add-editservice',
  templateUrl: './add-editservice.component.html',
  styleUrls: ['./add-editservice.component.css']
})
export class AddEditserviceComponent implements OnInit {
  Departements$:Observable<any[]>;
  actionBtn:string ="Ajouter";
  serviceForm:FormGroup
  nomService= new FormControl('', Validators.required);
  idDept= new FormControl('', Validators.required);
aide:boolean
  constructor( private formBuilder:FormBuilder,
   
    private DS :DepartementService,
    private Sd: ServiceDService,
    @Inject(MAT_DIALOG_DATA) public editData:any,
    private dialogRef:MatDialogRef<AddEditserviceComponent>){}
  



  ngOnInit(): void {

    this.Departements$=this.DS.getDepartements();
    this.serviceForm=this.formBuilder.group({
     
      nomService:['',Validators.required],
      idDept:['',Validators.required]

    });

 
    if(this.editData){
      this.actionBtn="Modifier";

      
      this.serviceForm.controls['nomService'].setValue(this.editData.nomService);
      this.serviceForm.controls['idDept'].setValue(this.editData.idDept);   
      
     
    }

  }

  AddService(){
   
    
    
    if(this.editData){
     
      var departement={
        serviceId: this.editData.serviceId,
        nomService: this.serviceForm.get("nomService")?.value,
        idDept:this.serviceForm.get("idDept")?.value,
        
      }
      this.Sd.updateService(this.editData.serviceId,departement).subscribe({
        next:(res)=>{
          alert("le service a été bien modifier ");
          this.serviceForm.reset();
          this.dialogRef.close('Modifier')
        },
        error:(err)=>{
          alert(err)
        }
      })
    
       
      
    }else{
    
    
       
      this.Sd.addService(this.serviceForm.value).subscribe({
        next:(res)=>{
          alert("le service a été bien enregistrer")
          this.serviceForm.reset();
          this.dialogRef.close('ajouter');
        },
        error:()=>{
          alert("Un erreur s'est produit")
        }
      })
     }
    
    }
  


}
