import { Component, OnInit, OnChanges } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AppService } from '../app.service';
import { Router } from '@angular/router';

//#region Member Interface
// This interface may be useful in the times ahead...
/**
 * Describes the Member model.
 */
interface Member {

  // NOTE:  Not all persons have a first name.  It is ok for a legal name to consist of only one name, in which case the US
  //        federal government has stated that it be treated as the surname.  It might be wise to change the firstName
  //        field to be optional in order to comply with this ruling.
  /**
   * Gets/sets the first/given name of the member.
   * @returns {string} First/given name
   */
  firstName: string;

  /**
   * Gets/sets the last name/surname of the member.
   * @returns {string} Last name/surname
   */
  lastName: string;

  /**
   * Gets/sets the job title of the member.
   */
  jobTitle: string;

  // TODO:  Why is this maintained as a string value instead of a key value supporting relational linking?

  /**
   * Gets/sets which team the member is a part of.
   */
  team: string;

  // TODO:  Why is this maintained as a string value instead of a boolean value?

  /**
   * Gets/sets the current status of the member.
   */
  status: string;
}
//#endregion

//#region Member Details Component
/**
 * Component class for editing member details.
 */
@Component({
  selector: 'app-member-details',
  templateUrl: './member-details.component.html',
  styleUrls: ['./member-details.component.css']
})
export class MemberDetailsComponent implements OnInit, OnChanges {

  //#region Variables & Constants
  memberModel: Member;
  memberForm: FormGroup;
  submitted = false;
  alertType: String;
  alertMessage: String;
  teams = [];
  //#endregion

  //#region Constructor & Destructor
  /**
   * Constructor
   * 
   * @param fb Injected reference to the supporting form builder.
   * @param appService Injected reference to the app service containing common values and methods.
   * @param router Injected reference to the router providing navigation support.
   */
  constructor(private fb: FormBuilder, private appService: AppService, private router: Router) {}

  //#region Event Handlers
  // TODO:  Consider removing the ngOnInit() method if it remains unused.
  /**
   * Peforms initialization for the component.
   */
  ngOnInit() {}

  // TODO:  Consider removing the ngOnChanges() method if it remains unused.
  /**
   * Responds to changes of the component.
   */
  ngOnChanges() {}

  /**
   * Responds to the component form being submitted, and attempts to save the member to the database.
   * @param form Reference to the form group.
   */
  onSubmit(form: FormGroup) {
    this.memberModel = form.value;

    // TODO: Add member to members
  }

  // ISSUE:  HIGH:  This form needs a Cancel button so that the user can exit the form back to the previous one!
  
  //#endregion
}
//#endregion