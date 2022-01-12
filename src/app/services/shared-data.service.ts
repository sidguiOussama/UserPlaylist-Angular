import { Injectable } from '@angular/core';
import {BehaviorSubject} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SharedDataService {

  private message = new BehaviorSubject('Default Message');
  sharedMessage = this.message.asObservable();

  constructor() { }

  nextMessage(message: any) {
    this.message.next(message);
  }
}
