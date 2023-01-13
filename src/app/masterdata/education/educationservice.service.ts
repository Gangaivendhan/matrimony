import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from './../../../environments/environment';
import { Router } from '@angular/router';
@Injectable({
  providedIn: 'root'
})
export class EducationserviceService {
  private baseUrl = environment.apiUrl;
  private educationpost = this.baseUrl+"/api/education/create";
  private educationget = this.baseUrl+"/api/education/getList";
  private educationgetId = this.baseUrl+"/api/education/get";
  private educationupdate = this.baseUrl+"/api/education/update";
  private educationdelete = this.baseUrl+"/api/education/delete";


  constructor(
    private http: HttpClient,
    private router: Router

  ) { }
  postdata(data:any){
    return this.http.post<any>(this.educationpost, data);
  }
  getdata(){
    return this.http.get<any>(this.educationget);
  }
  getId(id:any){
    return this.http.get<any>(this.educationgetId + '/' + id);
  }
  updatedata(data:any) {
    return this.http.put<any>(this.educationupdate, data);
  }
  deleteData(id: any) {
    return this.http.put<any>(this.educationdelete + '/' + id,id);
  }

  
}
