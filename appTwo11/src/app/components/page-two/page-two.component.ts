import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { Observable, Subscription } from 'rxjs';
import { SingleSpaProps, singleSpaPropsSubject } from 'src/single-spa/single-spa-props';

@Component({
  selector: 'app-page-two',
  templateUrl: './page-two.component.html',
  styleUrls: ['./page-two.component.scss']
})
export class PageTwoComponent implements OnInit {

  data$: Observable<{name: string, description: string}>
  subscription: Subscription;
  singleSpaProps: SingleSpaProps;
  eventBus: any;
  msgFromMicro: any;

  data: any;

  constructor(private store: Store<{form: { name: string, description: string }}>, private router: Router, private ChangeDetectorRef:ChangeDetectorRef) {
    this.data$ = store.select('form');
  }

  ngOnInit(): void {
    this.subscription = singleSpaPropsSubject.subscribe(
      props => {
        this.singleSpaProps = props;
        this.eventBus = this.singleSpaProps['EventBus'];
        console.log('Props single spa app Two', props);
        this.lookForEvents();
      }
    );
  }

  lookForEvents(){
    console.log('Look for event');
    this.eventBus.on('msgFrmMicro1',(data)=>{
      this.msgFromMicro=data;
      this.data = data;
      console.log(this.msgFromMicro);
      this.ChangeDetectorRef.detectChanges();
    });
  }

  returnBackPage() {
    this.router.navigate(['/main/app1', { }]);
  }

}
