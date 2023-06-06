import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: 'home',
    loadComponent: () => import('./home/home.page').then((m) => m.HomePage),
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full',
  },
  {
    path: 'productos',
    loadComponent: () => import('./productos/productos.page').then( m => m.ProductosPage)
  },
  {
    path: 'restaurant',
    loadComponent: () => import('./restaurant/restaurant.page').then( m => m.RestaurantPage)
  },
  {
    path: 'restaurant-form',
    loadComponent: () => import('./restaurant-form/restaurant-form.page').then( m => m.RestaurantFormPage)
  },
  {
    path: 'login',
    loadComponent: () => import('./auth/login/login.page').then( m => m.LoginPage)
  },
  {
    path: 'register',
    loadComponent: () => import('./auth/register/register.page').then( m => m.RegisterPage)
  },
  {
    path: 'login-forgot-password',
    loadComponent: () => import('./auth/login-forgot-password/login-forgot-password.page').then( m => m.LoginForgotPasswordPage)
  }
];
