import { Injectable } from '@angular/core';
import { Observable, of, from } from 'rxjs';
import { Crisis } from './crisis';
import { CRISES } from './mock-crises';
import { MessageService } from './message.service';

@Injectable({
  providedIn: 'root',
})
export class CrisisService {
  constructor(private messageService: MessageService) {}

  getCrises(): Observable<Crisis[]> {
    // If we use from operator(Rxjs), it will emit all values from array in sequence.
    // Of operator sends the array itself as Observable
    const crises = of(CRISES);
    console.log('Of Crisis =>', crises);
    console.log('From Crisis =>', from(CRISES));
    this.messageService.add('CrisisService: fetched Crisis');
    return crises;
  }
  getCrisis(id: string): Observable<Crisis> {
    const crisis = CRISES.find((x) => x.id === Number(id));
    return of(crisis);
  }
}
