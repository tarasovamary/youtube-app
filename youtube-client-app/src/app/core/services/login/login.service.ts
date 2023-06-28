import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { BehaviorSubject, Observable } from 'rxjs';
import { IUser } from '../../store/index';
import { LocalStorageService } from '../index';

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  private user$$ = new BehaviorSubject({name: '', password: ''})
  private isLogged$$ = new BehaviorSubject(false);

  public user$: Observable<IUser>;
  public isLogged$: Observable<boolean>;

  constructor(private localStorageService: LocalStorageService, private router: Router) {
    this.user$ = this.user$$.asObservable();
    this.isLogged$ = this.isLogged$$.asObservable();
   }

  login(user: IUser): void {
    this.user$$.next(user);
    this.addUser(user.name, user.password);
    this.router.navigate(['/main']);
  }

  logout(): void {
    this.user$$.next({name: '', password: ''})
    this.removeUser();
    this.router.navigate(['/login']);
  }

  setAuthToken(): void {
    const token = Math.random().toString(16).substring(2);
    this.localStorageService.setItem('token', token)
  }

  checkIfUserLogged(): boolean {
    const checkToken = this.localStorageService.getItem('token');
    if(checkToken) {
      this.isLogged$$.next(true);
      return true;
    }
    this.isLogged$$.next(false);
    return false;
  }

  removeUser(): void  {
    this.localStorageService.removeItem('name');
    this.localStorageService.removeItem('password');
    this.localStorageService.removeItem('token');
  }

  addUser(name: string, password: string): void  {
    this.localStorageService.setItem('name', name);
    this.localStorageService.setItem('password', password);
    this.setAuthToken();
  }
}
