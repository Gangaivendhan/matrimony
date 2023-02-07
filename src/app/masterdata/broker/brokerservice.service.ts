import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from './../../../environments/environment';
import { Router } from '@angular/router';
@Injectable({
  providedIn: 'root'
})

export class BrokerserviceService {
  private baseUrl = environment.apiUrl;
  private brokerpost = this.baseUrl+"/api/employee/createBroker";
  private brokerget = this.baseUrl+"/api/employee/brokerList";
  private brokergetId = this.baseUrl+"/api/employee/getBroker";
  private brokerupdate = this.baseUrl+"/api/employee/updateBroker";
  private brokerdelete = this.baseUrl+"/api/employee/delete";
  private brokergetcountry = this.baseUrl+"/api/mat/getAllCountry";
  private brokergetstate = this.baseUrl+"/api/mat/getAllState";
  private brokergetcity = this.baseUrl+"/api/mat/getAllCity";
  private getallstateid= this.baseUrl +'/api/mat/getCity';
  private getallcountryid= this.baseUrl +'/api/mat/getState';
  constructor(
    private http: HttpClient,
    private router: Router

  ) { }
  postdata(data:any){
    return this.http.post<any>(this.brokerpost, data);
  }
  getdata(){
    return this.http.get<any>(this.brokerget);
  }
  getId(id:any){
    return this.http.get<any>(this.brokergetId + '/' + id);
  }
  updatedata(data:any) {
    return this.http.put<any>(this.brokerupdate, data);
  }
  deleteData(id: any) {
    return this.http.put<any>(this.brokerdelete + '/' + id,id);
  }
  getalldatacountry(){
    return this.http.get<any>(this.brokergetcountry);
  }
  getalldatastate(){
    return this.http.get<any>(this.brokergetstate);
  }
  getalldatacity(){
    return this.http.get<any>(this.brokergetcity);
  } 
  getcountryiddetails(id: any){
    return this.http.get<any>(this.getallcountryid  + '/' + id);
  }

  public getcityId(id: any) {
    return this.http.get<any>(this.getallstateid + '/' + id)
  }   
}




