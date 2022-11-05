import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class EquipeITService {
  readonly Url="http://localhost:62385/api/EquipeIts"

  constructor(private http :HttpClient) { }

  getMembersIT():Observable<any[]>{
    return this.http.get<any>(this.Url);
  }
  getAllMembersIT(){
    this.http.get(this.Url).toPromise().then(
      res=>{
        const ss=res;
      }
    )
  }
  addMemberIT(data:any){
    return this.http.post(this.Url,data);
  }

  putMemberIT(data:any,id:number){
     return this.http.put<any>(this.Url+"/"+ id,data);
  }

  deleteUser(id:number){
      return this.http.delete<any>(this.Url+"/"+id);
  }
}
