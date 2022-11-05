import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class ServiceDService {

readonly Url="http://localhost:62385/api/Services"
 
constructor(private http :HttpClient) { }

getServices():Observable<any[]>{
  return this.http.get<any>(this.Url);
}
getAllServices(){
  this.http.get(this.Url).toPromise().then(
    res=>{
      const ss=res;
    }
  )
}
addService(data:any){
  return this.http.post(this.Url,data);
}

updateService(id:number|string,data:any){
  return this.http.put(this.Url+"/"+id,data);

}

}
