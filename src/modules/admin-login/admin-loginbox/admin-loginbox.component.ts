import { Component } from '@angular/core';
import { LoginService } from '../../../services/login.service';
import { Router} from '@angular/router';

@Component({
    selector: 'app-admin-loginbox',
    templateUrl: './admin-loginbox.component.html',
    styleUrls: ['./admin-loginbox.component.css']
})
export class AdminLoginComponent {
    private errorLog: String = '';
    constructor(private loginService: LoginService,
        private router: Router) {}
    adminLogin (username, password) {
        if (username === 'admin' && password === 'admin') {
          this.router.navigate(['/dashboard']);
        }
    }
}
