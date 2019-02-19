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

  TOKEN = "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjVjNWRkMWRjYzIxYmI3M2YzYjk2ZDRkOSIsIm5hbWUiOiJVc2VybmFtZSIsImF2YXRhciI6Ii8vd3d3LmdyYXZhdGFyLmNvbS9hdmF0YXIvYTMwMTIwNjRlYTcwYWZhOTM1MWU4MGU0YTYyYjVkY2I_cz0yMDAmcj1wZyZkPW1tIiwiaWF0IjoxNTUwNDM2NzEzLCJleHAiOjE1NTA0NTgzMTN9.qPJcC-bkN_kk1oKuwJDWNfbqdTcDM5dQ3mhoYi4GUIk"

  getConversation(id) {
    const headers = new HttpHeaders({ "authorization": this.TOKEN })
    return this._http.get(`http://localhost:4000/api/consultation/${id}`).pipe(
      map((resp): any => {
        this.messages = { ...{ [id]: resp }, ...this.messages }
        return this.messages
      })
    )
  }

  submitQuestion(payload) {
    const headers = new HttpHeaders({ "authorization": this.TOKEN })
    return this._http.post(`http://localhost:4000/api/consultation`, payload, { headers })
  }

  submitResponse(payload) {
    const headers = new HttpHeaders({ "authorization": this.TOKEN })
    return this._http.put(`http://localhost:4000/api/consultation`, payload, { headers })
  }


}
