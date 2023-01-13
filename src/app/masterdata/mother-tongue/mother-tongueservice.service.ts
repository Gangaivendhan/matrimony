import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from './../../../environments/environment';
import { Router } from '@angular/router';
@Injectable({
  providedIn: 'root'
})
export class MotherTongueserviceService {
  private baseUrl = environment.apiUrl;
  private mothertonguepost = this.baseUrl+"/api/motherTongue/create";
  private mothertongueget = this.baseUrl+"/api/motherTongue/get/religion";
  private mothertonguegetId = this.baseUrl+"/api/motherTongue/get";
  private mothertongueupdate = this.baseUrl+"/api/motherTongue/update";
  private mothertonguedelete = this.baseUrl+"/api/motherTongue/deleted";


  constructor(
    private http: HttpClient,
    private router: Router

  ) { }
  postdata(data:any){
    return this.http.post<any>(this.mothertonguepost, data);
  }
  getdata(){
    return this.http.get<any>(this.mothertongueget);
  }
  getId(id:any){
    return this.http.get<any>(this.mothertonguegetId + '/' + id);
  }
  updatedata(data:any) {
    return this.http.put<any>(this.mothertongueupdate, data);
  }
  deleteData(id: any) {
    return this.http.put<any>(this.mothertonguedelete + '/' + id,id);
  }

}
