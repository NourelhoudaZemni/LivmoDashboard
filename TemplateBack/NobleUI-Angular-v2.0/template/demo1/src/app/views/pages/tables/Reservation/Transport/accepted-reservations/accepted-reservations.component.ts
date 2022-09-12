import { Component, OnInit } from '@angular/core';

import { DataTable } from "simple-datatables";
import { AdminService } from 'src/app/services/admin.service';
@Component({
  selector: 'app-accepted-reservations',
  templateUrl: './accepted-reservations.component.html',
  styleUrls: ['./accepted-reservations.component.scss']
})
export class AcceptedReservationsComponent implements OnInit {

  
  status:any='';
  
  reservationPrice:any='';
   
   
  list:any; 
  debutReservation:any='';
  finReservation:any=''; 
  transportReservationId:any='';
  clientId:any='';
  constructor(private adminService : AdminService) {
   

    this.adminService.GetAllAcceptedTRANSPORTReservation().subscribe(data=>{
     this.list = data; 
      console.log(data)

      console.log('a', this.list)  ;   
        
        this.clientId =this.list.clientId;
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
