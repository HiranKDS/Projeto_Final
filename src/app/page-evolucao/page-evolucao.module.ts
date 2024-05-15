import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PageEvolucaoPageRoutingModule } from './page-evolucao-routing.module';

import { PageEvolucaoPage } from './page-evolucao.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PageEvolucaoPageRoutingModule
  ],
  declarations: [PageEvolucaoPage]
})
export class PageEvolucaoPageModule {}
