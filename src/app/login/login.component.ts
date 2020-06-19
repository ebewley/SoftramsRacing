import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AppService } from '../app.service';

/**
 * Component class for the login process.
 */
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  //#region Variables & Constants
  loginForm: FormGroup;
  //#endregion

  //#region Constructor & Destructor
  /**
   * Constructor
   * 
   * @param fb Injected reference to the form builder.
   * @param router Injected reference to the page router.
   * @param appService Injected reference to the app service of common values and methods.
   */
  constructor(private fb: FormBuilder, private router: Router, private appService: AppService) { }
  //#endregion

  //#region Event Handlers
  /**
   * Performs functionality to initialize the component.
   */
  ngOnInit() {

    // TODO:  Why not move these simple, always applicable validators to the template?

    // Apply validators to the form controls.
    this.loginForm = this.fb.group({
      username: new FormControl('', Validators.required),
      password: new FormControl('', Validators.required)
    });
  }
  //#endregion

  //#region Methods
  /**
   * Responds to the user clicking the Login button.
   */
  login() {
    localStorage.setItem('username', this.loginForm.value.username);
    this.appService.setUsername(this.loginForm.value.username);
    this.router.navigate(['/members']);
  }

  // TODO:  Add a cancel button to the form which navigates the user away from the login form and back to the landing page.
  //#endregion
}
