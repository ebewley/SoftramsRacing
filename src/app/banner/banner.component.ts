import { Component, OnInit } from '@angular/core';
import { AppService } from '../app.service';
import { Router } from '@angular/router';

/**
 * Component class for displaying the top-of-page banner.
 */
@Component({
  selector: 'app-banner',
  templateUrl: './banner.component.html',
  styleUrls: ['./banner.component.css']
})
export class BannerComponent implements OnInit {

  //#region Constructor & Destructor
  /**
   * Constructor
   * 
   * @param appService Injected reference to the app service for global and common values.
   * @param router Injected reference to the page router.
   */
  constructor(public appService: AppService, private router: Router) {}
  //#endregion

  // TODO: Consider removing the empty ngOnInit method below. (Intentionally leaving this TODO as an example of coding style.)
  //#region Event Handlers
  ngOnInit() {}
  //#endregion

  //#region Methods
  /**
   * Responds to the user clicking an link, button, or initiating an action which logs the user out of the app.
   */
  logout() {
    this.appService.username = '';
    localStorage.removeItem('username');
    this.router.navigate(['/login']);
  }
  //#endregion
}
