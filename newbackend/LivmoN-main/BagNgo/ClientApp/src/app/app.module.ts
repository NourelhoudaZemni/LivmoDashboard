import { HttpClientModule } from '@angular/common/http';
import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { DashboardAdminComponent } from './Views/Admin/dashboard-admin/dashboard-admin.component';
import { NavMenuComponent } from './Views/nav-menu/nav-menu.component';
import { EmailConfirmationComponent } from './Views/Registration/Client/email-confirmation/email-confirmation.component';
import { ForgotPasswordComponent } from './Views/Registration/Client/forgot-password/forgot-password.component';
import { LoginClientComponent } from './Views/Registration/Client/login-client/login-client.component';
import { RegisterClientComponent } from './Views/Registration/Client/register-client/register-client.component';
import { ResetPasswordComponent } from './Views/Registration/Client/reset-password/reset-password.component';
import { RegisterCommercantComponent } from './Views/Registration/Commercant/register-commercant/register-commercant.component';
import { RegisterHostComponent } from './Views/Registration/Host/register-host/register-host.component';
import { HomeComponent } from './Views/home/home.component';
import { AppRoutingModule } from './app-routing.module';
import { FooterComponent } from './Views/footer/footer.component';
import { StepperComponent } from './Views/Components/stepper/stepper.component';
import { AddhostComponent } from './Views/Host/BecomeHost/addhost/addhost.component';
import {CarouselModule} from 'primeng/carousel';
import {RadioButtonModule} from 'primeng/radiobutton';
import {KeyFilterModule} from 'primeng/keyfilter';
import {PasswordModule} from 'primeng/password';
import { DividerModule } from "primeng/divider";
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {DropdownModule} from 'primeng/dropdown';
import {InputNumberModule} from 'primeng/inputnumber';
import { SteppercomComponent } from './Views/Components/steppercom/steppercom.component';
import { AddcommercantComponent } from './Views/Commercant/BecomeCommercant/addcommercant/addcommercant.component';
import { UsersDashbaordComponent } from './Views/home/users-dashbaord/users-dashbaord.component';
import { AddclientComponent } from './Views/Client/addclient/addclient.component';
import { LoginUsersComponent } from './Views/Components/login-users/login-users.component';
import { StepperexpComponent } from './Views/Components/stepperexp/stepperexp.component';
import { AddExperienceComponent } from './Views/Experience/add-experience/add-experience.component';
import {DialogModule} from 'primeng/dialog';
import {ButtonModule} from 'primeng/button';
import { AddPhotosExpComponent } from './Views/Experience/add-photos-exp/add-photos-exp.component';
import {InputTextareaModule} from 'primeng/inputtextarea';
import { AddActivityComponent } from './Views/Experience/add-activity/add-activity.component';
import {CalendarModule} from 'primeng/calendar';
import {MessageModule} from 'primeng/message';

@NgModule({
  declarations: [
    AppComponent,
    NavMenuComponent,
    LoginClientComponent,
    DashboardAdminComponent,
    RegisterClientComponent,
    RegisterCommercantComponent,
    RegisterHostComponent,
    ForgotPasswordComponent,
    ResetPasswordComponent,
    EmailConfirmationComponent,
    HomeComponent,
    FooterComponent,
    StepperComponent,
    AddhostComponent,
    SteppercomComponent,
    AddcommercantComponent,
    UsersDashbaordComponent,
    AddclientComponent,
    LoginUsersComponent,
    StepperexpComponent,
    AddExperienceComponent,
    AddPhotosExpComponent,
    AddActivityComponent,
  ],
  imports: [
    BrowserModule.withServerTransition({ appId: "ng-cli-universal" }),
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    CarouselModule,
    RadioButtonModule,
    KeyFilterModule,
    PasswordModule,
    DividerModule,
    BrowserAnimationsModule,
    DropdownModule,
    InputTextareaModule,
    InputNumberModule,
    DialogModule,
    ButtonModule,
    CalendarModule,
		MessageModule,
    AppRoutingModule
  ],
  providers: [
    //  { provide: HTTP_INTERCEPTORS, useClass: AuthorizeInterceptor, multi: true }
    /* {
    provide: HTTP_INTERCEPTORS,
    useClass: JwtInterceptorService,
  }*/
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  bootstrap: [AppComponent],
})
export class AppModule {}
