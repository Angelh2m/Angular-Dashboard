import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Router } from '@angular/router';
import { map } from 'rxjs/internal/operators/map';


@Injectable({
  providedIn: 'root'
})
export class ConversationService {

  constructor(private _http: HttpClient, private router: Router) { }

  messages = {};

  getConversation(id) {
    // const headers = new HttpHeaders({ "authorization": "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjVjNWRkMWRjYzIxYmI3M2YzYjk2ZDRkOSIsIm5hbWUiOiJVc2VybmFtZSIsImF2YXRhciI6Ii8vd3d3LmdyYXZhdGFyLmNvbS9hdmF0YXIvYTMwMTIwNjRlYTcwYWZhOTM1MWU4MGU0YTYyYjVkY2I_cz0yMDAmcj1wZyZkPW1tIiwiaWF0IjoxNTUwMDk5NDQxLCJleHAiOjE1NTAxMjEwNDF9.brNduqo8kBys_xCaD16UpmEDFRh6E-Lmwy6em6aXU_8" })
    return this._http.get(`http://localhost:4000/api/consultation/${id}`).pipe(
      map((resp): any => {
        this.messages = { ...{ [id]: resp }, ...this.messages }
        return this.messages
      })
    )
  }

  submitQuestion(payload) {
    const headers = new HttpHeaders({ "authorization": "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjVjNWRkMWRjYzIxYmI3M2YzYjk2ZDRkOSIsIm5hbWUiOiJVc2VybmFtZSIsImF2YXRhciI6Ii8vd3d3LmdyYXZhdGFyLmNvbS9hdmF0YXIvYTMwMTIwNjRlYTcwYWZhOTM1MWU4MGU0YTYyYjVkY2I_cz0yMDAmcj1wZyZkPW1tIiwiaWF0IjoxNTUwMTkzMzQ1LCJleHAiOjE1NTAyMTQ5NDV9.D-1rr4xvGwEpG0t2F9WbIbrSxd6hqZxLIxL_k2MUQ4s" })
    return this._http.post(`http://localhost:4000/api/consultation`, payload, { headers })
  }

  submitResponse(payload) {
    const headers = new HttpHeaders({ "authorization": "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjVjNWRkMWRjYzIxYmI3M2YzYjk2ZDRkOSIsIm5hbWUiOiJVc2VybmFtZSIsImF2YXRhciI6Ii8vd3d3LmdyYXZhdGFyLmNvbS9hdmF0YXIvYTMwMTIwNjRlYTcwYWZhOTM1MWU4MGU0YTYyYjVkY2I_cz0yMDAmcj1wZyZkPW1tIiwiaWF0IjoxNTUwMTkzMzQ1LCJleHAiOjE1NTAyMTQ5NDV9.D-1rr4xvGwEpG0t2F9WbIbrSxd6hqZxLIxL_k2MUQ4s" })
    return this._http.put(`http://localhost:4000/api/consultation`, payload, { headers })
  }


}
