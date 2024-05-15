import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeTreinerPage } from './home-treiner.page';

const routes: Routes = [
  {
    path: '',
    component: HomeTreinerPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class HomeTreinerPageRoutingModule {}
