import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  themesToShow = 5
  constructor() {
    const isPhone = window.innerWidth < 500;
   }
  themes = [{
    id: 1,
    title: 'Culture',
    image: 'assets/img/Culture.png'
  },
  {
    id: 2,

    title: 'Event',
    image: 'assets/img/Event.png'
  },
  {
    id: 3,

    title: 'Health',
    image: 'assets/img/Health.png'
  },
  {
    id: 4,

    title: 'Seaside',
    image: 'assets/img/Seaside.png'
  },
  {
    id: 5,

    title: 'Seaside',
    image: 'assets/img/Seaside.png'
  },
  {
    id: 6,

    title: 'Seaside',
    image: 'assets/img/Seaside.png'
  },
  {
    id: 7,

    title: 'Seaside',
    image: 'assets/img/Seaside.png'
  },
]
  ngOnInit(): void {
  }

}
