import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-compose-message',
  templateUrl: './compose-message.component.html',
  styleUrls: ['./compose-message.component.css'],
})
export class ComposeMessageComponent implements OnInit {
  details = '';
  message = '';
  sending = false;

  constructor(private router: Router) {}

  ngOnInit() {
    console.log('Activating Popup');
  }

  send() {
    this.sending = true;
    this.details = 'Sending message...';

    setTimeout(() => {
      this.sending = false;
      this.closePopup();
    }, 1000);
  }
  cancel() {
    this.closePopup();
  }
  closePopup() {
    //Providing a null value to the named outlet clears the content of the named outlet
    this.router.navigate([{ outlets: { popup: null } }]);
  }
}
