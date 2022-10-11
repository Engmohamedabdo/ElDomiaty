import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { SettingsRoutingModule } from './settings-routing.module';
import { SettingsComponent } from './settings.component';
import { ProfileComponent } from '../profile/profile.component';
import { CustomerServiceComponent } from '../customer-service/customer-service.component';
import { AboutUsComponent } from '../about-us/about-us.component';


@NgModule({
  declarations: [
    SettingsComponent,
    ProfileComponent,
    CustomerServiceComponent,
    AboutUsComponent,
  ],
  imports: [
    FormsModule,
    ReactiveFormsModule,
    CommonModule,
    SettingsRoutingModule
  ]
})
export class SettingsModule { }
