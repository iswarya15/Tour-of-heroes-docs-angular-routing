import { Component, VERSION } from '@angular/core';
import { ChildrenOutletContexts } from '@angular/router';
import { slideInAnimation } from './animation';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  animations: [slideInAnimation],
})
export class AppComponent {
  name = 'Angular ' + VERSION.major;
  constructor(private contexts: ChildrenOutletContexts) {}
  // getAnimationData() {
  //   return this.contexts.getContext('primary')?.route?.snapshot?.data?.[
  //     'animation'
  //   ];
  // }
}
