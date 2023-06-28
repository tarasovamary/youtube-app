import { Component, EventEmitter, OnInit } from '@angular/core';
import { LoginService, OpenFiltersService, ShowResultsService } from '../../../core/index';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
  public name: string;
  public isLogged: boolean;
  public requestValue: string = '';
  public requestSearchEvent = new EventEmitter();
  public logoutEvent = new EventEmitter();

  constructor(private showResultsService: ShowResultsService,
              private openFiltersService: OpenFiltersService,
              private loginService: LoginService) {}

  ngOnInit(): void {
    this.loginService.isLogged$.subscribe((value) => this.isLogged = value);
    this.loginService.checkIfUserLogged();
    this.loginService.user$.subscribe((user) => this.name = user.name);
  }

  showFilterPanel(): void {
    this.openFiltersService.showFilterPanel();
  }

  setRequestValue(inputValue: string): void {
    this.requestValue = inputValue;
    this.showResultsService.setRequestValue(inputValue);
  }

  logoutUser(): void {
    this.loginService.logout();
    this.loginService.checkIfUserLogged();
    }

  }