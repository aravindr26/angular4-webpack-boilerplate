import { NgModule } from '@angular/core';
import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LoginComponent } from './loginbox/loginbox.component';

const routes: Routes = [
  { path: '', component: LoginComponent }
];

export const routing: ModuleWithProviders = RouterModule.forChild(routes);

