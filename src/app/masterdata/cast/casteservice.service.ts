import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from './../../../environments/environment';
import { Router } from '@angular/router';
@Injectable({
  providedIn: 'root'
})
export class CasteserviceService {
  private baseUrl = environment.apiUrl;
  private castepost = this.baseUrl+"/api/caste/create";
  private casteget = this.baseUrl+"/api/caste/getList";
  private castegetId = this.baseUrl+"/api/caste/get";
  private casteupdate = this.baseUrl+"/api/caste/update";
  private castedelete = this.baseUrl+"/api/caste/delete";
  constructor(
    private http: HttpClient,
    private router: Router
  ) { }
  postdata(data:any){
    return this.http.post<any>(this.castepost, data);
  }
  getdata(){
    return this.http.get<any>(this.casteget);
  }
  getId(id:any){
    return this.http.get<any>(this.castegetId + '/' + id);
  }
  updatedata(data:any) {
    return this.http.put<any>(this.casteupdate, data);
  }
  deleteData(id: any) {
    return this.http.put<any>(this.castedelete + '/' + id,id);
  }
  
}
