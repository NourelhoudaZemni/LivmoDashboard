 
import { Component, OnInit, ViewEncapsulation  } from '@angular/core'; 
 
import { NgbModalConfig, NgbModal } from '@ng-bootstrap/ng-bootstrap'; 
import { AdminService } from 'src/app/services/admin.service';
@Component({
  selector: 'app-en-attente-host',
  templateUrl: './en-attente-host.component.html',
  styleUrls: ['./en-attente-host.component.scss']
})
export class EnAttenteHostComponent implements OnInit {
  closeResult: string;
  content:any;
  photoLink:any; 
  
  rneCopy:any; 
  
  licenceCopy:any; 
  country:any='';
  
  adresse:any='';
  action="";
  persAContact:any='';
  
  userName:any='';
  
  telephone:any='';
  
  type:any='';
  verified:any='';
  list:any;
  
allHosts:any;

  constructor(config: NgbModalConfig, private modalService: NgbModal , private adminService : AdminService) {
    config.backdrop = 'static';
    config.keyboard = false;


    this.adminService.getWaitingToVerifyHosts().subscribe(data=>{
     this.list = data; 
      

      console.log('a', this.list)  ;   
        
       
      this.photoLink = this.list.photoLink;

      console.log('photo ', this.list.photoLink)
      this.rneCopy = this.list.rneCopy;
      
      this.licenceCopy = this.list.licenceCopy;
       
      this.userName=this.list.userName; 
      
      this.country=this.list.country;
      
      this.adresse=this.list.adresse;
      this.type = this.list.type;
      this.verified=this.list.verified;

      this.persAContact=this.list.persAContact; 
      this.telephone=this.list.telephone; 


    })}

  ngOnInit(): void {
  }
   
  onClick() {
    if(this.action == 'Activate') {
      this.action = 'Disable'; 
    } else {
      this.action = 'Activate';  
    }
   
  } 
   
  
  openLg(c:any) {
    this.modalService.open(c, { size: 'lg' });
  }
  
  getAllHosts(){
    this.allHosts=this.adminService.getHosts();
     }
     deleteUser(id:any){
      console.log("id"+ id);
      this.adminService.deleteUser(id).subscribe(host=>{
        this.getAllHosts();
        location.reload();
    })
  }
  Verify(email:any){
  
  this.adminService.VerifyHosts(email).subscribe(host=>{
    this.getAllHosts();
    location.reload();
  
  })
  }
  
  NotVerify(email:any){
  
    this.adminService.NotVerifyHosts(email).subscribe(host=>{
      this.getAllHosts();
      location.reload();
    
    })
    }
  }
