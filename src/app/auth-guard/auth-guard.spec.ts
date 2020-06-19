import { AuthGuard } from './auth-guard';
import { AppService } from '../app.service';
import { TestBed, getTestBed } from '@angular/core/testing';
import { Router } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';

// ### BEGIN added by Eric (entire file)
/**
 * Test the functionality of the AuthGuard.
 */
describe('AuthGuard', () => {
  let appService;
  let guard: AuthGuard;
  let injector: TestBed;
  let router: Router;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        AppService,
        { provide: Router, useValue: { navigate: jasmine.createSpy('navigate') } }
      ],
      imports: [HttpClientModule]
    });
    injector = getTestBed();
    appService = injector.get(AppService);
    router = injector.get(Router);
    guard = new AuthGuard(appService, router);
  });

  // Ensure that the router is deactivated and redirects the user to the landing page if not logged in.
  it('should navigate to the landing page and return false when no user is logged in.', () => {
    expect(true).toEqual(true);
    expect(router).toBeDefined();
    expect(guard).toBeDefined();
    expect(guard.canActivate).toBeDefined();
    expect(guard.canActivate()).toBe(false);
    expect(router.navigate).toHaveBeenCalledWith(['/']);
  });

  // Ensure that a logged in user activates the route and does not call navigate().
  it('should return true if a user has logged in.', () => {
    appService.username = 'ebewley';
    expect(guard).toBeTruthy();
    expect(guard.canActivate).toBeDefined();
    expect(guard.canActivate()).toBe(true);
    expect(router.navigate).not.toHaveBeenCalled();
  });

  // TODO: Add a test to the login component to test that the AuthGuard returns false and navigates to the landing page before the
  //       user is logged in, and true with no navigation afterwards.
  // TODO: Add a test to the signout process to test that the AuthGuard returns true with no navigation before the user is logged
  //       out, and returns false and navigates to the landing page afterwards.
});
// ### END added by Eric (entire file)