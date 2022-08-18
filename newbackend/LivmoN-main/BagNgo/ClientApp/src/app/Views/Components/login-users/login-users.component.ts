import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from 'src/app/Services/Auth.service';
import { HttpService } from 'src/app/Services/Http/http.service';

@Component({
  selector: 'app-login-users',
  templateUrl: './login-users.component.html',
  styleUrls: ['./login-users.component.css']
})
export class LoginUsersComponent implements OnInit {
  LoginForm: FormGroup
  showError: boolean;
  showSuccess: boolean;
  constructor(private fb: FormBuilder, private http: HttpService,
    private route: Router,
    private securityService: AuthService,
    ) {
  }

  ngOnInit(): void {
    this.LoginForm = this.fb.group({
      "email": ['', Validators.required],
      "password": ['', Validators.required],
    })
  }

  
  login () {
    this.showError = this.showSuccess = false;
    this.securityService.login(this.LoginForm.value).subscribe((data) => {
        console.log("Console data value : ", data);
        this.securityService.saveToken(data);
        // check role
        this.route.navigate(["homepage"]);
      }
    );
  }
  routing(path: any) {
    this.route.navigate(["homepage"])
  }
}

