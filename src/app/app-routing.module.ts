import { NgModule } from '@angular/core';
import { ModuleWithProviders } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: 'login', pathMatch: 'full' },
  { path: 'login', loadChildren: '../modules/user-login/login.module#LoginModule'},
  { path: 'admin', loadChildren: '../modules/admin-login/admin-login.module#AdminLoginModule'},
  { path: 'polls', loadChildren: '../modules/polls/poll.module#PollModule'},
  { path: 'dashboard', loadChildren: '../modules/poll-results/poll-results.module#PollResultModule'}
];

export const routing: ModuleWithProviders = RouterModule.forRoot(routes);
