import { Component, OnInit } from '@angular/core';

import { DataTable } from "simple-datatables";

import { AdminService } from 'src/app/services/admin.service';

@Component({
  selector: 'app-all-food',
  templateUrl: './all-food.component.html',
  styleUrls: ['./all-food.component.scss']
})
export class AllFoodComponent implements OnInit {
  dishName: any;
  foodPrice:any;
  restaurantName : any;
  status:any;
  list:any;
  allExp:any; 
  foodServId:any;
 
  constructor(private adminService : AdminService) {
   

    this.adminService.GetAllFoodServices().subscribe(data=>{
     this.list = data; 
      console.log(data)

      console.log('a', this.list)  ;   
        this.foodServId = this.list.foodServId;
       this.status = this.list.status;
      this.dishName = this.list.dishName;

      this.restaurantName = this.list.restaurantName;
      this.foodPrice = this.list.foodPrice;
         
    })

    


  }

  ngOnInit(): void {
    const dataTable = new DataTable("#dataTableExample");
  }
  getAllM(){
    this.allExp=this.adminService.GetAllFoodServices();
     }
  Verify(email:any){
  
    this.adminService.VerifyFoodService(email).subscribe(host=>{
      this.getAllM();
      location.reload();
    
    })
    }
    deleteTransportService(id:any){}
    NotVerify(email:any){
    
      this.adminService.NotVerifyFoodService(email).subscribe(host=>{
        this.getAllM();
        location.reload();
      
      })
      }
}
