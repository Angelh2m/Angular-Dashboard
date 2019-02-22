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
    return this._http.get(`http://localhost:4000/api/consultation/${id}`).pipe(
      map((resp): any => {
        this.messages = { ...{ [id]: resp } }
        return this.messages
      })
    )
  }

  submitQuestion(payload) {
    return this._http.post(`http://localhost:4000/api/consultation`, payload).pipe()
  }

  submitResponse(payload) {
    return this._http.put(`http://localhost:4000/api/consultation`, payload)
  }


}
