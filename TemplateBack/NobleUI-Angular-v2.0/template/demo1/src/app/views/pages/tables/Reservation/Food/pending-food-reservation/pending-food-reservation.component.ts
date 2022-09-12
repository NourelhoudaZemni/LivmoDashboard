import { Component, OnInit } from '@angular/core';

import { DataTable } from "simple-datatables";
import { AdminService } from 'src/app/services/admin.service';
@Component({
  selector: 'app-pending-food-reservation',
  templateUrl: './pending-food-reservation.component.html',
  styleUrls: ['./pending-food-reservation.component.scss']
})
export class PendingFoodReservationComponent implements OnInit {

  
  status:any='';
  
  reservationPrice:any='';
   
   
  list:any;  
  dateReservation:any=''; 
  transportReservationId:any='';
  clientId:any='';
  constructor(private adminService : AdminService) {
   

    this.adminService.GetAllPendingFoodReservation().subscribe(data=>{
     this.list = data; 
      console.log(data)

      console.log('a', this.list)  ;   
        
        this.clientId =this.list.clientId;
this.transportReservationId =this.list.transportReservationId;
       
      this.status=this.list.status; 
      
      this.reservationPrice=this.list.reservationPrice;  
this.dateReservation = this.list.dateReservation;  
    })

    


  }

  ngOnInit(): void {
    const dataTable = new DataTable("#dataTableExample");
  }
}
