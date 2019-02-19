
import { Injectable } from '@angular/core';
import { HttpInterceptor, HttpEvent, HttpHandler, HttpRequest, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { UserService } from '../../services/user/user.service';




@Injectable()
export class TokenInterceptor implements HttpInterceptor {
    constructor(private userService: UserService) { }
    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {

        let TOKEN = localStorage.getItem("Token");


        // let token: any = this.userService.userToken;
        // // If there is no token!
        // if (!token) { token = ''; }

        const headers = new HttpHeaders({
            'Authorization': TOKEN ? TOKEN.replace(/(")/g, "") : "",
        });

        const newRequest = req.clone({
            headers
        })

        return next.handle(newRequest);
    }
}