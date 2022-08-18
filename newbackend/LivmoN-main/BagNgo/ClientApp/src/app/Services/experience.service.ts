import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';



const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type':  'application/json',
    'Access-Control-Allow-Credentials' : 'true',
    'Access-Control-Allow-Origin': '*',
    'Access-Control-Allow-Methods': 'GET, POST, PATCH, DELETE, PUT, OPTIONS',
    'Access-Control-Allow-Headers': 'Content-Type, Access-Control-Allow-Headers, Authorization, X-Requested-With',
  })
  
};
@Injectable({
  providedIn: 'root'

})
export class ExperienceService {
  

  readonly rootUrl = environment.apiUrl + "/Experience";
  readonly rootUrl2 = environment.apiUrl + "/ClientControllers";
  constructor(private http: HttpClient, private router: Router  ) { }
  getJWT() {
    return {
      headers: {
        Authorization: "Bearer " + localStorage.getItem("auth-token"),
      },
    };
  }
  cl = localStorage.getItem('ID');
  SaveExperience(cl : any,data){
    return this.http.post(this.rootUrl + '/CreateExperience?id='+ cl, data);
  }
  SaveActivity(ExpId : any,data){
    return this.http.post(this.rootUrl + '/AddActivity?expId='+ ExpId,data);
  }
  SaveExpImg(ExpId : any,file){
      
    const formData = new FormData()
    formData.append('file',file)
    return this.http.post(this.rootUrl + '/AddPExphoto?ExperienceID='+ ExpId,formData);
  }
}
