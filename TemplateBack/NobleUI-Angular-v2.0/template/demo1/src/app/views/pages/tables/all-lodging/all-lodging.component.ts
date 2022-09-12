import { Component, OnInit } from '@angular/core';

import { DataTable } from "simple-datatables";

import { AdminService } from 'src/app/services/admin.service';

@Component({
  selector: 'app-all-lodging',
  templateUrl: './all-lodging.component.html',
  styleUrls: ['./all-lodging.component.scss']
})
export class AllLodgingComponent implements OnInit {
  lodgingphoto:any; 
  lodgingName:any='';
  
  pricePerNight:any='';
  
  commercantId:any='';
  
  status:any='';
  
  phoneNumber:any='';
  list:any;
  allExp:any; 
  lodgingId:any='';
  constructor(private adminService : AdminService) {
   

    this.adminService.GetAllLodgingServices().subscribe(data=>{
     this.list = data; 
      console.log(data)

      console.log('a', this.list)  ;   
        this.lodgingId = this.list.lodgingId;
       this.commercantId = this.list.commercantId;
      this.lodgingphoto = this.list.lodgingphoto;

       this.status= this.list.status;
      this.lodgingName=this.list.lodgingName; 
      
      this.pricePerNight=this.list.pricePerNight;  

    })

    


  }

  ngOnInit(): void {
    const dataTable = new DataTable("#dataTableExample");
  }
  getAllM(){
    this.allExp=this.adminService.GetAllLodgingServices();
     }


  NotVerify(id:any){
    
      this.adminService.NotVerifyLodgingService(id).subscribe(host=>{
        this.getAllM();
        location.reload();
      
      })
      }

      Verify(id:any){
  
        this.adminService.VerifyLodgingService(id).subscribe(host=>{
          this.getAllM();
          location.reload();
        
        })
        }
     deleteLodgingService(id:any){}
   
}
