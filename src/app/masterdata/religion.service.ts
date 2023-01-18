import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'environments/environment';
@Injectable({
  providedIn: 'root'
})
export class ReligionService {

  private baseurl= environment.apiUrl
  private religionpost= this.baseurl + '/api/religion/create'
  private religionget= this.baseurl +'/api/religion/get/religion'
  private religionupdate= this.baseurl +'/api/religion/update'
  private religiondelete= this.baseurl +'/api/religion/deleted'
  private religionedit = this.baseurl + '/api/religion/get'

  
  constructor(private http:HttpClient) { }
  postreligion(data:any){
    return this.http.post<any>(this.religionpost, data);
  }
  getreligion(){
    return this.http.get<any>(this.religionget);
  }
  updatereligion(data:any) {
    return this.http.put<any>(this.religionupdate,data);
  }
  deleteData(id: any) {
    return this.http.put<any>(this.religiondelete + '/' + id,id);
  }
  editreligion(id:any){
    return this.http.get<any>(this.religionedit + '/' + id)
  }
  
}
