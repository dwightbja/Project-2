import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
<<<<<<< HEAD
import { LoginComponent } from '../Components/login/login.component';
=======
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
>>>>>>> b50f744bfdbaaca4f089b9333a9fde5adbad15da

@NgModule({
  declarations: [
    AppComponent,
<<<<<<< HEAD
    LoginComponent
=======
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
>>>>>>> b50f744bfdbaaca4f089b9333a9fde5adbad15da
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
