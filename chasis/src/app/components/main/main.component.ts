import { Component, OnInit } from '@angular/core';
import { registerApplication } from 'single-spa';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {

  constructor() {
    registerApplication({
      name: 'header',
      app: () => System.import('header'),
      activeWhen: '/'
    });

    registerApplication({
      name: 'footer',
      app: () => System.import('footer'),
      activeWhen: '/'
    });
  }

  ngOnInit(): void {
  }

}
