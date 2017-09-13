import { NgModule } from '@angular/core';
import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PollItemComponent } from './poll-item/poll-item.component';

const routes: Routes = [
  { path: '', component: PollItemComponent}
];

export const routing: ModuleWithProviders = RouterModule.forChild(routes);
