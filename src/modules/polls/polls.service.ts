import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';

@Injectable()
export class PollsService {
    constructor(private http: Http) {}

    public headers = new Headers({ 'Content-Type': 'application/json' });
    public options = new RequestOptions({ headers: this.headers });

    private extractdata(res: Response) {
        const body = res.json();
        return body || {};
    }

    private handleError(error: any) {
        const errMsg = (error.message) ? error.message :
        error.status ? `${error.status} - ${error.statusText}` : 'Server error';
        return Observable.throw(errMsg);
    }

    getPollList() {
        return this.http.get('http://localhost:3000/polls')
        .map(this.extractdata)
        .catch(this.handleError);
    }

    submitScore (data) {
        return this.http.post('http://localhost:3000/saveResult', data, this.options)
        .map(this.extractdata)
        .catch(this.handleError);
    }
}
