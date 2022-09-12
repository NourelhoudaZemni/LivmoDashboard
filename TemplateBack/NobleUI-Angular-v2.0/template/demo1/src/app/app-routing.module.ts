import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BaseComponent } from './views/layout/base/base.component';
import { AuthGuard } from './core/guard/auth.guard';
import { ErrorPageComponent } from './views/pages/error-page/error-page.component';


const routes: Routes = [
  { path:'auth', loadChildren: () => import('./views/pages/auth/auth.module').then(m => m.AuthModule) },
  {
    path: '',
    component: BaseComponent,
    canActivate: [AuthGuard],
    children: [
      {
        path: 'dashboard',
        loadChildren: () => import('./views/pages/dashboard/dashboard.module').then(m => m.DashboardModule)
      },
      {
        path: 'apps',
        loadChildren: () => import('./views/pages/apps/apps.module').then(m => m.AppsModule)
      },
    
    
      {
        path: 'tables',
        loadChildren: () => import('./views/pages/tables/tables.module').then(m => m.TablesModule)
    
         },
      { path: '', redirectTo: 'dashboard', pathMatch: 'full' }, 
      // { path: '**', redirectTo: 'dashboard', pathMatch: 'full' }
    ]
  },
   
 
  { path: '**', redirectTo: 'error', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { scrollPositionRestoration: 'top' })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
