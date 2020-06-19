import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { catchError } from 'rxjs/operators';
import { HttpErrorResponse } from '@angular/common/http';

/**
 * Application Global Service providing common variables and methods.
 */
@Injectable({
  providedIn: 'root'
})
export class AppService {

  //#region Variables
  /**
   * Path to the API.
   */
  api = 'http://localhost:8000/api';

  /**
   * Username of the current user.
   */
  username: string;
  //#endregion

  //#region Constructor & Destructor
  /**
   * Constructor
   * 
   * @param http Injected reference to the HttpClient.
   */
  constructor(private http: HttpClient) {}
  //#endregion

  //#region Methods
  /**
   * Returns all members.
   * @returns {Member[]} List of all members.
   */
  getMembers() {
    return this.http
      .get(`${this.api}/members`)
      .pipe(catchError(this.handleError));
  }

  /**
   * Sets the username reported to application processes.
   * @param name Username of the current user.
   */
  setUsername(name: string): void {
    this.username = name;
  }

  /**
   * Adds a member to the member list.
   * @param memberForm Reference to the member form.
   */
  addMember(memberForm) {
    // TODO:  Code this.
    throw new Error('AppService.addMember() is not yet implemented.');
  }

  /**
   * Returns the list of teams.
   */
  // ### BEGIN edits by Eric
  getTeams() {
    // TODO:  Code this.
    throw new Error('AppService.getTeams() is not yet implemented.');
  }
  // ### END edits by Eric

  /**
   * Provides default handling for API errors.
   * @param error Reference to an HttpErrorResponse received.
   */
  private handleError(error: HttpErrorResponse) {

    // If an instance of ErrorEvent, then report the error message to the console.
    if (error.error instanceof ErrorEvent) {
      console.error('An error occurred:', error.error.message);
    }
    // Otherwise, assume we can pull the standard status and error values from the response.
    else {
      console.error(
        `Backend returned code ${error.status}, ` + `body was: ${error.error}`
      );
    }
    // TODO:  Why are we returning an array here?
    return [];
  }
  //#endregion
}
