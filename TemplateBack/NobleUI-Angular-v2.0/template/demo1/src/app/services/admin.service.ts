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

  
  readonly rootUrlReservation = environment.apiUrl + "/Reservation";
  
  readonly rootUrlService = environment.apiUrl + "/Services";
  
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

DeleteExperience(id:any)
{return this.http.delete(this.rootUrlExp +'/DeleteExperienceById/' +id , {responseType: 'json'});
;}

getClients()

{return this.http.get(this.rootUrl +'/GetAllClients');} 


getClientsById(id:any)

{return this.http.get(this.rootUrl +'/GetClientById/'+ id, {responseType: 'json'});} 

 
VerifyHosts(email:any )
{return this.http.post(this.rootUrl +'/HostSetValid/' + email, {responseType: 'json'});}

NotVerifyHosts(email:any )
{return this.http.post(this.rootUrl +'/HostSetNonValid/' + email, {responseType: 'json'});}

 

VerifyExperience(id:any )
{return this.http.post(this.rootUrlExp +'/ExpSetValid/' + id, {responseType: 'json'});}

NotVerifyExperience(id:any )
{return this.http.post(this.rootUrlExp +'/ExpSetInvalid/' + id, {responseType: 'json'});}
 
getCommerçant()
{return this.http.get(this.rootUrl +'/GetAllCommercants');}
 


getCommerçantEA()
{return this.http.get(this.rootUrl +'/GetAllCommercantEnAttente');}
 

GetAllExperiences()
{return this.http.get(this.rootUrlExp +'/GetAllExperiences');}
AllValidExperiences()
{return this.http.get(this.rootUrlExp +'/GetAllValidExperiences');}
/////////////Service


deleteLodgingService(id:any )
{return this.http.get(this.rootUrlService +'/**'+ id, {responseType: 'json'});}
deleteFoodService(id:any )
{return this.http.get(this.rootUrlService +'/**'+ id, {responseType: 'json'});}

deleteTransportService(id:any )
{return this.http.get(this.rootUrlService +'/DeleteTransportById/'+ id, {responseType: 'json'});}

VerifyTransportService(id:any )
{return this.http.post(this.rootUrlService +'/TransportSetValid/' + id, {responseType: 'json'});}

NotVerifyTransportService(id:any )
{return this.http.post(this.rootUrlService +'/TransportSetNonValid/' + id, {responseType: 'json'});}


VerifyLodgingService(id:any )
{return this.http.post(this.rootUrlService +'/LodgingSetValid/' + id, {responseType: 'json'});}

NotVerifyLodgingService(id:any )
{return this.http.post(this.rootUrlService +'/LodgingSetNonValid/' + id, {responseType: 'json'});}


VerifyFoodService(id:any )
{return this.http.post(this.rootUrlService +'/FoodSetValid/' + id, {responseType: 'json'});}

NotVerifyFoodService(id:any )
{return this.http.post(this.rootUrlService +'/FoodSetInvalid/' + id, {responseType: 'json'});}
 
GetAllTransportServices()
{return this.http.get(this.rootUrlService +'/GetAllTransports');}

GetAllLodgingServices()
{return this.http.get(this.rootUrlService +'/GetAllLodging');}
GetAllFoodServices()
{return this.http.get(this.rootUrlService +'/GetAllFood');} 
///////////////LODGING RESERVATION

GetAllLodgingReservation()
{return this.http.get(this.rootUrlReservation +'/GetAllLodgingReservation');} 

GetAllAcceptedLodgingReservation()
{return this.http.get(this.rootUrlReservation +'/GetAllAcceptedLodgingReservation');} 

GetAllPendingLodgingReservation()
{return this.http.get(this.rootUrlReservation +'/GetAllPendingLodgingReservation');} 

GetAllInvalidLodgingReservation()
{return this.http.get(this.rootUrlReservation +'/GetAllDeclinedLodgingReservation');} 

GetAllPaidLodgingReservation()
{return this.http.get(this.rootUrlReservation +'/GetAllPaidLodgingReservation');} 
////////////////
///////////////TRANSPORT RESERVATION

GetAllTRANSPORTReservation()
{return this.http.get(this.rootUrlReservation +'/GetAllTransportReservation');} 

GetAllAcceptedTRANSPORTReservation()
{return this.http.get(this.rootUrlReservation +'/GetAllAcceptedTransportReservation');} 

GetAllPendingTRANSPORTReservation()
{return this.http.get(this.rootUrlReservation +'/GetAllPendingTransportReservation');} 

GetAllInvalidTRANSPORTReservation()
{return this.http.get(this.rootUrlReservation +'/GetAllDeclinedTransportReservation');} 

GetAllPaidTRANSPORTReservation()
{return this.http.get(this.rootUrlReservation +'/GetAllPaidTransportReservation');} 

//////////
//////////////Food RESERVATION

GetAllFoodReservation()
{return this.http.get(this.rootUrlReservation +'/GetAllFoodReservation');} 

GetAllAcceptedFoodReservation()
{return this.http.get(this.rootUrlReservation +'/GetAllAcceptedFoodReservation');} 

GetAllPendingFoodReservation()
{return this.http.get(this.rootUrlReservation +'/GetAllPendingFoodReservation');} 

GetAllInvalidFoodReservation()
{return this.http.get(this.rootUrlReservation +'/GetAllDeclinedFoodReservation');} 

GetAllPaidFoodReservation()
{return this.http.get(this.rootUrlReservation +'/GetAllPaidFoodReservation');} 
}