import { Injectable } from '@angular/core';

import { Subject, } from 'rxjs';

import { map } from 'rxjs/operators';

import { Router } from '@angular/router';
import { HttpClient, HttpHeaders } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class UserService {

  public userToken = new Subject<any>();
  public userData = new Subject<any>();
  public loggedUser: any = {};
  public isUserLoaded = false;

  constructor(private _http: HttpClient) {
    let token = localStorage.getItem("Token");
    this.userToken.next({ token });

  }

  getUserProfile() {

    // const headers = new HttpHeaders({ "authorization": "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjVjNWRkMWRjYzIxYmI3M2YzYjk2ZDRkOSIsIm5hbWUiOiJVc2VybmFtZSIsImF2YXRhciI6Ii8vd3d3LmdyYXZhdGFyLmNvbS9hdmF0YXIvYTMwMTIwNjRlYTcwYWZhOTM1MWU4MGU0YTYyYjVkY2I_cz0yMDAmcj1wZyZkPW1tIiwiaWF0IjoxNTUwNDM2NzEzLCJleHAiOjE1NTA0NTgzMTN9.qPJcC-bkN_kk1oKuwJDWNfbqdTcDM5dQ3mhoYi4GUIk" })

    return this._http.get("http://localhost:4000/api/user").pipe(
      map((resp): any => {
        console.warn("USER", resp);
        this.userData.next(resp)
        this.loggedUser = resp
        this.isUserLoaded = true;
        return resp
      })
    )
  }

  login(credentials) {
    return this._http.post("http://localhost:4000/api/auth", credentials).pipe(
      map((resp: any) => {
        if (resp.success) { this.userToken.next({ token: resp.token }) }
        localStorage.setItem("Token", resp.token)
        console.warn(resp);
        return resp
      })
    )
  }


}
