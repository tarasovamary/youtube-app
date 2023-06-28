import { ChangeDetectionStrategy, Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class LoginComponent {
  @Input() public isLogged: boolean;
  @Input() public name: string;
  @Output() public logoutEvent = new EventEmitter();

  logoutUser(): void {
    this.logoutEvent.emit();
  }

}
