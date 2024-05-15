import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PageDietaPage } from './page-dieta.page';

const routes: Routes = [
  {
    path: '',
    component: PageDietaPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PageDietaPageRoutingModule {}
