import { Component, OnInit } from '@angular/core';

import { DataTable } from "simple-datatables";
import { AdminService } from 'src/app/services/admin.service';
@Component({
  selector: 'app-valid-food-reservation',
  templateUrl: './valid-food-reservation.component.html',
  styleUrls: ['./valid-food-reservation.component.scss']
})
export class ValidFoodReservationComponent implements OnInit {

  
  status:any='';
  
  reservationPrice:any='';
   
   
  list:any;  
  dateReservation:any=''; 
  transportReservationId:any='';
  clientId:any='';
  constructor(private adminService : AdminService) {
   

    this.adminService.GetAllAcceptedFoodReservation().subscribe(data=>{
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
