import {trigger,state,style,transition,animate} from '@angular/animations';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/Services/Auth.service';
import { HttpService } from 'src/app/Services/Http/http.service';

@Component({
  selector: 'app-addcommercant',
  templateUrl: './addcommercant.component.html',
  styleUrls: ['./addcommercant.component.css'],
  animations: [
    trigger('errorState', [
        state('hidden', style({
            opacity: 0
        })),
        state('visible', style({
            opacity: 1
        })),
        transition('visible => hidden', animate('400ms ease-in')),
        transition('hidden => visible', animate('400ms ease-out'))
    ])
],
})
export class AddcommercantComponent implements OnInit {

  step = 1
  steplength = 5
  labels = ['Type  Service', 'Account', 'General Informations ', 'Essential Informations', 'Documents']
  isselected = "Transport"
  Form2Transport: FormGroup
  Form3Transport: FormGroup
  Form4Transport: FormGroup
  Form5Transport: FormGroup
  Form2Lodging: FormGroup
  Form3Lodging: FormGroup
  Form4Lodging: FormGroup
  Form5Lodging: FormGroup
  Form2Restaurant: FormGroup
  Form3Restaurant: FormGroup
  Form4Restaurant: FormGroup
  Form5Restaurant: FormGroup

  value20: number;
  value21: number = 1;
  value22: number = 1;
  value23: number = 1;
  value24: number = 1;
  value25: number = 1;
  isselectedType = "SUARL"

  countries: any[];
  selectedCountry: any;
  selectedGouvernorate: any;
  cities: any[];

  profilePicture = null
  CopyIdFile = { name: 'File', data: null }
  CopyIdFile2 = { name: 'File', data: null }
  CopyIdFile3 = { name: 'File', data: null }


  constructor(private fb: FormBuilder, private http: HttpService,
    private route: Router,
    private securityService: AuthService) {
    this.SetupFormControl();
    this.cities = [
      { name: 'New York', code: 'NY' },
      { name: 'Rome', code: 'RM' },
      { name: 'London', code: 'LDN' },
      { name: 'Istanbul', code: 'IST' },
      { name: 'Paris', code: 'PRS' }
    ];
  }
  SetupFormControl() {
    this.Form2Transport = this.fb.group({
      verified: false,
      clientURI: 'http://localhost:4200/emailconfirmation',
      "legalName": ['', [Validators.required, Validators.pattern("[a-zA-Z ]*")]],
      "persAContact": ['', [Validators.required, Validators.pattern("[a-zA-Z ]*")]],
      "telephone": ['', [Validators.required, Validators.pattern("[+()0-9]+")]],
      "email": ['', [Validators.required, Validators.pattern("^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$")]],
      "confirmPassword": ['', Validators.required],
      password: new FormControl('', [Validators.required, Validators.minLength(8), Validators.pattern("(?=^.{8,}$)(?=.*\d)(?=.*[!@#$%^&*]+)(?![.\n])(?=.*[A-Z])(?=.*[a-z]).*$")]),
    })
    this.Form3Transport = this.fb.group({
      "country": ['', Validators.required],
      "gouvernorate": ['', Validators.required],
      "adresse": ['', Validators.required],
      "zipCode": ['', [Validators.required, Validators.pattern("^[0-9]*$")]],
      "MaleWorkforce": ['', Validators.required],
      "FemaleWorkforce": ['', Validators.required],
    })
    this.Form4Transport = this.fb.group({
      "legalStatus": ['', Validators.required],
      "basicActivity": ['', Validators.required],
      "numCnss": ['', [Validators.required, Validators.pattern("^[0-9]*$")]],
      "taxNum": ['', [Validators.required, Validators.pattern("^[0-9]*$")]],
    })
    this.Form5Transport = this.fb.group({
      "rneCopy": ['', Validators.required],
      "cadTouristTraansp": ['', Validators.required],
      "licenceCopy": ['', Validators.required],
    })
    // Lodging :
    this.Form2Lodging = this.fb.group({
      verified: false,
      clientURI: 'http://localhost:4200/emailconfirmation',
      "legalName": ['', [Validators.required, Validators.pattern("[a-zA-Z ]*")]],
      "persAContact": ['', [Validators.required, Validators.pattern("[a-zA-Z ]*")]],
      "telephone": ['', [Validators.required, Validators.pattern("[+()0-9]+")]],
      "email": ['', [Validators.required, Validators.pattern("^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$")]],
      "confirmPassword": ['', Validators.required],
      password: new FormControl('', [Validators.required, Validators.minLength(8), Validators.pattern("(?=^.{8,}$)(?=.*\d)(?=.*[!@#$%^&*]+)(?![.\n])(?=.*[A-Z])(?=.*[a-z]).*$")]),
    })
    this.Form3Lodging = this.fb.group({
      "country": ['', Validators.required],
      "gouvernorate": ['', Validators.required],
      "adresse": ['', Validators.required],
      "zipCode": ['', [Validators.required, Validators.pattern("^[0-9]*$")]],
      "MaleWorkforce": ['', Validators.required],
      "FemaleWorkforce": ['', Validators.required],
    })
    this.Form4Lodging = this.fb.group({
      "legalStatus": ['', Validators.required],
      "basicActivity": ['', Validators.required],
      "numCnss": ['', [Validators.required, Validators.pattern("^[0-9]*$")]],
      "taxNum": ['', [Validators.required, Validators.pattern("^[0-9]*$")]],
    })
    this.Form5Lodging = this.fb.group({
      "rneCopy": ['', Validators.required],
      "licenceCopy": ['', Validators.required],
    })
      // Restaurant :
      this.Form2Restaurant = this.fb.group({
        verified: false,
        clientURI: 'http://localhost:4200/emailconfirmation',
        "legalName": ['', [Validators.required, Validators.pattern("[a-zA-Z ]*")]],
        "persAContact": ['', [Validators.required, Validators.pattern("[a-zA-Z ]*")]],
        "telephone": ['', [Validators.required, Validators.pattern("[+()0-9]+")]],
        "email": ['', [Validators.required, Validators.pattern("^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$")]],
        "confirmPassword": ['', Validators.required],
        password: new FormControl('', [Validators.required, Validators.minLength(8), Validators.pattern("(?=^.{8,}$)(?=.*\d)(?=.*[!@#$%^&*]+)(?![.\n])(?=.*[A-Z])(?=.*[a-z]).*$")]),
      })
      this.Form3Restaurant = this.fb.group({
        "country": ['', Validators.required],
        "gouvernorate": ['', Validators.required],
        "adresse": ['', Validators.required],
        "zipCode": ['', [Validators.required, Validators.pattern("^[0-9]*$")]],
        "MaleWorkforce": ['', Validators.required],
        "FemaleWorkforce": ['', Validators.required],
      })
      this.Form4Restaurant = this.fb.group({
        "legalStatus": ['', Validators.required],
        "basicActivity": ['', Validators.required],
        "numCnss": ['', [Validators.required, Validators.pattern("^[0-9]*$")]],
        "taxNum": ['', [Validators.required, Validators.pattern("^[0-9]*$")]],
        "restaurantType": ['', Validators.required],
        "restaurantSpeciality": ['', Validators.required],

      })
      this.Form5Restaurant = this.fb.group({
        "rneCopy": ['', Validators.required],
        "licenceCopy": ['', Validators.required],
      })
  }

  ngOnInit(): void {
    this.getCountries()
  }

  clickFakeUpload(id: any) {
    document.getElementById(id).click()
  }

  getlabels() {
    switch (this.isselected) {
      case 'Transport':
        return ['Type  Service', 'Account', 'General Informations ', 'Essential Informations', 'Documents']
      case 'Lodging':
        return ['Type  Service', 'Account', 'General Informations ', 'Essential Informations', 'Documents']
      case 'Restaurant':
        return ['Type  Service', 'Account', 'General Informations ', 'Essential Informations', 'Documents']
    }
  }
  addStepTransport() {
    this.step = this.step + 1;
    this.isselected = 'Transport'
  }
  addStepLodging() {
    this.step = this.step + 1;
    this.isselected = 'Lodging'
  }
  addStepRestaurant() {
    this.step = this.step + 1;
    this.isselected = 'Restaurant'
  }
  uploadedFile(e, id) {
    if (e.target.files && e.target.files[0]) {
      const file = e.target.files[0];
      const reader = new FileReader();
      reader.onload = e => {
        let data: any = reader.result
        if (file.type.indexOf('video') != -1) {
          //if video
        }
        else if (file.type.indexOf('image') != -1) {
          if (id == 'profile') {
            this.profilePicture = data
          }
        }
        else if (id == "CopyIdFile") {
          console.log(file);
          this.CopyIdFile = { data, name: file.name }
        }
        else if (id == "CopyIdFile2") {
          console.log(file);
          this.CopyIdFile2 = { data, name: file.name }
        }
        else if (id == "CopyIdFile3") {
          console.log(file);
          this.CopyIdFile3 = { data, name: file.name }
        }
      };
      reader.readAsDataURL(file);
    }
  }
  passwordHaveOrgTr(key) {
    const specialChars = /[`!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?~]/;
    const val = this.passwordT.value + ''
    if (key == 'lowercase') return val.toUpperCase() != val
    if (key == 'upercase') return val.toLowerCase() != val
    if (key == 'num') return val.split('').find((e: any) => !isNaN(e))
    if (key == 'special') return specialChars.test(val)
    else return true
  }
  MustMatchOrg(password: string, confirmPassword: string) {
    return (Form2Transport: FormGroup) => {
      const passwordControl = this.Form2Transport.controls[password];
      const ConfirmpasswordControl = this.Form2Transport.controls[confirmPassword];

      if (ConfirmpasswordControl.errors && ConfirmpasswordControl.errors['MustMatch']) {
        return;
      }
      if (passwordControl.value !== ConfirmpasswordControl.value) {
        ConfirmpasswordControl.setErrors({ MustMatch: true });
      }
      else {
        ConfirmpasswordControl.setErrors(null);
      }
    };
  }
  // Lodging : 
  passwordHaveOrgLo(key) {
    const specialChars = /[`!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?~]/;
    const val = this.passwordL.value + ''
    if (key == 'lowercase') return val.toUpperCase() != val
    if (key == 'upercase') return val.toLowerCase() != val
    if (key == 'num') return val.split('').find((e: any) => !isNaN(e))
    if (key == 'special') return specialChars.test(val)
    else return true
  }
  MustMatchOrgLo(password: string, confirmPassword: string) {
    return (Form2Lodging: FormGroup) => {
      const passwordControl = this.Form2Lodging.controls[password];
      const ConfirmpasswordControl = this.Form2Lodging.controls[confirmPassword];

      if (ConfirmpasswordControl.errors && ConfirmpasswordControl.errors['MustMatch']) {
        return;
      }
      if (passwordControl.value !== ConfirmpasswordControl.value) {
        ConfirmpasswordControl.setErrors({ MustMatch: true });
      }
      else {
        ConfirmpasswordControl.setErrors(null);
      }
    };
  }
  // Lodging : 
  passwordHaveOrgR(key) {
    const specialChars = /[`!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?~]/;
    const val = this.passwordR.value + ''
    if (key == 'lowercase') return val.toUpperCase() != val
    if (key == 'upercase') return val.toLowerCase() != val
    if (key == 'num') return val.split('').find((e: any) => !isNaN(e))
    if (key == 'special') return specialChars.test(val)
    else return true
  }
  MustMatchOrgR(password: string, confirmPassword: string) {
    return (Form2Restaurant: FormGroup) => {
      const passwordControl = this.Form2Restaurant.controls[password];
      const ConfirmpasswordControl = this.Form2Restaurant.controls[confirmPassword];

      if (ConfirmpasswordControl.errors && ConfirmpasswordControl.errors['MustMatch']) {
        return;
      }
      if (passwordControl.value !== ConfirmpasswordControl.value) {
        ConfirmpasswordControl.setErrors({ MustMatch: true });
      }
      else {
        ConfirmpasswordControl.setErrors(null);
      }
    };
  }

  getCountries() {
    this.http.getCountries().subscribe((res: any) => {
      this.countries = res;
    })
  }
  register() {
    if (this.isselected == 'Transport') {
      var typeService = 'Transport'
      var data = { ...this.Form2Transport.value, country: this.Form3Transport.value.country.name, ...this.Form4Transport.value, ...this.Form5Transport.value, typeService }
      data.legalStatus = this.Form4Transport.value.legalStatus
      data.country = this.Form3Transport.value.country.Name
    } 
    else if (this.isselected == 'Lodging') {
      var typeService = 'Lodging'
      var data = { ...this.Form2Lodging.value, country: this.Form3Lodging.value.country.name, ...this.Form4Lodging.value, ...this.Form5Lodging.value, typeService }
      data.legalStatus = this.Form4Lodging.value.legalStatus
      data.country = this.Form3Lodging.value.country.Name
    } 
    else if (this.isselected == 'Restaurant') {
      var typeService = 'Restaurant'
      var data = { ...this.Form2Restaurant.value, country: this.Form3Restaurant.value.country.name, ...this.Form4Restaurant.value, ...this.Form5Restaurant.value, typeService }
      data.legalStatus = this.Form4Restaurant.value.legalStatus
      data.country = this.Form3Restaurant.value.country.Name
    } 

    this.securityService.registerComm(data).subscribe({
      next: (data) => {
        console.log('added');
      }, error: error => {
        console.log(error);
      }
    });
  }
  /* this.experienceService.AddExperience(data).subscribe(()=>
   next: (data) => {
    console.log('experienceAdded');
    this.experienceService.AddActivity(data).subscriber(()=>
    next: (data) => {
      console.log('experienceAdded');
    }  
  }*/
  NextStepValidation() {
    if (this.isselected == 'Transport') {
      switch (this.step) {
        case 2:
          const passwordValid = this.passwordHaveOrgTr('special') && this.passwordHaveOrgTr('lowercase') && this.passwordHaveOrgTr('upercase') && this.passwordHaveOrgTr('num');
          return this.legalNameT.valid && this.telephoneT.valid && this.emailT.valid && (this.confirmPasswordT.value == this.passwordT.value) && passwordValid;
        case 3:
          return this.countryT.valid && this.adresseT.valid && this.zipCodeT.valid && this.FemaleWorkforceT.valid && this.MaleWorkforceT.valid;
        case 4:
          return this.legalStatusT.valid && this.numCnssT.valid && this.taxNumT.valid ;
        case 5:
          return this.rneCopyT.valid && this.licenceCopyT.valid && this.cadTouristTraanspT.valid;
        default: return true
      }
    }
    else if (this.isselected == "Lodging") {
      switch (this.step) {
        case 2:
          const passwordValid = this.passwordHaveOrgLo('special') && this.passwordHaveOrgLo('lowercase') && this.passwordHaveOrgLo('upercase') && this.passwordHaveOrgLo('num');
          return this.legalNameL.valid && this.telephoneL.valid && this.emailL.valid && (this.confirmPasswordL.value == this.passwordL.value) && passwordValid;
        case 3:
          return this.countryL.valid && this.adresseL.valid && this.zipCodeL.valid && this.FemaleWorkforceL.valid && this.MaleWorkforceL.valid;
        case 4:
          return this.legalStatusL.valid && this.numCnssL.valid && this.taxNumL.valid ;
        case 5:
          return this.rneCopyL.valid && this.licenceCopyL.valid ;
        default: return true
      }
    }
    else if (this.isselected == "Restaurant") {
      switch (this.step) {
        case 2:
          const passwordValid = this.passwordHaveOrgR('special') && this.passwordHaveOrgR('lowercase') && this.passwordHaveOrgR('upercase') && this.passwordHaveOrgR('num');
          return this.legalNameR.valid && this.telephoneR.valid && this.emailR.valid && (this.confirmPasswordR.value == this.passwordR.value) && passwordValid;
        case 3:
          return this.countryR.valid && this.adresseR.valid && this.zipCodeR.valid && this.FemaleWorkforceR.valid && this.MaleWorkforceR.valid;
        case 4:
          return this.legalStatusR.valid && this.numCnssR.valid && this.taxNumR.valid ;
        case 5:
          return this.rneCopyR.valid && this.licenceCopyR.valid ;
        default: return true
      }
    }
  }
  
  get legalNameT() { return this.Form2Transport.get('legalName'); }
  get persAContactT() { return this.Form2Transport.get('persAContact'); }
  get telephoneT() { return this.Form2Transport.get('telephone'); }
  get emailT() { return this.Form2Transport.get('email'); }
  get passwordT() { return this.Form2Transport.get('password'); }
  get confirmPasswordT() { return this.Form2Transport.get('confirmPassword'); }
  get gouvernorateT() { return this.Form3Transport.get('gouvernorate'); }
  get countryT() { return this.Form3Transport.get('country'); }
  get adresseT() { return this.Form3Transport.get('adresse'); }
  get zipCodeT() { return this.Form3Transport.get('zipCode'); }
  get MaleWorkforceT() { return this.Form3Transport.get('MaleWorkforce'); }
  get FemaleWorkforceT() { return this.Form3Transport.get('FemaleWorkforce'); }
  get legalStatusT() { return this.Form4Transport.get('legalStatus'); }
  get basicActivityT() { return this.Form4Transport.get('basicActivity'); }
  get taxNumT() { return this.Form4Transport.get('taxNum'); }
  get numCnssT() { return this.Form4Transport.get('numCnss'); }
  get rneCopyT() { return this.Form5Transport.get('rneCopy'); }
  get cadTouristTraanspT() { return this.Form5Transport.get('cadTouristTraansp'); }
  get licenceCopyT() { return this.Form5Transport.get('licenceCopy'); }

  get legalNameL() { return this.Form2Lodging.get('legalName'); }
  get persAContactL() { return this.Form2Lodging.get('persAContact'); }
  get telephoneL() { return this.Form2Lodging.get('telephone'); }
  get emailL() { return this.Form2Lodging.get('email'); }
  get passwordL() { return this.Form2Lodging.get('password'); }
  get confirmPasswordL() { return this.Form2Lodging.get('confirmPassword'); }
  get gouvernorateL() { return this.Form3Lodging.get('gouvernorate'); }
  get countryL() { return this.Form3Lodging.get('country'); }
  get adresseL() { return this.Form3Lodging.get('adresse'); }
  get zipCodeL() { return this.Form3Lodging.get('zipCode'); }
  get MaleWorkforceL() { return this.Form3Lodging.get('MaleWorkforce'); }
  get FemaleWorkforceL() { return this.Form3Lodging.get('FemaleWorkforce'); }
  get legalStatusL() { return this.Form4Lodging.get('legalStatus'); }
  get basicActivityL() { return this.Form4Lodging.get('basicActivity'); }
  get taxNumL() { return this.Form4Lodging.get('taxNum'); }
  get numCnssL() { return this.Form4Lodging.get('numCnss'); }
  get rneCopyL() { return this.Form5Lodging.get('rneCopy'); }
  get licenceCopyL() { return this.Form5Lodging.get('licenceCopy'); }

  get legalNameR() { return this.Form2Restaurant.get('legalName'); }
  get persAContactR() { return this.Form2Restaurant.get('persAContact'); }
  get telephoneR() { return this.Form2Restaurant.get('telephone'); }
  get emailR() { return this.Form2Restaurant.get('email'); }
  get passwordR() { return this.Form2Restaurant.get('password'); }
  get confirmPasswordR() { return this.Form2Restaurant.get('confirmPassword'); }
  get gouvernorateR() { return this.Form3Restaurant.get('gouvernorate'); }
  get countryR() { return this.Form3Restaurant.get('country'); }
  get adresseR() { return this.Form3Restaurant.get('adresse'); }
  get zipCodeR() { return this.Form3Restaurant.get('zipCode'); }
  get MaleWorkforceR() { return this.Form3Restaurant.get('MaleWorkforce'); }
  get FemaleWorkforceR() { return this.Form3Restaurant.get('FemaleWorkforce'); }
  get legalStatusR() { return this.Form4Restaurant.get('legalStatus'); }
  get basicActivityR() { return this.Form4Restaurant.get('basicActivity'); }
  get restaurantTypeR() { return this.Form4Restaurant.get('restaurantType'); }
  get restaurantSpecialityR() { return this.Form4Restaurant.get('restaurantSpeciality'); }
  get taxNumR() { return this.Form4Restaurant.get('taxNum'); }
  get numCnssR() { return this.Form4Restaurant.get('numCnss'); }
  get rneCopyR() { return this.Form5Restaurant.get('rneCopy'); }
  get licenceCopyR() { return this.Form5Restaurant.get('licenceCopy'); }

}
