import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { forkJoin, from } from 'rxjs';
import { AuthService } from 'src/app/Services/Auth.service';
import { ExperienceService } from 'src/app/Services/experience.service';
import { HttpService } from 'src/app/Services/Http/http.service';
import { SelectItem } from 'primeng/api';

interface DateTp {
  name: string
}
interface Season {
  name: string
}


@Component({
  selector: 'app-add-experience',
  templateUrl: './add-experience.component.html',
  styleUrls: ['./add-experience.component.css']
})
export class AddExperienceComponent implements OnInit {
  labels = ['Your Idea', 'Essential Information', 'Activity Page', 'Servies', 'Participation Terms']
  isselected = "individual"
  step = 1
  expPictures = []
  steplength = 5;
  value15: number;
  spotsValue: number = 1;
  displayBasic: boolean;
  displayActivity: boolean;
  autoResize: boolean = true;
  activities = []
  SelectedDate: DateTp;
  dateType: DateTp[];
  SelectedSeason: Season;
  SeasonType: Season[];

  Form1Experience: FormGroup
  Form2Experience: FormGroup
  Form5Experience: FormGroup
  AddActivity: FormGroup
  constructor(private fb: FormBuilder, private http: HttpService,
    private route: Router,
    private experienceService: ExperienceService) {
  }

  ngOnInit() {
    this.SetupFormControl()
    this.getDateType()
    this.getSeason()
  }
  getDateType() {
    this.dateType = [
      { name: 'New York' },
      { name: 'Rome' },
      { name: 'London' },
      { name: 'Istanbul' },
      { name: 'Paris' }
    ];
  }
  getSeason() {
    this.SeasonType = [
      { name: 'Summer' },
      { name: 'Winter' },
      { name: 'Spring' },
      { name: 'Autumn' },
    ];
  }
  getlabels() {
    switch (this.isselected) {
      case 'individual':
        return ['Your Idea', 'Essential Information', 'Activity Page', 'Servies', 'Participation Terms']
      case 'organisation':
        return ['Your Idea', 'Essential Information', 'Activity Page', 'Servies', 'Participation Terms']
      default:
        break;
    }
  }
  SetupFormControl() {
    this.AddActivity = this.fb.group({
      "title": ['', Validators.required],
      "description": [null, Validators.required],
      "endDate": [new Date(), Validators.required],
      "startDate": [new Date(), Validators.required],
    })
    this.Form1Experience = this.fb.group({
      "title": ['', Validators.required],
      "theme": ['', Validators.required],
      "location": ['', Validators.required],
      "price": ['', Validators.required],
      "priceUnit": ['', Validators.required],
      "spots": ['', Validators.required],
      "mapLocation": ['', Validators.required],
      "subTheme": ['', Validators.required],

    })
    this.Form2Experience = this.fb.group({
      "datType": ['', Validators.required],
      "season": ['', Validators.required],
      "description": ['', Validators.required],

    })
    this.Form5Experience = this.fb.group({
      "minAge": ['', Validators.required],
      "petsAllowed": [false, Validators.required],
      "otherCritics": ['', Validators.required],

    })
  }

  get titleAct() { return this.AddActivity.get('title'); }

  get datType() { return this.Form2Experience.get('datType'); }
  get season() { return this.Form2Experience.get('season'); }
  get description() { return this.Form2Experience.get('description'); }
  get minAge() { return this.Form5Experience.get('minAge'); }
  get petsAllowed() { return this.Form5Experience.get('petsAllowed'); }
  get otherCritics() { return this.Form5Experience.get('otherCritics'); }

  get title() { return this.Form1Experience.get('title'); }
  get theme() { return this.Form1Experience.get('theme'); }
  get location() { return this.Form1Experience.get('location'); }
  get price() { return this.Form1Experience.get('price'); }
  get priceUnit() { return this.Form1Experience.get('priceUnit'); }
  get spots() { return this.Form1Experience.get('spots'); }
  get subTheme() { return this.Form1Experience.get('subTheme'); }
  get mapLocation() { return this.Form1Experience.get('mapLocation'); }

  switchCase: boolean = false;
  toggleButton() {
    this.switchCase = !this.switchCase;
  }
  switchCase2: boolean = false;
  toggleButton2() {
    this.switchCase2 = !this.switchCase2;
  }
  switchCase3: boolean = false;
  toggleButton3() {
    this.switchCase3 = !this.switchCase3;
  }
  showBasicDialog2() {
    this.displayBasic = true;
  }
  showActivity() {
    this.displayActivity = true;
  }
  addActivity() {
    this.activities.push(this.AddActivity.value)
    console.log(this.AddActivity)
    this.AddActivity = this.fb.group({
      "title": ['', Validators.required],
      "description": [null, Validators.required],
      "endDate": [new Date(), Validators.required],
      "startDate": [new Date(), Validators.required],
    })
    this.displayActivity = false
  }
  deleteActivity(activity) {
    this.activities = this.activities.filter(e => e.title !== activity.title)
  }


  AddFullExperience() {
    //Add The experience     
    //Get the experience ID 
    //Post Experience iD to Activity as a foreign key
    //Add The Activity List
    var data = { ...this.Form1Experience.value, ...this.Form2Experience.value, theme: this.Form1Experience.value.theme.name, ...this.Form5Experience.value }
    console.log(data);
    data.theme = this.Form1Experience.value.theme.Name
    data.subTheme = this.Form1Experience.value.subTheme.Name
    data.season = this.SelectedSeason.name
    data.datType = this.Form2Experience.value.datType.Name
    
    this.experienceService.SaveExperience(localStorage.getItem('ID'), data).subscribe({
      next: (exp: any) => {
        const obsArray = []
        const expImageArray = []
        this.activities.forEach(activity => {
          obsArray.push(this.experienceService.SaveActivity(exp.experienceId, activity))
          // adding activity images
        })
        forkJoin(obsArray).subscribe()
        this.expPictures.forEach(img => {
          expImageArray.push(this.experienceService.SaveExpImg(exp.experienceId, img.file))
        })
        forkJoin(expImageArray).subscribe()
      },
      error: () => {

      }

    })

  }
}
