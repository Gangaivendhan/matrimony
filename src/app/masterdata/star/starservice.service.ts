import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from './../../../environments/environment';
import { Router } from '@angular/router';
@Injectable({
  providedIn: 'root'
})
export class StarserviceService {
  private baseUrl = environment.apiUrl;
  private starpost = this.baseUrl+"/api/star/create";
  private starget = this.baseUrl+"/api/star/getStarsInfo";
  private stargetId = this.baseUrl+"/api/star/getActiveStarInfo";
  private starupdate = this.baseUrl+"/api/star/update";
  private stardelete = this.baseUrl+"/api/star/delete";
  constructor(private http: HttpClient,
    private router: Router
) { }
postdata(data:any){
  return this.http.post<any>(this.starpost, data);
}
getdata(){
  return this.http.get<any>(this.starget);
}
getId(id:any){
  return this.http.get<any>(this.stargetId + '/' + id);
}
updatedata(data:any) {
  return this.http.put<any>(this.starupdate, data);
}
deleteData(id: any) {
  return this.http.put<any>(this.stardelete + '/' + id,id);
}

}


