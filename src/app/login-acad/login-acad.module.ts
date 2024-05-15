import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { LoginAcadPageRoutingModule } from './login-acad-routing.module';

import { LoginAcadPage } from './login-acad.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    LoginAcadPageRoutingModule
  ],
  declarations: [LoginAcadPage]
})
export class LoginAcadPageModule {}
