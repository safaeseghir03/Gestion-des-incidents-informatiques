import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { TicketUserSService } from 'src/app/services/ticket-user-s.service';

@Component({
  selector: 'app-barre-tick',
  templateUrl: './barre-tick.component.html',
  styleUrls: ['./barre-tick.component.css']
})
export class BarreTickComponent implements OnInit {

  constructor(private route:Router,private TUS :TicketUserSService) { }
  cptC:any=0;
  cptP:any=0;
  cptCl:any=0;
  cptE:any=0;
  cptapr:any=0;
  ngOnInit(): void {
    

      this.TUS.getTicket().subscribe({
        next:(res)=>{
         
          for(let item of res){
         if (item.statue=="en cours"){
        
         this.cptC++;
          
        }

        if (item.statue=="prise en charge"){
        
          this.cptP++;
           
         }
         if (item.statue=="escalade"){
        
          this.cptE++;
           
         }
          

         if (item.statue=="Cloturé et Comfirmé"){
        
          this.cptCl++;
           
         }
         if (item.statue=="Pour Aprobation" || item.statue=="Refusé" 
         || item.statue=="Accepté" ||item.statue=="à planifier")
         
         {
        
          this.cptapr++;
           
         }


          }
        }
  })
}
  goToTicketEnCours(){
    return this.route.navigate(["/TicketEC"])
  }
  goToTicketEsc(){
    return this.route.navigate(["/TicketEsc"])
  }
  goToTicketPrise(){
    return this.route.navigate(["/TicketPrise"])
  }
  goToTicketClo(){
    return this.route.navigate(["/TicketClo"])
  }
  goToTicketApr(){
    return this.route.navigate(["/TicketApr"])
  }
  

}
