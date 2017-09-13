import { NgModule } from '@angular/core';

import { LoginComponent } from './loginbox/loginbox.component';
import { routing } from './login.module.route';

@NgModule({
  imports: [routing],
  declarations: [LoginComponent],
  providers: []
})
export class LoginModule {}
