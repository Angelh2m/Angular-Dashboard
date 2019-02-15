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

  loggedUser: any;

  constructor(private _http: HttpClient, private router: Router) { }

  getUserProfile() {

    const headers = new HttpHeaders({ "authorization": "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjVjNWRkMWRjYzIxYmI3M2YzYjk2ZDRkOSIsIm5hbWUiOiJVc2VybmFtZSIsImF2YXRhciI6Ii8vd3d3LmdyYXZhdGFyLmNvbS9hdmF0YXIvYTMwMTIwNjRlYTcwYWZhOTM1MWU4MGU0YTYyYjVkY2I_cz0yMDAmcj1wZyZkPW1tIiwiaWF0IjoxNTUwMTkzMzQ1LCJleHAiOjE1NTAyMTQ5NDV9.D-1rr4xvGwEpG0t2F9WbIbrSxd6hqZxLIxL_k2MUQ4s" })

    return this._http.get("http://localhost:4000/api/user", { headers }).pipe(
      map((resp): any => {
        this.loggedUser = resp

        //         console.warn(this.loggedUser)
        return this.loggedUser
      })
    )
  }


}
