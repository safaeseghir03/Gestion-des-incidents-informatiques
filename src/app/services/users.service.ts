import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class UsersService {
  readonly Url="http://localhost:62385/api/Demandeurs"
  
  constructor(private http :HttpClient) { }

  getUsers():Observable<any[]>{
    return this.http.get<any>(this.Url);
  }
  getAllUsers(){
    this.http.get(this.Url).toPromise().then(
      res=>{
        const ss=res;
      }
    )
  }
  addUser(data:any){
    return this.http.post(this.Url,data);
  }

  putUser(data:any,id:number){
     return this.http.put<any>(this.Url+"/"+ id,data);
  }

  deleteUser(id:number){
      return this.http.delete<any>(this.Url+"/"+id);
  }
}
