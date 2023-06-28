import { Component, Input, Output, EventEmitter, ChangeDetectionStrategy } from '@angular/core';
import { IUser } from '../../../../core/index';
import {FormBuilder, Validators} from '@angular/forms';
import { createPasswordValidator } from '../../../../shared/index';


@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class LoginFormComponent {

  public loginForm = this.fb.group({
    email: ['', {
      validators: [Validators.required, Validators.email],
    }],
    password: ['', {
      validators: [
        Validators.required, 
        Validators.minLength(8),
        createPasswordValidator()
      ]
    }]
  })

  public isHidden: boolean = true;

  @Output() public loginEvent = new EventEmitter();
  
  constructor(private fb: FormBuilder) {}

  loginUser(): void {
    const user: IUser = {
      name: this.loginForm.value.email!,
      password: this.loginForm.value.password!,
    };
    this.loginEvent.emit(user);
  }

  handlePassVisibility() {
    this.isHidden = !this.isHidden;
  }

}
