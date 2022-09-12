import { Component, OnInit } from '@angular/core';
import { AdminService } from 'src/app/services/admin.service';

import { DataTable } from "simple-datatables";
@Component({
  selector: 'app-paid-transport-reservation',
  templateUrl: './paid-transport-reservation.component.html',
  styleUrls: ['./paid-transport-reservation.component.scss']
})
export class PaidTransportReservationComponent implements OnInit {


  status:any='';
  
  reservationPrice:any='';
   
   
  list:any; 
  debutReservation:any='';
  finReservation:any=''; 
  transportReservationId:any='';
  clientId:any='';
  constructor(private adminService : AdminService) {
   

    this.adminService.GetAllPaidTRANSPORTReservation().subscribe(data=>{
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
