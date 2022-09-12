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
import { AllReservationsTransportComponent } from './Reservation/Transport/all-reservations-transport/all-reservations-transport.component';
 
 import { AllReservationsLodgingComponent } from './Reservation/Lodging/all-reservations-lodging/all-reservations-lodging.component';
 import { PaidReservationLodgingComponent } from './Reservation/Lodging/paid-reservation-lodging/paid-reservation-lodging.component';
import { ValidReservationLodgingComponent } from './Reservation/Lodging/valid-reservation-lodging/valid-reservation-lodging.component';
import { InvalidReservationLodgingComponent } from './Reservation/Lodging/invalid-reservation-lodging/invalid-reservation-lodging.component';
import { PendingReservationLodgingComponent } from './Reservation/Lodging/pending-reservation-lodging/pending-reservation-lodging.component';
import { AcceptedReservationsComponent } from './Reservation/Transport/accepted-reservations/accepted-reservations.component';
import { PendingReservationsComponent } from './Reservation/Transport/pending-reservations/pending-reservations.component';
import { InvalidReservationsComponent } from './Reservation/Transport/invalid-reservations/invalid-reservations.component';
import { PaidTransportReservationComponent } from './Reservation/Transport/paid-transport-reservation/paid-transport-reservation.component';
import { PaidFoodReservationComponent } from './Reservation/Food/paid-food-reservation/paid-food-reservation.component';
import { ValidFoodReservationComponent } from './Reservation/Food/valid-food-reservation/valid-food-reservation.component';
import { InvalidFoodReservationComponent } from './Reservation/Food/invalid-food-reservation/invalid-food-reservation.component';
import { PendingFoodReservationComponent } from './Reservation/Food/pending-food-reservation/pending-food-reservation.component';
import { AllFoodReservationComponent } from './Reservation/Food/all-food-reservation/all-food-reservation.component';
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
      {
        path: 'AllTransportReservations',
    
        component: AllReservationsTransportComponent
        
      },
      {
        path: 'AcceptedTransportReservations',
    
        component: AcceptedReservationsComponent
        
      },  
      {
        path: 'PendingTransportReservations',
    
        component: PendingReservationsComponent
        
      },  

      {
        path: 'InvalidTransportReservations',
    
        component: InvalidReservationsComponent
        
      }, 
      {
        path: 'PaidTransportReservations',
    
        component: PaidTransportReservationComponent
        
      },  
 
      {
        path: 'AllFoodReservations',
    
        component: AllFoodReservationComponent
        
      },
      {
        path: 'AllReservationsLodgingComponent',
    
        component: AllReservationsLodgingComponent
        
      },  

      {
        path: 'AcceptedLodgingReservations',
    
        component: ValidReservationLodgingComponent
        
      },  
      {
        path: 'PendingLodgingReservations',
    
        component: PendingReservationLodgingComponent
        
      },  

      {
        path: 'InvalidLodgingReservations',
    
        component: InvalidReservationLodgingComponent
        
      }, 
      {
        path: 'PaidLodgingReservations',
    
        component: PaidReservationLodgingComponent
        
      },  
 ///////////// 
{
  path: 'AcceptedFoodReservations',

  component: ValidFoodReservationComponent 
  
  
},  
{
  path: 'PendingFoodReservations',

  component: PendingFoodReservationComponent
  
},  

{
  path: 'InvalidFoodReservations',

  component: InvalidFoodReservationComponent
  
}, 
{
  path: 'PaidFoodReservations',

  component: PaidFoodReservationComponent
  
},  
      
    ]
  }
]

@NgModule({
  declarations: [ 
     
    ValidFoodReservationComponent, PendingFoodReservationComponent, InvalidFoodReservationComponent, PaidFoodReservationComponent,
    AllFoodReservationComponent,

    PendingReservationsComponent, AcceptedReservationsComponent, PaidTransportReservationComponent, InvalidReservationsComponent,

    AllReservationsTransportComponent,
    
    
    
    AllReservationsLodgingComponent, PendingReservationLodgingComponent, ValidReservationLodgingComponent,
    InvalidReservationLodgingComponent,
    PaidReservationLodgingComponent,
    TablesComponent, NgxDatatableComponent, DataTableComponent, HostComponent, HostindividualComponent, HostOrganisationComponent, VerifiedHostComponent, EnAttenteHostComponent, EnAttenteMerchantComponent, AllExperiencesComponent, AllTransportComponent, AllLodgingComponent, AllFoodComponent, PaidReservationLodgingComponent, ValidReservationLodgingComponent, InvalidReservationLodgingComponent, PendingReservationLodgingComponent, PaidTransportReservationComponent, PaidFoodReservationComponent, ValidFoodReservationComponent, InvalidFoodReservationComponent, PendingFoodReservationComponent ],
  imports: [  
    SweetAlert2Module.forRoot(),
    AngularCropperjsModule,
    CarouselModule,
    CommonModule,
    [RouterModule.forChild(routes)],
    NgxDatatableModule
  ],
  exports: [RouterModule]
})
export class TablesModule { }
