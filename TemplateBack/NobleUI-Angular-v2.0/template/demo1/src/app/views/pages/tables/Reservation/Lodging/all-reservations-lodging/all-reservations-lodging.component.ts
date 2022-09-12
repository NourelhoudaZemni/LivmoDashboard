import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DataTable } from "simple-datatables";
import { AdminService } from 'src/app/services/admin.service';
@Component({
  selector: 'app-all-reservations-lodging',
  templateUrl: './all-reservations-lodging.component.html',
  styleUrls: ['./all-reservations-lodging.component.scss']
})
export class AllReservationsLodgingComponent implements OnInit {
  category:any; 
  type:any='';
  
  status:any='';
  
  quantity:any='';
  
  verified:any='';
  
  phoneNumber:any='';
  list:any;
  allExp:any; 
  debutReservation:any='';
  finReservation:any=''; 
  lodgingId:any='';
  clientId:any='';
  constructor(private adminService : AdminService) {
   

    this.adminService.GetAllLodgingReservation().subscribe(data=>{
     this.list = data; 
      console.log(data)

      console.log('a', this.list)  ;   
        
        this.clientId =this.list.clientId;
this.lodgingId =this.list.status;
       
      this.status=this.list.status; 
      
      this.quantity=this.list.quantity;  
this.debutReservation = this.list.debutReservation;
this.finReservation = this.list.finReservation;
    })

    


  }

  ngOnInit(): void {
    const dataTable = new DataTable("#dataTableExample");
  }

}
