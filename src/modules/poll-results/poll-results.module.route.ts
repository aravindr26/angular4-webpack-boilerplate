import { NgModule } from '@angular/core';
import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PollResultComponent } from './poll-result/poll-result.component';

const routes: Routes = [
  { path: '', component: PollResultComponent}
];

export const routing: ModuleWithProviders = RouterModule.forChild(routes);
