import { Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/Services/Auth.service';
import { HttpService } from 'src/app/Services/Http/http.service';

@Component({
  selector: 'app-add-activity',
  templateUrl: './add-activity.component.html',
  styleUrls: ['./add-activity.component.css']
})
export class AddActivityComponent implements OnInit {
  displayActivity: boolean;
  @Input ('activity') activity;  
  @Output("delete") deleteemit =  new EventEmitter()
  constructor( private fb: FormBuilder, private http: HttpService,
    private route: Router,
    private securityService: AuthService) { }
  ngOnInit(): void {
 console.log(this.activity)    
  }
  delete() { 
    this.deleteemit.emit() 
    this.displayActivity = false
  }
 

}


