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

import { AngularFireAuthModule } from "@angular/fire/compat/auth";
import { AngularFirestore } from '@angular/fire/compat/firestore/'; 
import { Router } from '@angular/router';
import { AuthentificationService } from 'src/app/services/authentification.service';

import { HotToastService } from '@ngneat/hot-toast';



@Component({
  selector: 'app-addedit-user',
  templateUrl: './addedit-user.component.html',
  styleUrls: ['./addedit-user.component.css']
})
export class AddeditUserComponent implements OnInit {
  email = new FormControl('', [Validators.required, Validators.email]);
  Departements$:Observable<any[]>;
  servicesList$:Observable<any[]>;
  usersList$:Observable<any[]>;
aide:any;
actionBtn:string ="Ajouter";
userForm:FormGroup;
aid:any;
idUser:any;
NomDemandeur= new FormControl('', Validators.required);
PrenomDemandeur= new FormControl('', Validators.required);
telDemandeur =new FormControl('',[Validators.required,Validators.pattern("^[0-9]*$")]);
emailDemandeur = new FormControl('', [Validators.required, Validators.email]);
login= new FormControl('', Validators.required);
password= new FormControl('', Validators.required);
serviceId= new FormControl('', Validators.required);

  constructor( private formBuilder:FormBuilder,
    private serviceD :DepartementService,
    private serviceDS:ServiceDService,
    private userS :UsersService,
    @Inject(MAT_DIALOG_DATA) public editData:any,
    private route:Router,
    private fs: AngularFirestore,
    private authService: AuthentificationService,
     private toast: HotToastService, 
     private af : AngularFireAuthModule,
    private dialogRef:MatDialogRef<AddeditUserComponent>){}
  
  ngOnInit(): void {
    this.Departements$=this.serviceD.getDepartements();
    this.servicesList$=this.serviceDS.getServices();
this.usersList$=this.userS.getUsers();
    this.userForm=this.formBuilder.group({
      idDemandeur:[],
      NomDemandeur:['',Validators.required],
      PrenomDemandeur:['',Validators.required],
      telDemandeur:['',[Validators.required,Validators.pattern("^[0-9]*$")]],
      emailDemandeur:['',[Validators.required, Validators.email]],
      login:['',Validators.required],
      password:['',Validators.required],
      serviceId:['',Validators.required]

    });

    

    
    if(this.editData){
      this.actionBtn="Modifier"
      this.userForm.controls['NomDemandeur'].setValue(this.editData.nomDemandeur);
      this.userForm.controls['PrenomDemandeur'].setValue(this.editData.prenomDemandeur);
      this.userForm.controls['telDemandeur'].setValue(this.editData.telDemandeur);   
      this.userForm.controls['login'].setValue(this.editData.login);
      this.userForm.controls['password'].setValue(this.editData.password);
      this.userForm.controls['emailDemandeur'].setValue(this.editData.emailDemandeur);  
     
     
    
    }
  }

  getErrorMessage() {
    if (this.email.hasError('required')) {
      return 'vous devez entrer une valeur';
    }

    return this.email.hasError('email') ? 'Veuillez entrer une adresse email valid' : '';
  }

  changeDepartement(value:any){
    console.log(value);
    this.aide=value;
  }

  addUser(){

    
    if(this.editData){
      var user={
        IdDemandeur: this.editData.idDemandeur,
        NomDemandeur: this.userForm.get("NomDemandeur")?.value,
        PrenomDemandeur:this.userForm.get("PrenomDemandeur")?.value,
        TelDemandeur:this.userForm.get("telDemandeur")?.value,
        emailDemandeur:this.userForm.get("emailDemandeur")?.value,
        login:this.userForm.get("login")?.value,
        password:this.userForm.get("password")?.value,
        serviceId:this.userForm.get("serviceId")?.value,
      }
      console.log(user)
      this.userS.putUser(user,this.editData.idDemandeur).subscribe({
        next:(res)=>{
          alert("l'utlisateur a été bien modifier ");
          this.userForm.reset();
          this.dialogRef.close('Modifier')
        },
        error:(err)=>{
          alert(err)
        }
      })
    
       
      
    }else{

      
     
      this.authService.signUp(this.userForm.get("emailDemandeur")?.value,this.userForm.get("password")?.value).then((user:any)=>{
        
        this.userForm.controls['idDemandeur'].setValue(user.user.uid);
        this.authService.sendEmailForVarification(user.user);
        this.fs.collection("users").doc(user.user.uid).set({
          Nom:this.userForm.get("NomDemandeur")?.value,
          Prenom:this.userForm.get("PrenomDemandeur")?.value,
          Email:this.userForm.get("emailDemandeur")?.value,
          Tele:this.userForm.get("telDemandeur")?.value,
          role:"user",
          Password:this.userForm.get("password")?.value
        }).then(()=>{
          console.log(this.userForm.value)
          this.userS.addUser(this.userForm.value).subscribe({
            next:(res)=>{
              alert("l'utilisateur a été bien enregistrer")
              this.userForm.reset();
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

    
     
        const user1={
        idDemandeur: this.idUser,
        NomDemandeur: this.userForm.get("NomDemandeur")?.value,
        PrenomDemandeur:this.userForm.get("PrenomDemandeur")?.value,
        TelDemandeur:this.userForm.get("telDemandeur")?.value,
        emailDemandeur:this.userForm.get("emailDemandeur")?.value,
        login:this.userForm.get("login")?.value,
        password:this.userForm.get("password")?.value,
        serviceId:this.userForm.get("serviceId")?.value,
      }
        console.log("userform",this.userForm.value)
        console.log("user1",user1)
       
      }
     
    
    

    
    
   













  }
  

  
}
