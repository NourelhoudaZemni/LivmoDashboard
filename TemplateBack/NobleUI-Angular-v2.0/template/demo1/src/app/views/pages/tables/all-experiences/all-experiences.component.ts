import { Component, OnInit } from '@angular/core';

import { DataTable } from "simple-datatables";

import { AdminService } from 'src/app/services/admin.service';
@Component({
  selector: 'app-all-experiences',
  templateUrl: './all-experiences.component.html',
  styleUrls: ['./all-experiences.component.scss']
})
export class AllExperiencesComponent implements OnInit {
  title:any; 
  location:any='';
  
  theme:any='';
  
  isValid:any='';
  
  verified:any='';
  
  phoneNumber:any='';
  list:any;
  allExp:any;
  experienceId:any=''
 
  constructor(private adminService : AdminService) {
   

    this.adminService.GetAllExperiences().subscribe(data=>{
     this.list = data; 
      console.log(data)

      console.log('a', this.list)  ;   
        
       
      this.title = this.list.title;

      
      this.experienceId= this.list.experienceId; 
      this.location = this.list.location;
       
      this.isValid=this.list.isValid; 
      
      this.theme=this.list.theme;  

    })

    


  }

  ngOnInit(): void {
    const dataTable = new DataTable("#dataTableExample");
  }
  getAllM(){
    this.allExp=this.adminService.GetAllExperiences();
     }
  Verify(id:any){
  
    this.adminService.VerifyExperience(id).subscribe(host=>{
      this.getAllM();
      location.reload();
    
    })
    }
    delete(id:any){
      console.log("id"+ id);
      this.adminService.DeleteExperience(id).subscribe(host=>{
        this.getAllM();
        location.reload();
    })}
    NotVerify(id:any){
    
      this.adminService.NotVerifyExperience(id).subscribe(host=>{
        this.getAllM();
        location.reload();
      
      })
      }
}
