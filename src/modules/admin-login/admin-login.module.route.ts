import { NgModule } from '@angular/core';
import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AdminLoginComponent } from './admin-loginbox/admin-loginbox.component';

const routes: Routes = [
  { path: '', component: AdminLoginComponent }
];

export const routing: ModuleWithProviders = RouterModule.forChild(routes);
