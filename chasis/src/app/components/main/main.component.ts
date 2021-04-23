import { Component, OnInit } from '@angular/core';
import { registerApplication } from 'single-spa';
import EventBus from 'eventing-bus';
import { EventBusService } from '../../lib/event.service';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {

  constructor(private eventBus: EventBusService) {
    registerApplication({
      name: 'header',
      app: () => System.import('header'),
      activeWhen: '/',
      customProps: {
        EventBus: this.eventBus
      }
    });

    registerApplication({
      name: 'footer',
      app: () => System.import('footer'),
      activeWhen: '/',
      customProps: {
        EventBus: this.eventBus
      }
    });
  }

  ngOnInit(): void {
  }

}
