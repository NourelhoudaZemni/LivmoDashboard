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
import { HostindividualComponent } from './hostindividual/hostindividual.component';
import { HostOrganisationComponent } from './host-organisation/host-organisation.component';
import { VerifiedHostComponent } from './verified-host/verified-host.component';
import { EnAttenteHostComponent } from './en-attente-host/en-attente-host.component';
import { EnAttenteMerchantComponent } from './en-attente-merchant/en-attente-merchant.component';
import { AllExperiencesComponent } from './all-experiences/all-experiences.component';
import { AllTransportComponent } from './all-transport/all-transport.component';
import { AllLodgingComponent } from './all-lodging/all-lodging.component';
import { AllFoodComponent } from './all-food/all-food.component';
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
    path: 'hostindiv',
    component: HostindividualComponent
  }
,

{
  path: 'hostorg',
  component: HostOrganisationComponent
}

      ,
      {
        path: 'HV',
        component: VerifiedHostComponent
      },
      {
        path: 'HWV',
        component: EnAttenteHostComponent
      },
      {
        path: 'merchantcomponent',
    
        component: DataTableComponent
        
      },
      {
        path: 'merchantEA',
    
        component: EnAttenteMerchantComponent
        
      },
      {
        path: 'Exp',
    
        component: AllExperiencesComponent
        
      }, 

      {
        path: 'AllFood',
    
        component: AllFoodComponent
        
      }, 
      {
        path: 'AllLodging',
    
        component: AllLodgingComponent
        
      }, 
      {
        path: 'AllTransport',
    
        component: AllTransportComponent
        
      }, 

      
    ]
  }
]

@NgModule({
  declarations: [TablesComponent, NgxDatatableComponent, DataTableComponent, HostComponent, HostindividualComponent, HostOrganisationComponent, VerifiedHostComponent, EnAttenteHostComponent, EnAttenteMerchantComponent, AllExperiencesComponent, AllTransportComponent, AllLodgingComponent, AllFoodComponent ],
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
