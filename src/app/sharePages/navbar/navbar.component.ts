import { Component, Input, OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { Router } from '@angular/router';
import { MatSidenav } from '@angular/material/sidenav';

import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';
import { TicketUserSService } from 'src/app/services/ticket-user-s.service';
@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  @Input() inputSidenav:MatSidenav;
Nom:any
Uid:any
Prenom:any
PhotoURL:any
role : any
cptC:number =0
  constructor(private TUS :TicketUserSService,private fs :AngularFirestore,private fa :AngularFireAuth,private route:Router) { }

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
        this. PhotoURL=doc.get('photoURL')
        this. role=doc.get('role')
    
      })
    } else {
      console.log(" No user is signed in.")
      
    }

    this.TUS.getTicket().subscribe({
      next:(res)=>{
       
        for(let item of res){
       if (item.statue=="cloture" && item.idDemandeur==this.Uid){
     
       this.cptC++;

        
      }
      console.log(this.cptC)

    }
  }
})
  }

  logout(){
    this.fa.signOut()
  
    .then(()=>{
      this.route.navigate (["/"])
    })
    .catch(()=>{
      console.log("error")
    })
  }
  goToProfile(){
    return this.route.navigate(["/profile"])
  }

  goToUseClo(){
    return this.route.navigate(["/Userclo"])
  }


  
}
