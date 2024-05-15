import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PageDietaPageRoutingModule } from './page-dieta-routing.module';

import { PageDietaPage } from './page-dieta.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PageDietaPageRoutingModule
  ],
  declarations: [PageDietaPage]
})
export class PageDietaPageModule {}
