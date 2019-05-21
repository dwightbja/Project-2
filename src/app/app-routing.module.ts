import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from 'src/app/components/login/login.component';
import { SignupComponent } from 'src/app/components/signup/signup.component';
import { AloginComponent } from 'src/app/components/alogin/alogin.component';
import { AportalComponent } from 'src/app/components/aportal/aportal.component';
import { AregisterComponent } from 'src/app/components/aregister/aregister.component';
import { AprovidersComponent } from 'src/app/components/aproviders/aproviders.component';
import { EportalComponent } from 'src/app/components/eportal/eportal.component';

const routes: Routes = [
{
  path: '',
  component: LoginComponent
},
{
  path: 'signup',
  component: SignupComponent
},
{
  path: 'alogin',
  component: AloginComponent
},
{
  path: 'aportal',
  component: AportalComponent,
  children: [
    {
      path: 'aregister',
      component: AregisterComponent
    },
    {
      path: 'aproviders',
      component: AprovidersComponent
    }
  ]
},
{
  path: 'eportal',
  component: EportalComponent
}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
