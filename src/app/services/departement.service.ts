import { Injectable } from '@angular/core';
import { Departement } from '../models/departement.model';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class DepartementService {
url:string="http://localhost:62385/api/Departements"

departements:Departement[];
departement:Departement;

  constructor(private http:HttpClient) { }

  getAllDepartements(){
    this.http.get(this.url).toPromise().then(
      res=>{
        this.departements=res as Departement[];
      } 
    )
  }
  getDepartements():Observable<any[]>{
    return this.http.get<any>(this.url);
  }
  
postDepartement(){
  return this.http.post(this.url,this.departement);
}
addDepartement(data:any){
  return this.http.post(this.url,data);
}

putDept(data:any,id:number){
  return this.http.put<any>(this.url+"/"+ id,data);
}
putDepartement(){
  return this.http.put(this.url+"/"+ this.departement.idDept,this.departement);
}
}
