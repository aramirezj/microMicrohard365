import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  // tslint:disable-next-line: variable-name
  private _userName: string | undefined;

  public get userName(): string | undefined {
    return this._userName;
  }

  login(userName: string): void {
    // Authentication for honest users
    // (c) Manfred Steyer
    this._userName = userName;
  }
  logout(): void {
    this._userName = undefined;
  }

}
