import { Injectable } from '@angular/core';

import { Subject, } from 'rxjs';

import { map } from 'rxjs/operators';

import { Router } from '@angular/router';
import { HttpClient, HttpHeaders } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class UserService {
  // public cardActive: Subject<any>;

  public userToken = new Subject<any>();
  loggedUser: any;

  constructor(private _http: HttpClient, private router: Router) {
    console.warn("SERVICE RAN");
    let token = localStorage.getItem("Token");
    console.warn(token);

    this.userToken.next({ token });
  }

  getUserProfile() {

    const headers = new HttpHeaders({ "authorization": "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjVjNWRkMWRjYzIxYmI3M2YzYjk2ZDRkOSIsIm5hbWUiOiJVc2VybmFtZSIsImF2YXRhciI6Ii8vd3d3LmdyYXZhdGFyLmNvbS9hdmF0YXIvYTMwMTIwNjRlYTcwYWZhOTM1MWU4MGU0YTYyYjVkY2I_cz0yMDAmcj1wZyZkPW1tIiwiaWF0IjoxNTUwNDM2NzEzLCJleHAiOjE1NTA0NTgzMTN9.qPJcC-bkN_kk1oKuwJDWNfbqdTcDM5dQ3mhoYi4GUIk" })

    return this._http.get("http://localhost:4000/api/user", { headers }).pipe(
      map((resp): any => {
        this.loggedUser = resp
        console.warn(this.loggedUser)
        return this.loggedUser
      })
    )
  }

  login(credentials) {

    return this._http.post("http://localhost:4000/api/auth", credentials).pipe(
      map((resp: any) => {
        if (resp.success) { this.userToken.next({ token: resp.token }) }
        localStorage.setItem("Token", resp.token)

        return this.loggedUser
      })
    )
  }


}
