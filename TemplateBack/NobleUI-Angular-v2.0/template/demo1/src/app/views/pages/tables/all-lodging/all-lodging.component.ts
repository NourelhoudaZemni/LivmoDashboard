import { Component, OnInit } from '@angular/core';

import { DataTable } from "simple-datatables";

import { AdminService } from 'src/app/services/admin.service';

@Component({
  selector: 'app-all-lodging',
  templateUrl: './all-lodging.component.html',
  styleUrls: ['./all-lodging.component.scss']
})
export class AllLodgingComponent implements OnInit {
  category:any; 
  type:any='';
  
  adress:any='';
  
  isValid:any='';
  
  verified:any='';
  
  phoneNumber:any='';
  list:any;
  allExp:any; 
 
  constructor(private adminService : AdminService) {
   

    this.adminService.GetAllLodgingExperiences().subscribe(data=>{
     this.list = data; 
      console.log(data)

      console.log('a', this.list)  ;   
        
       
      this.category = this.list.category;

       
      this.type=this.list.type; 
      
      this.adress=this.list.adress;  

    })

    


  }

  ngOnInit(): void {
    const dataTable = new DataTable("#dataTableExample");
  }
  getAllM(){
    this.allExp=this.adminService.GetAllLodgingExperiences();
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
