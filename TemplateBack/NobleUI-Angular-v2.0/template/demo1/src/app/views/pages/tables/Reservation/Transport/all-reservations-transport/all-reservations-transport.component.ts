import { Component, OnInit } from '@angular/core';

import { CommonModule } from '@angular/common';
import { DataTable } from "simple-datatables";
import { AdminService } from 'src/app/services/admin.service';
@Component({
  selector: 'app-all-reservations-transport',
  templateUrl: './all-reservations-transport.component.html',
  styleUrls: ['./all-reservations-transport.component.scss']
})
export class AllReservationsTransportComponent implements OnInit {
 
  
  status:any='';
  
  reservationPrice:any='';
   
   
  list:any; 
  newlist:any;
  name:any; 
  debutReservation:any='';
  finReservation:any=''; 
  transportReservationId:any='';
  clientId:any='';
  constructor(private adminService : AdminService) {
   

    this.adminService.GetAllTRANSPORTReservation().subscribe(data=>{
     this.list = data; 
      console.log(data)

      console.log('a', this.list)  ;    
        this.clientId =this.list.clientId;
       
        console.log('id client', this.clientId);
        
        this.adminService.getClientsById(this.list.clientId[0]).subscribe(data=>{
        this.newlist=data;
        
      console.log('newww', data) 


        this.name=this.newlist.nom;
        this.list.push(this.name);
        console.log('list', this.list);

         
        })

this.transportReservationId =this.list.transportReservationId;
       
      this.status=this.list.status; 
      
      this.reservationPrice=this.list.reservationPrice;  
this.debutReservation = this.list.debutReservation;
this.finReservation = this.list.finReservation;
    })

    


  }

  ngOnInit(): void {
    const dataTable = new DataTable("#dataTableExample");
  }

}
