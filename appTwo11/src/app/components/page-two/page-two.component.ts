import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-page-two',
  templateUrl: './page-two.component.html',
  styleUrls: ['./page-two.component.scss']
})
export class PageTwoComponent implements OnInit {

  data$: Observable<{name: string, description: string}>

  constructor(private store: Store<{form: { name: string, description: string }}>, private router: Router) {
    this.data$ = store.select('form');
  }

  ngOnInit(): void {
  }

  returnBackPage() {
    this.router.navigate(['/main/app1', { }]);
  }

}
