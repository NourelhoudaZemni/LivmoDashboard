import { HttpClientModule } from '@angular/common/http';
import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { RouterModule } from '@angular/router';
import { IndexComponent } from './index/index.component'; 

@NgModule({
  declarations: [
   AppComponent,
  
    IndexComponent
  ],
  imports: [
    BrowserModule,
    RouterModule,
    FormsModule     ,
    HttpClientModule,
    FormsModule,
    RouterModule,
    ReactiveFormsModule,
   
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
