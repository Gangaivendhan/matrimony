import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'environments/environment';
@Injectable({
  providedIn: 'root'
})
export class RasiStarService {

  
  private baseurl= environment.apiUrl
  private raasipost= this.baseurl +'/api/raasiStar/create'
  private raasiget= this.baseurl +'/api/raasi/getRaasisInfo'
  private raasiupdate= this.baseurl +'/api/raasi/updateRaasi'
  private raasidelete= this.baseurl +'/api/raasi/delete'
  private raasiedit = this.baseurl +'/api/raasi/getRaasiInfo'

  
  constructor(private http:HttpClient) { }
  postraasi(data:any){
    return this.http.post<any>(this.raasipost, data);
  }
  getraasi(){
    return this.http.get<any>(this.raasiget);
  }
  updateraasi(data:any) {
    return this.http.put<any>(this.raasiupdate,data);
  }
  deleteData(id: any) {
    return this.http.put<any>(this.raasidelete + '/' + id,id);
  }
  editraasi(id:any){
    return this.http.get<any>(this.raasiedit + '/' + id)
  }
  
}
