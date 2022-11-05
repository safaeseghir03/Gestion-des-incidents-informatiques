import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class ProbSolService {
  Url="http://localhost:62385/api/ProbSols2"
  
  constructor(private http :HttpClient) { }

  getProbSol():Observable<any[]>{
    return this.http.get<any>(this.Url);
  }
  getAllProbSol(){
    this.http.get(this.Url).toPromise().then(
      res=>{
        const ss=res;
      }
    )
  }
  addProbSol(data:any){
    return this.http.post(this.Url,data);
  }
  getProbSolid(id:number){
    this.http.get<any>(this.Url+"/"+ id)
  }

  putProbSol(data:any,id:number){
     return this.http.put<any>(this.Url+"/"+ id,data);
  }

  deleteProbSol(id:number){
      return this.http.delete<any>(this.Url+"/"+id);
      
  }
}
