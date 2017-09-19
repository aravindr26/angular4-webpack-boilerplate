import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';

export class AdminUser {
    username: string;
    password: string;
}

@Injectable()
export class LoginService {
    constructor(private http: Http) {}
    private headers = new Headers ({ 'Content-type': 'application/json'});
    private requestOptions = new RequestOptions({ headers: this.headers});

    private extractdata(res: Response) {
        const body = res.json();
        return body || {};
    }

    private handleError(error: any) {
        const errMsg = (error.message) ? error.message :
        error.status ? `${error.status} - ${error.statusText}` : 'Server error';
        return Observable.throw(errMsg);
    }

    saveUserDetails(userDetails) {
        return this.http.post('http://localhost:3000/userData', userDetails, this.requestOptions)
        .map(this.extractdata)
        .catch(this.handleError);
    }

    checkAdminLogin(): Observable<AdminUser> {
        return this.http.get('http://localhost:3000/admin')
        .map(this.extractdata)
        .catch(this.handleError);
    }
}
