import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { Router } from '@angular/router';
import { MatSidenav } from '@angular/material/sidenav';

import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore'
@Component({
  selector: 'app-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.css']
})
export class SidenavComponent implements OnInit {
  Nom:any
  Uid:any
  Prenom:any
  role:any
  constructor(private fs :AngularFirestore,private fa :AngularFireAuth,private route:Router) { }

  ngOnInit(): void {
    var user = firebase.auth().currentUser;
    if (user) {
      this.Uid=user.uid;
      console.log("User is signed in.") 
      // var uidC=this.Uid
      // console.log(uidC)
      const docref =this.fs.collection("users").doc(this.Uid);
      docref.get().subscribe(doc=>{
        this.Nom=doc.get('Nom')
        this.Prenom=doc.get('Prenom')
        this.role=doc.get('role')
    
      })
    } else {
      console.log(" No user is signed in.")
      
    }
  }
  
  goToTicketuser(){
    return this.route.navigate(["/TicketUser"])
  }
  goToDeprtement(){
    return this.route.navigate(["/natureT"])
  }
  goToTicket(){
    return this.route.navigate(["/TicketGest"])
  }
  goToUser(){
    return this.route.navigate(["/users"])
  }
  goToEquipe(){
    return this.route.navigate(["/equipeIT"])
  }
  goToService(){
    return this.route.navigate(["/Dservice"])
  }
  goToclo(){
    return this.route.navigate(["/clotuser"])
  }
  goTomL(){
    return this.route.navigate(["/natureTicket"])
  }
  goToTicketTech(){
    return this.route.navigate(["/TicketTech"])
  }

  goProbSol(){
    return this.route.navigate(["/probSol"])
  }

  goTosolUser(){
    return this.route.navigate(["/solUser"])
  }

  goToTicketRes(){
    return this.route.navigate(["/TicketRes"])
  }
}
