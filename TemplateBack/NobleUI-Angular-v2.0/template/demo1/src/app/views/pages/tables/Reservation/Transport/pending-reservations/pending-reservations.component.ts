import { Component, OnInit } from '@angular/core';

import { DataTable } from "simple-datatables";
import { AdminService } from 'src/app/services/admin.service';
@Component({
  selector: 'app-pending-reservations',
  templateUrl: './pending-reservations.component.html',
  styleUrls: ['./pending-reservations.component.scss']
})
export class PendingReservationsComponent implements OnInit {


  status:any='';
  
  reservationPrice:any='';
   
   
  list:any; 
  debutReservation:any='';
  finReservation:any=''; 
  transportReservationId:any='';
  clientId:any='';
  constructor(private adminService : AdminService) {
   

    this.adminService.GetAllPendingTRANSPORTReservation().subscribe(data=>{
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
