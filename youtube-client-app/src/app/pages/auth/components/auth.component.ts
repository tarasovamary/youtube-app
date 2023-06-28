import { Component, EventEmitter } from '@angular/core';
import { IUser, LoginService  } from 'src/app/core/index';



@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.scss']
})
export class AuthComponent {

  public loginEvent = new EventEmitter();

  constructor(private loginService: LoginService) {}

  loginUser(user: IUser) {
    this.loginService.login(user);
    this.loginService.checkIfUserLogged();
  }
  
}
