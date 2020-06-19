import { Component, OnInit, OnDestroy } from '@angular/core';
import { AppService } from '../app.service';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { IMember } from '../models/member/member.model';

/**
 * Component class for displaying members.
 */
@Component({
  selector: 'app-members',
  templateUrl: './members.component.html',
  styleUrls: ['./members.component.css']
})
export class MembersComponent implements OnInit, OnDestroy {

  //#region Variables & Constants
  private members$: Subscription;
  private _members = [];
  //#endregion

  //#region Constructor & Destructor
  /**
   * Constructor
   * 
   * @param appService Injected reference to the app service contain common values and methods.
   * @param router Injected reference to the router providing navigation for the pages/components.
   */
  constructor(public appService: AppService, private router: Router) {}

  /**
   * Destructor
   */
  ngOnDestroy() {

    // Unsubscribe from subscriptions so as to prevent memory leaks.
    this.members$.unsubscribe();
    this.members$ = null;
  }
  //#endregion

  //#region Properties
  public get members(): IMember[] {
    return this._members;
  }
  //#endregion

  //#region Event Handlers
  /**
   * Peforms initialization for the component.
   */
  ngOnInit() {
    this.members$ = this.appService.getMembers().subscribe(
      members => this._members = members,
      err => console.error(`Error occurred in MembersComponents while attempting to return a list of members.  Details: ${err.message}`));
  }
  //#endregion

  //#region Methods
  /**
   * Navigates to the member detail form for adding/editing a member.
   */
  goToAddMemberForm() {

    // TODO:  This method could have a better name, and it needs functionality to navigate to the Member Details form to add a new member.

    console.log(`Hmmm...we didn't navigate anywhere`);
    throw new Error('MembersComponent.goToAddMemberForm() has not yet been implemented.');
  }

  /**
   * Responds to the user requesting to edit a member.
   * @param id ID of the member object to edit.
   */
  editMemberByID(id: number) {

    // TODO:  This method needs functionality to edit an existing member object.
    throw new Error('MembersComponent.editMemberByID() has not yet been implemented.');
  }

  /**
   * Responds to the user requesting to delete a member.
   * @param id ID of the member object to delete.
   */
  deleteMemberById(id: number) {

    // TODO:  This method needs functionality to delete an existing member object.
    throw new Error('MembersComponent.deleteMemberByID() has not yet been implemented.');
  }
  //#endregion
}
