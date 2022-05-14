import { Injectable } from '@angular/core';

@Injectable()
export class MessageService {
  message: string[] = [];

  add(message: string) {
    this.message.push(message);
    console.log('Message Added =>', this.message);
  }
  clear() {
    this.message = [];
  }
}
