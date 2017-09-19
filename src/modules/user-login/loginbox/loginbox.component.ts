import { Component } from '@angular/core';
import { LoginService } from '../../../services/login.service';

@Component({
    selector: 'app-loginbox',
    templateUrl: './loginbox.component.html',
    styleUrls: ['./loginbox.component.css']
})
export class LoginComponent {
    private error: String = '';
    constructor(private loginservice: LoginService) {}
    submitUserDetails(name, email) {
        this.loginservice.saveUserDetails({name: name, email: email})
        .subscribe(
            data => {
                console.log(data);
            },
            error => this.error = error
        );
    }
}
