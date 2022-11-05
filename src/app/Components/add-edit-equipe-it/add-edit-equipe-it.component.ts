import { Component, OnInit } from '@angular/core';
import { Inject} from '@angular/core';
import {MatDialog, MAT_DIALOG_DATA} from '@angular/material/dialog';
import {FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';
import { DepartementService } from 'src/app/services/departement.service';
import { Observable } from 'rxjs';
import { ServiceDService } from 'src/app/services/service-d.service';
import { UsersService } from 'src/app/services/users.service';
import { MatDialogRef } from '@angular/material/dialog';
import { inject } from '@angular/core/testing';
import { EquipeITComponent } from '../equipe-it/equipe-it.component';
import { EquipeITService } from 'src/app/services/equipe-it.service';
import { AuthentificationService } from 'src/app/services/authentification.service';
import { AngularFirestore } from '@angular/fire/compat/firestore';

@Component({
  selector: 'app-add-edit-equipe-it',
  templateUrl: './add-edit-equipe-it.component.html',
  styleUrls: ['./add-edit-equipe-it.component.css']
})
export class AddEditEquipeItComponent implements OnInit {
  email = new FormControl('', [Validators.required, Validators.email]);
  NomEq= new FormControl('', Validators.required);
  PrenomEq= new FormControl('', Validators.required);
 
  Tel=new FormControl('',[Validators.required,Validators.pattern("^[0-9]*$")]);
  username= new FormControl('', Validators.required);
  Mp= new FormControl('', Validators.required);
  typeEq= new FormControl('', Validators.required);
  etatEq= new FormControl('', Validators.required);
  actionBtn:string ="Ajouter";
  equipeITForm:FormGroup
  
  constructor( private formBuilder:FormBuilder,
    private ITS:EquipeITService,
    private authService: AuthentificationService,
    private fs: AngularFirestore,
    @Inject(MAT_DIALOG_DATA) public editData:any,
    private dialogRef:MatDialogRef<AddEditEquipeItComponent>){}
  

  ngOnInit(): void {
    
    this.equipeITForm=this.formBuilder.group({
      idEq:[],
      NomEq:['',Validators.required],
      PrenomEq:['',Validators.required],
      Email:['',[Validators.required, Validators.email]],
      Tel:['',[Validators.required,Validators.pattern("^[0-9]*$")]],
      username:['',Validators.required],
      Mp:['',Validators.required],
      typeEq:['',Validators.required],
      etatEq:['',Validators.required]

    });


    
    if(this.editData){
      this.actionBtn="Modifier";
      
      this.equipeITForm.controls['NomEq'].setValue(this.editData.nomEq);
      this.equipeITForm.controls['PrenomEq'].setValue(this.editData.prenomEq);
      this.equipeITForm.controls['Email'].setValue(this.editData.email);   
      this.equipeITForm.controls['Tel'].setValue(this.editData.tel);
      this.equipeITForm.controls['username'].setValue(this.editData.username);
      this.equipeITForm.controls['Mp'].setValue(this.editData.mp);  
      this.equipeITForm.controls['typeEq'].setValue(this.editData.typeEq);
      this.equipeITForm.controls['etatEq'].setValue(this.editData.etatEq);  
     
    }

  }

  getErrorMessage() {
    if (this.email.hasError('required')) {
      return 'vous devez entrer une valeur';
    }

    return this.email.hasError('email') ? 'Veuillez entrer une adresse email valid' : '';

   
  }


  addMembreIT(){
   
    
    
    if(this.editData){
     
      var user={
        idEq: this.editData.idEq,
        NomEq: this.equipeITForm.get("NomEq")?.value,
        PrenomEq:this.equipeITForm.get("PrenomEq")?.value,
        Email:this.equipeITForm.get("Email")?.value,
        Tel:this.equipeITForm.get("Tel")?.value,
        username:this.equipeITForm.get("username")?.value,
        Mp:this.equipeITForm.get("Mp")?.value,
        typeEq:this.equipeITForm.get("typeEq")?.value,
        etatEq:this.equipeITForm.get("etatEq")?.value,
      }
      this.ITS.putMemberIT(user,this.editData.idEq).subscribe({
        next:(res)=>{
          alert("le membre a été bien modifier ");
          this.equipeITForm.reset();
          this.dialogRef.close('Modifier')
        },
        error:(err)=>{
          alert(err)
        }
      })
    
       
      
    }else{
    

      this.authService.signUp(this.equipeITForm.get("username")?.value,this.equipeITForm.get("Mp")?.value).then((user:any)=>{
        
        this.equipeITForm.controls['idEq'].setValue(user.user.uid);
        this.authService.sendEmailForVarification(user.user);
        this.fs.collection("users").doc(user.user.uid).set({
          Nom:this.equipeITForm.get("NomEq")?.value,
          Prenom:this.equipeITForm.get("PrenomEq")?.value,
          Email:this.equipeITForm.get("username")?.value,
          role:this.equipeITForm.get("typeEq")?.value,
          Tele:this.equipeITForm.get("Tel")?.value,
          Password:this.equipeITForm.get("Mp")?.value
        }).then(()=>{
          console.log(this.equipeITForm.value)
          this.ITS.addMemberIT(this.equipeITForm.value).subscribe({
            next:(res)=>{
              alert("le membre a été bien enregistrer")
              this.equipeITForm.reset();
              this.dialogRef.close('ajouter');
            },
            error:(err)=>{
              alert(err)
            }
          })
        })
      }).catch(() => {
        console.log("error")
      })
     
    }
  }


}
