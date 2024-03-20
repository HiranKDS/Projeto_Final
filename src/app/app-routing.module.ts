import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { LoginPage } from './login/login.page';
import { PageTreinosPage } from './page-treinos/page-treinos.page';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'login',
    loadChildren: () => import('./login/login.module').then( m => m.LoginPageModule)
  },
  {
    path: 'telalogin',
    component: LoginPage
  },
  {
    path: 'page-treinos',
    loadChildren: () => import('./page-treinos/page-treinos.module').then( m => m.PageTreinosPageModule)
  },

  { 
    path: 'page-treinos', 
    component: PageTreinosPage },
  


];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
