import { Routes } from '@angular/router';

export const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'home' },
  { path: 'home', loadComponent: () => import('./pages/home/home.component').then(m => m.HomeComponent) },
  { path: 'login', loadComponent: () => import('./pages/login/login.component').then(m => m.LoginComponent) },
  { path: 'about', loadComponent: () => import('./pages/about/about.component').then(m => m.AboutComponent) },

  // Rutas privadas (protegidas por guard más adelante)
  { path: 'dashboard', loadComponent: () => import('./pages/dashboard/dashboard.component').then(m => m.DashboardComponent) },
  { path: 'gallery',   loadComponent: () => import('./pages/gallery/gallery.component').then(m => m.GalleryComponent) },
  { path: 'crud',      loadComponent: () => import('./pages/crud/crud.component').then(m => m.CrudComponent) },
  { path: 'profile',   loadComponent: () => import('./pages/profile/profile.component').then(m => m.ProfileComponent) },

  { path: '**', redirectTo: 'home' }
];