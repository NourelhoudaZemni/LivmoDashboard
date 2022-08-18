import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {

  PreventedRoutes :any = ["addHost","addCommercant","LoginUsers","AddExperience","addClient"]
  constructor() { }
  showFooter :any = true

  ngOnInit(): void {
    this.PreventedRoutes.forEach(route => {   
      if(location.pathname.includes(route))
      this.showFooter = false
    });
  }
}
