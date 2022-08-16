import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router'; 
import { IndexComponent } from './index/index.component';
const routes: Routes = [
  
  {
    path: "index",
    component: IndexComponent,
    data: { title: "Login Page" },
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
