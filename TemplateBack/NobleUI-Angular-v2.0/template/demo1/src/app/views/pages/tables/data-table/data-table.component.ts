import { Component, OnInit } from '@angular/core';

import { DataTable } from "simple-datatables";

import { AdminService } from 'src/app/services/admin.service';

@Component({
  selector: 'app-data-table',
  templateUrl: './data-table.component.html',
  styleUrls: ['./data-table.component.scss']
})
export class DataTableComponent implements OnInit {
  photoLink:any; 
  country:any='';
  
  legalName:any='';
  
  userName:any='';
  
  verified:any='';
  
  phoneNumber:any='';
  list:any;
  allM:any;
records=[{name:'orange', code:'ff8ff'},
{name:'ddddd', code:'ff8ff'},
{name:'sssss', code:'ff8ff'},


];
  constructor(private adminService : AdminService) {
   

    this.adminService.getCommerçant().subscribe(data=>{
     this.list = data; 
      

      console.log('a', this.list)  ;   
        
       
      this.photoLink = this.list.photoLink;

      
      this.verified = this.list.verified;
       
      this.userName=this.list.userName; 
      
      this.legalName=this.list.legalName; 
      this.country=this.list.country;
      this.phoneNumber=this.list.telephone; 


    })

    


  }

  ngOnInit(): void {
    const dataTable = new DataTable("#dataTableExample");
  }
  getAllM(){
    this.allM=this.adminService.getHosts();
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
