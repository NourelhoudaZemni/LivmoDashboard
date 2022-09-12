import { Component, OnInit } from '@angular/core';

import { DataTable } from "simple-datatables";
import { AdminService } from 'src/app/services/admin.service';
@Component({
  selector: 'app-all-food-reservation',
  templateUrl: './all-food-reservation.component.html',
  styleUrls: ['./all-food-reservation.component.scss']
})
export class AllFoodReservationComponent implements OnInit {

  
  status:any='';
  nom:any='';
  prenom:any='';
  reservationPrice:any='';
   
   
  list:any;  
  
  listNP:any;  
  dateReservation:any=''; 
  transportReservationId:any='';
  clientId:any='';
  constructor(private adminService : AdminService) {
   


     
    this.adminService.GetAllFoodReservation().subscribe(data=>{
     this.list = data; 
      console.log(data)

      console.log('a', this.list)  ;   
        
        this.clientId =this.list.clientId;
this.transportReservationId =this.list.transportReservationId;
       
      this.status=this.list.status; 
      
      this.reservationPrice=this.list.reservationPrice;  
this.dateReservation = this.list.dateReservation;  
    })

    this.adminService.getClientsById(this.list.clientId).subscribe(data=>{
      this.listNP = data; 
       console.log(data)
 
       console.log('esssssss', this.listNP)  ;   
          
        this.nom =this.listNP.nom;
        
        this.prenom =this.listNP.prenom;
     })
    


  }

  ngOnInit(): void {
    const dataTable = new DataTable("#dataTableExample");
    
  }


  FindByName(ClientId:any){
  
    this.adminService.getClientsById(ClientId).subscribe(host=>{
      this.FindByName(ClientId);
      location.reload();
      this.listNP =host;
      
      this.nom =this.listNP.nom;
      
      console.log('esssssss', this.listNP)  ;  
    
    })
} }
