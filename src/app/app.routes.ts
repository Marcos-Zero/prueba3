import { Routes } from '@angular/router';
//import { ListaPage } from './pagina/lista/lista.page';

export const routes: Routes = [
  {
    path: 'home',
    loadComponent: () => import('./home/home.page').then((m) => m.HomePage),
  },
  {
    path: 'app-home',
    loadComponent: () => import('./home/home.page').then((m) => m.HomePage),
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full',
  },
  {
    path: 'lista',
    loadComponent: () => import('./pagina/lista/lista.page').then( m => m.ListaPage)
  },
  {
    path: 'app-lista',
    loadComponent: () => import('./pagina/lista/lista.page').then( m=> m.ListaPage)
      
   },
  
  {
    path: 'Viaje',
    loadComponent: () => import('./pagina/Destinos/Viaje.page').then( m => m.ViajePage)
  },
  {
    path: 'optimus-modal',
    loadComponent: () => import('./optimus-modal/optimus-modal.page').then( m => m.OptimusModalPage)
  },
]
