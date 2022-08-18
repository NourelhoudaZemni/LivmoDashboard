import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { ClientModel } from '../Models/client.model';


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
export class ClientService {

  readonly rootUrl = environment.apiUrl + "/Admin";

  constructor(private http: HttpClient, private router: Router  ) { }

  getListeClients(){
    return this.http.get(this.rootUrl + '/GetAllClients', {responseType: 'json'});
  }
  deleteUser(id){
    return this.http.delete(this.rootUrl + '/DeleteUserById/'+id, {responseType: 'json'});
  }
  getClientById(id){
    return this.http.get(this.rootUrl + '/GetClientById/'+id, this.getJWT());
  }
  getJWT() {
    return {
      headers: {
        Authorization: "Bearer " + localStorage.getItem("auth-token"),
      },
    };
  }
}
