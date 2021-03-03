import {
  Component,
  OnInit,
  OnDestroy
} from '@angular/core';
import { Subscription } from 'rxjs';

import { AuthenticationService } from 'src/app/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.less']
})
export class AppComponent implements OnInit, OnDestroy {

  public title = 'routes';
  public displayNavBar = false;

  private subscriptions$: Array<Subscription> = [];

  constructor(
    private readonly authService: AuthenticationService,
  ) { }

  public ngOnInit(): void {
    const subscription = this.authService.displayNavBarEmitter.subscribe(
      (response: boolean) => {
        this.displayNavBar = response;
      }
    );

    this.subscriptions$.push(subscription);
  }

  public ngOnDestroy(): void {
    this.subscriptions$.forEach(subscription => subscription.unsubscribe());
  }
}
