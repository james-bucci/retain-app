import { Injectable } from '@angular/core'
import { Http, Headers, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/Rx';

const apiUrl: string = 'http://localhost:3500'

@Injectable()
export class ApiService {
    
    headers: Headers = new Headers({
        'Content-Type': 'application/json',
        'Accept': 'application/json'
    });

    constructor(
        private http: Http
    ) {}

    private checkForError(response: Response) : Response {
        if (response.status >= 200 && response.status < 300) {
            return response;
        } else {
            const error = new Error(response.statusText);
            error['response'] = response;
            console.error(error);
            throw error; 
        }
    }

    get(path: string) : Observable<any> {
        console.log('Getting:', path, apiUrl);
        return this.http.get(`${apiUrl}${path}`, this.headers)
            .map(res => this.checkForError(res))
            .catch(err => Observable.throw(err))
            .map(res => res.json());
    }


    post(path: string, body: any) : Observable<any> {
        return this.http.post(`${apiUrl}${path}`, JSON.stringify(body), {headers: this.headers})
            .map(res => this.checkForError(res))
            .catch(err => Observable.throw(err))
            .map(res => res.json());
    }

   delete(path: string) : Observable<any> {
        return this.http.delete(`${apiUrl}${path}`, this.headers)
            .map(res => this.checkForError(res))
            .catch(err => Observable.throw(err))
            .map(res => res.json());
    }


}