import { Component, OnInit } from '@angular/core';
import { AppService } from './app.service';

/**
 * Class supporting the global AppComponent for the application.
 */
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  //#region Variables & Constants
  /**
   * Reference-style application title.
   */
  title = 'softrams-racing';
  //#endregion

  //#region Constructor & Destructor
  /**
   * Constructor
   * 
   * @param {AppService} appService Injected reference to the appService which may be used to record global values for the life of the app execution.
   */
  constructor(private appService: AppService) { }
  //#endregion

  //#region Event Handlers
  /**
   * Initializes the component.
   */
  ngOnInit(): void {

    // Attempt to read the username from localstorage if no username is present.
    if (!this.appService.username || this.appService.username.length < 1) {
      this.appService.setUsername(localStorage.getItem('username'));
    }
  }
  //#endregion
}
