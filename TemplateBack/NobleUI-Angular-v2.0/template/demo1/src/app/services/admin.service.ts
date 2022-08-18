import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { email } from 'ngx-custom-validators/src/app/email/validator';

import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AdminService {

  readonly rootUrl = environment.apiUrl + "/Admin";
  
  readonly rootUrlExp = environment.apiUrl + "/Experience";
  
  constructor(private http: HttpClient) {}
    
  


getHostsIndiv()
{

return this.http.get(this.rootUrl +'/GetAllIndividualHosts')
;
}


getHostsOrg()
{

return this.http.get(this.rootUrl +'/GetAllOrganisationsHosts')
;
}


getHosts()
{return this.http.get(this.rootUrl +'/GetAllHosts')
;}

getVerifiedHosts()
{return this.http.get(this.rootUrl +'/GetAllValidationsHosts')
;}

getWaitingToVerifyHosts()
{return this.http.get(this.rootUrl +'/GetAllHostEnAttente')
;}

deleteUser(id:any)
{return this.http.delete(this.rootUrl +'/DeleteUserById/' +id , {responseType: 'json'});
;}


getClients()
{return this.http.get(this.rootUrl +'/GetAllClients');}


VerifyHosts(email:any )
{return this.http.post(this.rootUrl +'/HostSetValid/' + email, {responseType: 'json'});}

NotVerifyHosts(email:any )
{return this.http.post(this.rootUrl +'/HostSetNonValid/' + email, {responseType: 'json'});}

 

getCommerçant()
{return this.http.get(this.rootUrl +'/GetAllCommercants');}
 


getCommerçantEA()
{return this.http.get(this.rootUrl +'/GetAllCommercantEnAttente');}
 

GetAllExperiences()
{return this.http.get(this.rootUrlExp +'/GetAllExperiences');}
AllValidExperiences()
{return this.http.get(this.rootUrlExp +'/GetAllValidExperiences');}
GetAllTransportExperiences()
{return this.http.get(this.rootUrlExp +'/GetAllTransportExperiences');}

GetAllLodgingExperiences()
{return this.http.get(this.rootUrlExp +'/GetAllLodgingExperiences');}
GetAllFoodExperiences()
{return this.http.get(this.rootUrlExp +'/GetAllFoodExperiences');} 

}