# Softrams Racing

Welcome to the Softrams Racing Team Trials where you'll be tested on your development skills.  We have brought you on board today because you specialize in a particular skill that we believe will not only benefit us a as a team, but you as a developer.  Softrams Racing prides itself as being one of the top competitors in many racing series including Formula 1 and the World Endurance Championship.  Competing in multiple categories requires many personnel and we are having trouble keeping track of the roster of each team.  We have already began to construct a mini-application which currently only retrieves members of the organization.  This is where you come in.  Softrams Racing needs you to add a feature to this application that allows us to add new members to our organization, and most importantly to a specific team.  You have been provided the application source code and your job is to create this feature.  Softrams Racing looks forward to seeing what you can accomplish!  Good luck!

## Requirements

As a user, I need to be able to add a member to the organization so that I can keep track of each team roster.

Member properties

1. First Name
2. Last Name
3. Job Title
4. Status
5. Team

### Acceptance Criteria
* **Angular unit tests should pass with code coverage of at least 80% on all files **
* On the member summary page, I should be able to navigate to and from the member detail page
* The member detail form should include fields for each of the member properties
* Saving the member should redirect me back to the member summary page where I should see the new member listed on the table
* Each member should be updatable
* Each member should be removable

### BONUS Acceptance Criteria 
* I should not be able to navigate to members page without being logged on
* The member detail form should have client-side validation
* The member detail form should have server-side validation

_Remember this simulates a mini "Full-Stack" web application so be sure to develop for both server and client_

### On Completion
* Create a Zip from the updated source code and send it to your point of contact for review
	* _Please delete the node_modules directory before compressing_

## Development Environment 

* [Express](https://expressjs.com/)
* [Angular CLI](https://cli.angular.io/)
* [json-server](https://github.com/typicode/json-server)
  * A full fake REST API

## Running the Application

Review the available scripts in the [package.json](package.json)   

## Run in Production Mode

Application will run on [localhost:8000](http://localhost:8000)

Enter any username and password to login

`npm start`

## Run in Development Mode

Application will run on [localhost:4200](http://localhost:4200)

Enter any username and password to login

`npm run start-dev`

_Please Note:  To have Angular call `json-server` directly, set `DEBUG` to `true` in [app.service.ts](./src/app/app.service.ts)_

# Edits made by Eric Bewley

When code is properly documented, it improved the readability and maintainability of the code by others, especially junior developers who have not yet encountered the complex designs of more seasoned developers.  By increasing the readability of code, groups can foster the appropriate use of patterns within this application and others, and can also increase the growth rate of junior developers by providing examples for them to pull from.  For these and other reasons, I have gone through this sample app and added comments in much the same way that I would any application, in hopes of illustrating my preference for "good clean code".  Readabiltiy improvements were made to some of the HTML files as well.  Some browsers may not display item identically, so if those are found during testing, additional tags (i.e. span) may need to be added.

As I perform a review of an app, and as content changes throughout development and maintenance cycles, I will often add remarks beginning with "TODO: " in the unit files.  In some cases, they are to remind me or other developers that a closer review or clean-up of the code should be taken.  In other cases, it might be to remind me to double-check that an associated action is developed.  For example, if I see an empty ``ngOnInit()`` method, I might add a TODO to return and remove the unnecessary code if development efforts never place anything in the method.  Using such a note as a reminder, may apply to having made a reference to read a local storage variable, but for which I am not sure that processes have been written to write said local storage variable.  I will intentionally leave a few of these TODO lines so that you can see my style of ensuring that proper clean-up occurs, regardless of who might address it later.

Any edits made, aside from the addition of remarks, will be documented here categorized by file name.  I know, I know, it is hard to believe, but I'm an imperfect human, so some notes might get missed.  Additionally, I will try to remember to indicate the starting and ending areas of my edits and additions with remark tags such as those shown below:
```
// ### BEGIN added by Eric
let x = 23 + y;
// ### END added by Eric

// ### BEGIN edited by Eric
let y = 123;
// ### END edited by Eric
```
## app.module.ts

* Added route to support nagivation to the member component.
* Added AuthGuard to protect access to the /members and /member routes in a more Angular appropriate manner.

## auth-guard/auth-guard.ts

* Added a guard to use in restricting access to pages.

## auth-guard/auth-guard.spec.ts

* Added a test spec for the new AuthGuard.

## login.component.html

* The class name used on the outermost element should have a name like "login-page" instead of "login-form" since additional content may be added to the page later which has nothing at all to do with logging in (i.e. advertising cards/panels).
* ISSUE:  HIGH:  The form does not contain a ``Cancel`` button, so there is no way for the user to leave the login form to return to the landing page.

## members.component.ts

* Added private variable ``members$`` to maintain a reference to the Subscription to obtain a list of members in the ``ngOnInit`` method.
* Added interface ``OnDestroy`` and its supporting ``ngOnDestroy`` method as a class destructor to unsubscribe from the ``members$`` subscription and prevent a possible memory leak.
* Converted public untyped read/write variable ``members`` to a private, strongly-typed private variable ``_members``, and added a readonly property ``members`` to the MembersComponent class to protect the value of ``members`` from being inappropriately replaced.

## tsconfig.spec.json

* Added a setting for ``emitDecoratorMetadata``, because being left unset can sometimes cause problems within tests.

# Eric's Notes

* The login box title bar might be harder for some people to recognize it as a title and not part of the body.  Consider changing this.
* No favicon.ico has been specified, which causes a low-priority error to be thrown in the browser console.
* This application is not constructed to support localization in any format (translation, resource references, etc.).