import { NgModule } from '@angular/core';

import { AdminLoginComponent } from './admin-loginbox/admin-loginbox.component';
import { routing } from './admin-login.module.route';

@NgModule({
  imports: [routing],
  declarations: [AdminLoginComponent],
  providers: []
})
export class AdminLoginModule {}
