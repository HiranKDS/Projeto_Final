import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PageTreinosPageRoutingModule } from './page-treinos-routing.module';

import { PageTreinosPage } from './page-treinos.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PageTreinosPageRoutingModule
  ],
  declarations: [PageTreinosPage]
})
export class PageTreinosPageModule {}
