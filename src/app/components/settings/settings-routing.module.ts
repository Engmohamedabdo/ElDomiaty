import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutUsComponent } from '../about-us/about-us.component';
import { CustomerServiceComponent } from '../customer-service/customer-service.component';
import { ProfileComponent } from '../profile/profile.component';
import { SettingsComponent } from './settings.component';

const routes: Routes = [
  { path: '', component: SettingsComponent, children: [
    { path: '', component: SettingsComponent },
    { path: 'profile', component: ProfileComponent },
    { path: 'customerService', component: CustomerServiceComponent },
    { path: 'aboutUs', component:AboutUsComponent},
  ]},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SettingsRoutingModule { }
