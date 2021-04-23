import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { Observable, Subscription } from 'rxjs';
import { reset, set } from 'src/app/redux/form/form.actions';
import { SingleSpaProps, singleSpaPropsSubject } from 'src/single-spa/single-spa-props';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent implements OnInit {

  data$: Observable<{ name: string, description: string }>;
  subscription: Subscription;
  singleSpaProps: SingleSpaProps;
  eventBus: any;

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
    this.subscription = singleSpaPropsSubject.subscribe(
      props => {
        this.singleSpaProps = props;
        this.eventBus = this.singleSpaProps['EventBus'];
        console.log('Props single spa app One', props);
      }
    );
  }

  sendData(): void {
    console.log(this.form);
    
    // REDUX
    //this.store.dispatch(set(this.form))
    console.log(this.eventBus);

    const callback = () => { console.log(`Hello, ${name}!`) };

    this.eventBus.emit({name:'msgFrmMicro1',data: this.form});
    this.router.navigate(['/main/app2', { }]);
  }

  setData(): void {
    this.store.dispatch(set({name: 'Random', description: 'Random Description'}))
  }

  resetData(): void {
    this.store.dispatch(reset());
  }

}
