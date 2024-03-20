import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PageTreinosPage } from './page-treinos.page';

const routes: Routes = [
  {
    path: '',
    component: PageTreinosPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PageTreinosPageRoutingModule {}
