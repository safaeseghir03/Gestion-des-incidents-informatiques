import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class NatureSService {
  readonly Url="http://localhost:62385/api/DetailMateriels"
  
  constructor(private http :HttpClient) { }

  getNaureT():Observable<any[]>{
    return this.http.get<any>(this.Url);
  }
  getAllNaureT(){
    this.http.get(this.Url).toPromise().then(
      res=>{
        const ss=res;
      }
    )
  }
  addNaureT(data:any){
    return this.http.post(this.Url,data);
  }

  putNaureT(data:any,id:number){
     return this.http.put<any>(this.Url+"/"+ id,data);
  }

  deleteNaureT(id:number){
      return this.http.delete<any>(this.Url+"/"+id);
  }
}
