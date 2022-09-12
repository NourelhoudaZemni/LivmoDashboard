import { Component, OnInit } from '@angular/core';

import { DataTable } from "simple-datatables";

import { AdminService } from 'src/app/services/admin.service';

@Component({
  selector: 'app-all-transport',
  templateUrl: './all-transport.component.html',
  styleUrls: ['./all-transport.component.scss']
})
export class AllTransportComponent implements OnInit {
  commercantId:any;
  gouvernorate:  any;
  numberOfSeatd: any;
  type:any; 
  list:any;
  
  status:any;
  allExp:any; 
  activity:any;
  vehuculeName:any;
  transportId:any;
  constructor(private adminService : AdminService) {
   

    this.adminService.GetAllTransportServices().subscribe(data=>{
     this.list = data; 
      console.log(data)

      console.log('a', this.list)  ;   
        this.transportId = this.list.transportId;
       
      this.vehuculeName = this.list.vehuculeName;

      
      this.status = this.list.status;
      this.commercantId = this.list.commercantId;
      this.numberOfSeatd = this.list.numberOfSeatd;
       
      this.gouvernorate=this.list.gouvernorate; 
      
      this.type=this.list.type;  

    })

    


  }
 
  ngOnInit(): void {
    const dataTable = new DataTable("#dataTableExample");
  }
  getAllM(){
    this.allExp=this.adminService.GetAllTransportServices();
     }
  deleteTransportService(id:any){ 
    this.adminService.deleteTransportService(id).subscribe(host=>{
      this.getAllM();
      location.reload();})} 


  Verify(id:any){
  
    this.adminService.VerifyTransportService(id).subscribe(host=>{
      this.getAllM();
      location.reload();
    
    })
    }
    
    NotVerify(id:any){
    
      this.adminService.NotVerifyTransportService(id).subscribe(host=>{
        this.getAllM();
        location.reload();
      
      })
      }
}
