import { Component, OnInit } from '@angular/core';
import { Inject} from '@angular/core';
import {MatDialog, MAT_DIALOG_DATA} from '@angular/material/dialog';
import {FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';

import { MatDialogRef } from '@angular/material/dialog';
import { EquipeITService } from 'src/app/services/equipe-it.service';
import { DepartementService } from 'src/app/services/departement.service';
@Component({
  selector: 'app-add-edit-detailt',
  templateUrl: './add-edit-detailt.component.html',
  styleUrls: ['./add-edit-detailt.component.css']
})
export class AddEditDetailtComponent implements OnInit {
   
  actionBtn:string ="Ajouter";
  DepartementForm:FormGroup
  nomDept= new FormControl('', Validators.required);
  etat= new FormControl('', Validators.required);
aide:boolean
  constructor( private formBuilder:FormBuilder,
    private ITS:EquipeITService,
    private DS :DepartementService,
    @Inject(MAT_DIALOG_DATA) public editData:any,
    private dialogRef:MatDialogRef<AddEditDetailtComponent>){}
  



  ngOnInit(): void {

    this.DepartementForm=this.formBuilder.group({
     
      nomDept:['',Validators.required],
      etat:['',Validators.required]

    });

 
    if(this.editData){
      this.actionBtn="Modifier";

      
      this.DepartementForm.controls['nomDept'].setValue(this.editData.nomDept);
      this.DepartementForm.controls['etat'].setValue(this.editData.etat);   
      
     
    }

  }

  addMembreIT(){
   
    
    
    if(this.editData){
     
      var departement={
        idDept: this.editData.idDept,
        nomDept: this.DepartementForm.get("nomDept")?.value,
        etat:this.DepartementForm.get("etat")?.value,
        
      }
      this.DS.putDept(departement,this.editData.idDept).subscribe({
        next:(res)=>{
          alert("le departement a été bien modifier ");
          this.DepartementForm.reset();
          this.dialogRef.close('Modifier')
        },
        error:(err)=>{
          alert(err)
        }
      })
    
       
      
    }else{
    
     var nomDept= this.DepartementForm.get("nomDept")?.value;
     var departementList$=this.DS.getDepartements();

     departementList$.subscribe(res=>{
       for(let item of res){

        if(item.nomDept==nomDept){
          
          this.aide=true
          console.log(this.aide)
          break;
        }
       }
     })

     if(this.aide==true){
       alert("no")
     }else{
       console.log("else"+this.aide)
      this.DS.addDepartement(this.DepartementForm.value).subscribe({
        next:(res)=>{
          alert("le department a été bien enregistrer")
          this.DepartementForm.reset();
          this.dialogRef.close('ajouter');
        },
        error:()=>{
          alert("Un erreur s'est produit")
        }
      })
     }
    
    }
  }


}
