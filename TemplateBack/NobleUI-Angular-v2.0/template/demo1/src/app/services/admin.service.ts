import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AdminService {

  readonly rootUrl = environment.apiUrl + "/Admin";
  
  constructor(private http: HttpClient) {}
    
 
getMerchants()
{

return this.http.get(this.rootUrl +'/GetAllCommercants')
;
}


getHosts()
{

return this.http.get(this.rootUrl +'/GetAllHosts')
;
}


getClients()
{

return this.http.get(this.rootUrl +'/GetAllClients')
;
}

}
