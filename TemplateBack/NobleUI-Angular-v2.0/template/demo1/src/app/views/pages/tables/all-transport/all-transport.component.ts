import { Component, OnInit } from '@angular/core';

import { DataTable } from "simple-datatables";

import { AdminService } from 'src/app/services/admin.service';

@Component({
  selector: 'app-all-transport',
  templateUrl: './all-transport.component.html',
  styleUrls: ['./all-transport.component.scss']
})
export class AllTransportComponent implements OnInit {
  vehiculeName:  any;
  seats: any;
  toGoFrom: any;
  toGoFromDeparture:any;
  toGoTo:any;
  list:any;
  allExp:any; 
 
  constructor(private adminService : AdminService) {
   

    this.adminService.GetAllTransportExperiences().subscribe(data=>{
     this.list = data; 
      console.log(data)

      console.log('a', this.list)  ;   
        
       
      this.vehiculeName = this.list.vehiculeName;

      
      this.seats = this.list.seats;
       
      this.toGoFrom=this.list.toGoFrom; 
      
      this.toGoTo=this.list.toGoTo;  

    })

    


  }

  ngOnInit(): void {
    const dataTable = new DataTable("#dataTableExample");
  }
  getAllM(){
    this.allExp=this.adminService.GetAllTransportExperiences();
     }
  Verify(email:any){
  
    this.adminService.VerifyHosts(email).subscribe(host=>{
      this.getAllM();
      location.reload();
    
    })
    }
    
    NotVerify(email:any){
    
      this.adminService.NotVerifyHosts(email).subscribe(host=>{
        this.getAllM();
        location.reload();
      
      })
      }
}
