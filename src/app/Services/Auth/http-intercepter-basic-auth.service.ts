import { Injectable } from '@angular/core';
import { HttpInterceptor, HttpRequest, HttpHandler } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class HttpIntercepterBasicAuthService implements HttpInterceptor  {
  intercept(request: HttpRequest<any>, next:HttpHandler){
    let username='bharath';
    let password='password';
    let basicAuthHeaderString='Basic '+window.btoa(username+':'+password);
    console.log(basicAuthHeaderString);
    request=request.clone({
      setHeaders:{
        Authorization: basicAuthHeaderString
      }
    })
    return next.handle(request);
  }

  constructor() { }
}
