import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { LoginPage } from './login/login.page';
import { PageTreinosPage } from './page-treinos/page-treinos.page';
import { PageEvolucaoPage } from './page-evolucao/page-evolucao.page';
import { PageDietaPage } from './page-dieta/page-dieta.page';

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

    { 
      path: 'page-evolucao', 
      component: PageEvolucaoPage},


  {
    path: 'page-evolucao',
    loadChildren: () => import('./page-evolucao/page-evolucao.module').then( m => m.PageEvolucaoPageModule)
  },

  { 
    path: 'page-dieta', 
    component: PageDietaPage},
  
  {
    path: 'page-dieta',
    loadChildren: () => import('./page-dieta/page-dieta.module').then( m => m.PageDietaPageModule)
  },
  {
    path: 'cadastro',
    loadChildren: () => import('./cadastro/cadastro.module').then( m => m.CadastroPageModule)
  },
  {
    path: 'login-acad',
    loadChildren: () => import('./login-acad/login-acad.module').then( m => m.LoginAcadPageModule)
  },
  {
    path: 'home-treiner',
    loadChildren: () => import('./home-treiner/home-treiner.module').then( m => m.HomeTreinerPageModule)
  },
  {
    path: 'alunos',
    loadChildren: () => import('./alunos/alunos.module').then( m => m.AlunosPageModule)
  },
  


];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
