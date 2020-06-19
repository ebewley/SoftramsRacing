import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { LoginComponent } from './login.component';
import { HttpClient } from '@angular/common/http';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { Router } from '@angular/router';

/**
 * Provides unit tests for Login component functionality.
 */
describe('LoginComponent', () => {

  //#region Variables & Constants
  let component: LoginComponent;
  let fixture: ComponentFixture<LoginComponent>;
  //#endregion

  /**
   * Performs configuration which needs to occur prior to each test.
   */
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [LoginComponent],
      imports: [ReactiveFormsModule, RouterModule, HttpClientModule],
      providers: [
        {
          provide: Router,
          useClass: class {
            navigate = jasmine.createSpy('navigate');
          }
        },
        HttpClient
      ]
    }).compileComponents();
  }));

  // TODO:  Is it necessary that these two beforeEach processes to exist separately?

  /**
   * Performs additional configuration which needs to occur prior to each test.
   */
  beforeEach(() => {
    fixture = TestBed.createComponent(LoginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  /**
   * Tests whether the component is created correctly.
   */
  it('should create', () => {
    expect(component).toBeTruthy();
  });

  // TODO: Don't forget to test the functionality of the logout button.
  // TODO: Don't forget to test whether the content of the components are displayed as expected.
});
