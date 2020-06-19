import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { MemberDetailsComponent } from './member-details.component';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

// Bonus points!
/**
 * Provides unit tests for the member details component functionality.
 */
describe('MemberDetailsComponent', () => {

  //#region Variables & Constants
  let component: MemberDetailsComponent;
  let fixture: ComponentFixture<MemberDetailsComponent>;
  //#endregion

  /**
   * Performs configuration functionality which needs to occur prior to each test.
   */
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [MemberDetailsComponent],
      imports: [
        FormsModule,
        ReactiveFormsModule,
        HttpClientModule,
        RouterModule
      ],
      providers: [
        HttpClient,
        FormBuilder,
        {
          provide: Router,
          useClass: class {
            navigate = jasmine.createSpy('navigate');
          }
        }
      ]
    }).compileComponents();
  }));

  // TODO:  Is it necessary that these two beforeEach processes to exist separately?

  /**
   * Performs additional configuration which needs to occur prior to each test.
   */
  beforeEach(() => {
    fixture = TestBed.createComponent(MemberDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  /**
   * Tests whether the componet is created correctly.
   */
  it('should create', () => {
    expect(component).toBeTruthy();
  });

  // TODO: Don't forget to test the functionality of the Save button.
  // TODO: Don't forget to test the functionality of the Cancel button.
  // TODO: Don't forget to test whether the content of the components are displayed as expected.
});
