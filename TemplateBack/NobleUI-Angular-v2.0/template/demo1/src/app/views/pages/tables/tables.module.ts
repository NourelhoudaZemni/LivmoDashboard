import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';

import { TablesComponent } from './tables.component'; 
import { NgxDatatableComponent } from './clientcomponent/ngx-datatable.component';

import { NgxDatatableModule } from '@swimlane/ngx-datatable';  
import { HostComponent } from './hostcomponent/hostcomponent.component';
import { DataTableComponent } from './data-table/data-table.component';
import { CarouselModule } from 'ngx-owl-carousel-o';
import { AngularCropperjsModule } from 'angular-cropperjs';

import { SweetAlert2Module } from '@sweetalert2/ngx-sweetalert2';
const routes: Routes = [
  {
    path: '',
    component: TablesComponent,
    children: [
      {
        path: '',
        redirectTo: 'basic-table',
        pathMatch: 'full'
      },
     
      {
        path: 'ngx-datatable',
        component: NgxDatatableComponent
      },
      {
        path: 'hostcomponent',
        component: HostComponent
      }
   
      ,
      {
        path: 'merchantcomponent',
    
        component: DataTableComponent
        
      },
    ]
  }
]

@NgModule({
  declarations: [TablesComponent, NgxDatatableComponent, DataTableComponent, HostComponent ],
  imports: [  
    SweetAlert2Module.forRoot(),
    AngularCropperjsModule,
    CarouselModule,
    CommonModule,
    RouterModule.forChild(routes),
    NgxDatatableModule
  ]
})
export class TablesModule { }
