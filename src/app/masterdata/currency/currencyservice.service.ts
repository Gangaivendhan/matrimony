import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from './../../../environments/environment';
import { Router } from '@angular/router';
@Injectable({
  providedIn: 'root'
})
export class CurrencyserviceService {
  private baseUrl = environment.apiUrl;
  private currencypost = this.baseUrl+"/api/currenci/create";
  private currencyget = this.baseUrl+"/api/currenci/getCurrencyList";
  private currencygetId = this.baseUrl+"/api/currenci/getCurrency";
  private currencyupdate = this.baseUrl+"/api/currenci/update";
  private currencydelete = this.baseUrl+"/api/currenci/delete";
  constructor(
    private http: HttpClient,
    private router: Router

  ) { }
  postdata(data:any){
    return this.http.post<any>(this.currencypost, data);
  }
  getdata(){
    return this.http.get<any>(this.currencyget);
  }
  getId(id:any){
    return this.http.get<any>(this.currencygetId + '/' + id);
  }
  updatedata(data:any) {
    return this.http.put<any>(this.currencyupdate, data);
  }
  deleteData(id: any) {
    return this.http.put<any>(this.currencydelete + '/' + id,id);
  }
  
}

