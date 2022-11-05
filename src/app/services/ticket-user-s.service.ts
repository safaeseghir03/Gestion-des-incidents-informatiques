import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class TicketUserSService {
   Url="http://localhost:62385/api/Tickets1"
  
  constructor(private http :HttpClient) { }

  getTicket():Observable<any[]>{
    return this.http.get<any>(this.Url);
  }
  getAllTickets(){
    this.http.get(this.Url).toPromise().then(
      res=>{
        const ss=res;
      }
    )
  }
  addTicket(data:any){
    return this.http.post(this.Url,data);
  }
  getTicketid(id:number){
    this.http.get<any>(this.Url+"/"+ id)
  }

  putTicket(data:any,id:number){
     return this.http.put<any>(this.Url+"/"+ id,data);
  }

  deleteTicket(id:number){
      return this.http.delete<any>(this.Url+"/"+id);
  }
}
