import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './components/login/login.component';
import { SignupComponent } from './components/signup/signup.component';
import { AloginComponent } from './components/alogin/alogin.component';
import { AregisterComponent } from './components/aregister/aregister.component';
import { AprovidersComponent } from './components/aproviders/aproviders.component';
import { EoptionsComponent } from './components/eoptions/eoptions.component';
import { EselectionComponent } from './components/eselection/eselection.component';
import { EsummaryComponent } from './components/esummary/esummary.component';
import { AportalComponent } from './components/aportal/aportal.component';
import { EportalComponent } from './components/eportal/eportal.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    SignupComponent,
    AloginComponent,
    AregisterComponent,
    AprovidersComponent,
    EoptionsComponent,
    EselectionComponent,
    EsummaryComponent,
    AportalComponent,
    EportalComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
