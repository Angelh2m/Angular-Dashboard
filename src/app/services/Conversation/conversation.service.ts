import { Injectable } from '@angular/core';

import { Subject } from 'rxjs';




@Injectable({
  providedIn: 'root'
})
export class ConversationService {

  public cardActive: Subject<any>;

  constructor() { }
}
