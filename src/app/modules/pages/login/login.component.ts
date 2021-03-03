import { Component, OnInit } from '@angular/core';

import { take } from 'rxjs/operators';

import { AuthenticationService } from 'src/app/core';
import { IUser } from 'src/app/shared';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.less']
})
export class LoginComponent implements OnInit {

  public user: IUser;

  constructor(
    private readonly authService: AuthenticationService,
  ) { }

  public onAuthentication(): void {
    this.authService.login(this.user)
      .pipe(take(1))
      .subscribe(
        () => {
          console.log(' Deu certo ');
        }
      );
  }

  private initAttributes(): void {
    this.user = {
      email: '',
      password: '',
    };
  }

  public ngOnInit(): void {
    this.initAttributes();
  }

}
