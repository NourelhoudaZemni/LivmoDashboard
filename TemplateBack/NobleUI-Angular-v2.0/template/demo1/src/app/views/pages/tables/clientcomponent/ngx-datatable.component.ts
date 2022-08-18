import { Component, OnInit } from '@angular/core';

import { AdminService } from 'src/app/services/admin.service';

import { DataTable } from "simple-datatables";
@Component({
  selector: 'app-ngx-datatable',
  templateUrl: './ngx-datatable.component.html',
  styleUrls: ['./ngx-datatable.component.scss']
})
export class NgxDatatableComponent implements OnInit {
  photoLink:any; 
  country:any='';
  
  adresse:any='';
  
allC:any;
  nom:any='';
  
  prenom:any='';
  dateOfBirth:any='';
  telephone:any='';
  list:any;
  
  id:any;
  action="";

  constructor(private adminService : AdminService) {
   

    this.adminService.getClients().subscribe(data=>{
     this.list = data; 
      

      console.log('a', this.list)  ;   
        
       
      this.photoLink = this.list.photoLink;
       
      this.nom=this.list.nom; 

      
      this.id=this.list.id; 
      
      this.prenom=this.list.prenom; 
      this.dateOfBirth= this.list.dateOfBirth;
      this.country=this.list.country;
      
      this.adresse=this.list.adresse;
      this.telephone=this.list.telephone; 


    })

    


  }

  ngOnInit(): void {
    const dataTable = new DataTable("#dataTableExample");
  }
  
  onClick() {
    if(this.action == 'Validate') {
      this.action = 'Delete'; 
    } else {
      this.action = 'Validate';  
    }
   
  } 

  getAllC(){
    this.allC=this.adminService.getHosts();
     }
  deleteUser(id:any){
    console.log("id"+ id);
    this.adminService.deleteUser(id).subscribe(host=>{
      this.getAllC();
      location.reload();
  })
}

}