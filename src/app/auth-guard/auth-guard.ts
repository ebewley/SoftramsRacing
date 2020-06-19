import { CanActivate, Router } from '@angular/router';
import { AppService } from '../app.service';
import { Injectable } from '@angular/core';

// ### BEGIN added by Eric (entire unit)
@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {

  //#region Constructor
  /**
   * Constructor
   * @param {Router} router Injected router service.
   */
  constructor(private appService: AppService, private router: Router) { }
  //#endregion

  //#region Methods
  /**
   * Returns whether the route can be activated.
   * @returns {boolean} True if route can be activated.
   */
  public canActivate(): boolean {

    // If a user has logged in, activate the path.
    //if (this.appService.username) {
    if (this.appService.username)
      return true;

    // Otherwise, redirect back to the landing page and return false.
    else {
      this.router.navigate(['/']);
      return false;
    }
  }
  //#endregion
}
// ### END added by Eric (entire unit)