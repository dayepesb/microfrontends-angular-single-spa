import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { SingleSpaProps, singleSpaPropsSubject } from 'src/single-spa/single-spa-props';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  singleSpaProps: SingleSpaProps;
  subscription: Subscription;

  constructor() { }

  ngOnInit(): void {
    this.subscription = singleSpaPropsSubject.subscribe(
      props => {
        this.singleSpaProps = props;
        console.log('Props single spa Header', props);
      }
    );
  }

}
