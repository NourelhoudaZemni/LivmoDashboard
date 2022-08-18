import { Component, OnInit } from '@angular/core';

import { DataTable } from "simple-datatables";

import { AdminService } from 'src/app/services/admin.service';
@Component({
  selector: 'app-en-attente-merchant',
  templateUrl: './en-attente-merchant.component.html',
  styleUrls: ['./en-attente-merchant.component.scss']
})
export class EnAttenteMerchantComponent implements OnInit {
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
   

    this.adminService.getCommerçantEA().subscribe(data=>{
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
  getCommerçantEA(){
    this.allM=this.adminService.getCommerçantEA();
     }
  Verify(email:any){
  
    this.adminService.VerifyHosts(email).subscribe(host=>{
      this.getCommerçantEA();
      location.reload();
    
    })
    }
    
    NotVerify(email:any){
    
      this.adminService.NotVerifyHosts(email).subscribe(host=>{
        this.getCommerçantEA();
        location.reload();
      
      })
      }
}
