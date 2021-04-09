import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { reset, set } from 'src/app/redux/form/form.actions';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent implements OnInit {

  data$: Observable<{ name: string, description: string }>;

  form: {
    name: string,
    description: string
  };

  constructor(private store: Store<{form: { name: string, description: string }}>, private router: Router) {
    this.data$ = store.select('form');
    this.data$.subscribe((x)=>{
      console.log('Subscribe!!');
      console.log(x);
      this.form = x;
    });
  }

  ngOnInit() {
  }

  sendData(): void {
    console.log(this.form);
    this.store.dispatch(set(this.form))
    this.router.navigate(['/main/app2', { }]);
  }

  setData(): void {
    this.store.dispatch(set({name: 'Random', description: 'Random Description'}))
  }

  resetData(): void {
    this.store.dispatch(reset());
  }

}
