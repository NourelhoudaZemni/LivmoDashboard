import { Router } from "@angular/router";
import { Component, EventEmitter, HostListener, OnInit, Output } from '@angular/core';
import { AuthService } from "../../Services/Auth.service";

@Component({
  selector: "app-nav-menu",
  templateUrl: "./nav-menu.component.html",
  styleUrls: ["./nav-menu.component.css"],
})
export class NavMenuComponent implements OnInit {
  // isExpanded = false;
  // constructor(
  //   private activeRoute: Router,
  //   public AuthService: AuthService
  // ) {}
  // async ngOnInit() {
  // }
  // collapse() {
  //   this.isExpanded = false;
  // }

  // toggle() {
  //   this.isExpanded = !this.isExpanded;
  // }
  // route(path: any) {
  //   this.activeRoute.navigate([path])
  // }
  // logout(){
  //   this.AuthService.signOut()
  //   this.route('/login')
  // }

  showMenu = false;
  scrollingTop = false;
  open = false;
  prevScrollPoint = 0;
  mobileNavopen = false
  path = ''
  @Output('routeChange') routeChange: EventEmitter<any> = new EventEmitter();
  constructor(private router:Router) {
  
    
  }

  @HostListener('window:scroll', ['$event']) // for window scroll events
  onScroll(event: any) {
    const verticalOffset =
      window.pageYOffset ||
      document.documentElement.scrollTop ||
      document.body.scrollTop ||
      0;

    this.scrollingTop =
      this.prevScrollPoint > verticalOffset || this.prevScrollPoint == 0;
    if (this.open) this.open = false;
    if (this.mobileNavopen) this.mobileNavopen = false;
    this.prevScrollPoint = verticalOffset;
  }
  @HostListener('window:click', ['$event']) // for window scroll events
  blur(event: any) {
    if (this.open && !event.path.find((e: any) => e.localName === 'button'))
      this.open = false;
    if (this.mobileNavopen && !event.path.find((e: any) => e.localName === 'button'))
      this.mobileNavopen = false;
  }
  ngOnInit(): void {
    const paths = ['Angebote','Leistungen','Kontakt']
    this.path = paths.find((p:any) => location.pathname.indexOf(p) !== -1) || ''
  }
  goTo(index: any) {    
    if(this.path === '')
    document
      .getElementById(index)
      ?.scrollIntoView({ behavior: 'smooth', block: 'end', inline: 'nearest' });
    else{
      this.router.navigate([''],{queryParams:{goto:index}}).then(()=>{
        this.routeChange.emit();
        this.ngOnInit()
      })
      
    }
  }
  navigate(path:string){
    this.router.navigate([path]).then(()=>{
      this.routeChange.emit();

      this.ngOnInit()
    })
  }
}


