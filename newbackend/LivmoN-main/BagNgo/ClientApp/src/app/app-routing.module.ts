import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuardGuard } from './Services/auth-guard.guard';
import { DashboardAdminComponent } from './Views/Admin/dashboard-admin/dashboard-admin.component';
import { AddclientComponent } from './Views/Client/addclient/addclient.component';
import { AddcommercantComponent } from './Views/Commercant/BecomeCommercant/addcommercant/addcommercant.component';
import { LoginUsersComponent } from './Views/Components/login-users/login-users.component';
import { AddExperienceComponent } from './Views/Experience/add-experience/add-experience.component';
import { HomeComponent } from './Views/home/home.component';
import { UsersDashbaordComponent } from './Views/home/users-dashbaord/users-dashbaord.component';
import { AddhostComponent } from './Views/Host/BecomeHost/addhost/addhost.component';
import { EmailConfirmationComponent } from './Views/Registration/Client/email-confirmation/email-confirmation.component';
import { ForgotPasswordComponent } from './Views/Registration/Client/forgot-password/forgot-password.component';
import { LoginClientComponent } from './Views/Registration/Client/login-client/login-client.component';
import { RegisterClientComponent } from './Views/Registration/Client/register-client/register-client.component';
import { ResetPasswordComponent } from './Views/Registration/Client/reset-password/reset-password.component';
import { RegisterCommercantComponent } from './Views/Registration/Commercant/register-commercant/register-commercant.component';
import { RegisterHostComponent } from './Views/Registration/Host/register-host/register-host.component';

const routes: Routes = [
  { path: "", component: HomeComponent, pathMatch: "full" },

  {
    path: "login",
    component: LoginClientComponent,
    data: { title: "Login Page" },
  },
  {
    path: "Dashboard-admin",
    component: DashboardAdminComponent,
    data: { title: "Dashboard Admin" },
    canActivate: [AuthGuardGuard],
  },
  {
    path: 'forgotpassword',
    component: ForgotPasswordComponent,
    data: { title: "Forget Password" },
  },
  {
    path: 'resetpassword',
    component: ResetPasswordComponent,
    data: { title: "Reset Password" },
  },

  {
    path: 'emailconfirmation',
    component: EmailConfirmationComponent
  },


  {
    path: "register",
    component: RegisterClientComponent,
    data: { title: "Register Page" },
  },
  {
    path: "register-host",
    component: RegisterHostComponent,
    data: { title: "Register Host" },
  },
  {
    path: "register-commercant",
    component: RegisterCommercantComponent,
    data: { title: "Register Commercant" },
  },
  {
    path: "AddExperience",
    component: AddExperienceComponent,
    data: { title: "Add Experience" },
  },
  {
    path: "addClient",
    component: AddclientComponent,
    data: { title: "Register Client" },
  },
  {
    path: "addHost",
    component: AddhostComponent,
    data: { title: "Add host" },
  },
  {
    path: "addCommercant",
    component: AddcommercantComponent,
   // canActivate: [AuthGuardGuard],
    data: { title: "Add Commercant" },
  },
  {
    path: "Dashboard",
    component: UsersDashbaordComponent,
    data: { title: "Users" },
  },
  // If route does not exist : Home => Not found component
  { path: "homepage", component: HomeComponent },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
