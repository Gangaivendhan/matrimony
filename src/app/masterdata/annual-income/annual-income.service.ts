import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from './../../../environments/environment';
import { Router } from '@angular/router';
@Injectable({
  providedIn: 'root'
})
export class AnnualIncomeService {
  private baseUrl = environment.apiUrl;
  private castepost = this.baseUrl+"/api/annualIncome/create";
  private casteget = this.baseUrl+"/api/annualIncome/getAnnualIncomeList";
  private castegetId = this.baseUrl+"/api/annualIncome/getAnnualIncome";
  private casteupdate = this.baseUrl+"/api/annualIncome/update";
  private castedelete = this.baseUrl+"/api/annualIncome/delete";
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


