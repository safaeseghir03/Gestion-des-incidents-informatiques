import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class NatureTService {

  readonly Url="http://localhost:62385/api/DetailMateriels"
  
  constructor(private http :HttpClient) { }

  getDetails():Observable<any[]>{
    return this.http.get<any>(this.Url);
  }
  getAllDetails(){
    this.http.get(this.Url).toPromise().then(
      res=>{
        const ss=res;
        
      }
    )
  }
  addDtail(data:any){
    return this.http.post(this.Url,data);
  }

  putDetail(data:any,id:number){
     return this.http.put<any>(this.Url+"/"+ id,data);
  }

}

