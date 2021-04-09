import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent implements OnInit {

  data = {
    name: '',
    description: ''
  };

  constructor(private router: Router ) {}

  ngOnInit() {
  }

  sendData(): void {
    console.log(this.data);
    this.router.navigate(['/main/app2', { }]);
  }
}
