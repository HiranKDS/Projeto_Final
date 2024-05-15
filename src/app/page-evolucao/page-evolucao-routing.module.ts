import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PageEvolucaoPage } from './page-evolucao.page';

const routes: Routes = [
  {
    path: '',
    component: PageEvolucaoPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PageEvolucaoPageRoutingModule {}
