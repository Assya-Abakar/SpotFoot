import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: 'home',
    loadComponent: () => import('./components/home/home.page').then((m) => m.HomePage),
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full',
  },
  {
    path: 'profile',
    loadComponent: () => import('./features/profil/profil.page').then( m => m.ProfilPage)
  },
  {
    path: 'chat',
    loadComponent: () => import('./features/chat/chat.page').then( m => m.ChatPage)
  },
  {
    path: 'spots',
    loadComponent: () => import('./features/spots/spots.page').then( m => m.SpotsPage)
  },
  {
    path: 'login',
    loadComponent: () => import('./login/login.page').then( m => m.LoginPage)
  },
];
