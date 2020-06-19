import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { HttpClient } from '@angular/common/http';
import { AppService } from './app.service';
import { AppComponent } from './app.component';
import { BannerComponent } from './banner/banner.component';
import { MemberDetailsComponent } from './member-details/member-details.component';
import { MembersComponent } from './members/members.component';
import { LoginComponent } from './login/login.component';
// ### BEGIN added by Eric
import { AuthGuard } from './auth-guard/auth-guard';
// ### END added by Eric

//#region Route Definitions
/**
 * Defines the routes supported by the app.
 */
const ROUTES = [
  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full'
  },
  {
    path: 'members',
    component: MembersComponent,
    // ### BEGIN added by Eric
    canActivate: [AuthGuard]
    // ### END added by Eric
  },
  { // ### BEGIN added by Eric
    path: 'member',
    component: MembersComponent,
    canActivate: [AuthGuard]
  }, // ### END added by Eric
  {
    path: 'login',
    component: LoginComponent
  }
];
//#endregion

// TODO:  See if we NEED both FormsModule and ReactiveFormsModule.
// Notice how both FormsModule and ReactiveFormsModule imported...choices, choices!
@NgModule({
  declarations: [AppComponent, BannerComponent, MemberDetailsComponent, MembersComponent, LoginComponent],
  imports: [
    BrowserModule,
    RouterModule.forRoot(ROUTES, { useHash: true }),
    ReactiveFormsModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [
    AppService,
    HttpClient,
    // ### BEGIN added by Eric
    AuthGuard
    // ### END added by Eric
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
