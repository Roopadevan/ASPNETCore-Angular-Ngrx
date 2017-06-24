import { Injectable } from '@angular/core';
import { Headers, Http, RequestOptionsArgs, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class HttpWrapperService {
    constructor(private http: Http) {

    }

    get = (url: string, options?: RequestOptionsArgs): Observable<Response> => {
        options = this.prepareOptions(options);

        return this.http.get(url, options);
    };

    post = (url: string, body: string, options?: RequestOptionsArgs): Observable<Response> => {
        options = this.prepareOptions(options);
        return this.http.post(url, body, options);
    };

    put = (url: string, body: string, options?: RequestOptionsArgs): Observable<Response> => {
        options = this.prepareOptions(options);
        return this.http.put(url, body, options);
    }

    delete = (url: string, options?: RequestOptionsArgs): Observable<Response> => {
        options = this.prepareOptions(options);
        return this.http.delete(url, options);
    }

    patch = (url: string, body: string, options?: RequestOptionsArgs): Observable<Response> => {
        options = this.prepareOptions(options);
        return this.http.patch(url, body, options);
    }

    private prepareOptions(options: RequestOptionsArgs): RequestOptionsArgs {

        options = options || {};

        if (!options.headers) {
            options.headers = new Headers();
        }

        options.headers.append('Content-Type', 'application/json');
        options.headers.append('Accept', 'application/json');

        return options;
    }
}