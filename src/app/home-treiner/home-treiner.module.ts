import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { HomeTreinerPageRoutingModule } from './home-treiner-routing.module';

import { HomeTreinerPage } from './home-treiner.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    HomeTreinerPageRoutingModule
  ],
  declarations: [HomeTreinerPage]
})
export class HomeTreinerPageModule {}
