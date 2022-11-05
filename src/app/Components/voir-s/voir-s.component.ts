import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-voir-s',
  templateUrl: './voir-s.component.html',
  styleUrls: ['./voir-s.component.css']
})
export class VoirSComponent implements OnInit {
  idPro:any
  probleme:any
  dateCr:any
  solution:any
  etapes:any
 idEq:any
 pc:any
  constructor(
    @Inject(MAT_DIALOG_DATA) public editData:any,
  ) { }

  ngOnInit(): void {
    if(this.editData){
     
      this.idPro=this.editData.idPro;
      this.probleme=this.editData.probleme;
      this.solution=this.editData.solution;
      this.dateCr=this.editData.dateCr;
      this.etapes=this.editData.etapes;
      this.pc=this.editData.pc;
      this.idEq=this.editData.idEq;
      
    }
  
  }

}
