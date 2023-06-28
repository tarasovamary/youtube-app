import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor
} from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()
export class ApiInterceptor implements HttpInterceptor {

  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    const apiKey = 'AIzaSyB4GTNK5E3SKg7JJe8BxcfmyOfPMM4bEV8';
    const apiRequest = 'https://www.googleapis.com/youtube/v3';

    return next.handle(request.clone({
      url: `${apiRequest}/${request.url}`,
      setParams: {
        key: apiKey,
      },
    }),
    );
  }
}
