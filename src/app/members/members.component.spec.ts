import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { MembersComponent } from './members.component';
import { Router } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';

/**
 * Provides unit tests for the Members component functionality.
 */
describe('MembersComponent', () => {

  //#region Variables & Constants
  let component: MembersComponent;
  let fixture: ComponentFixture<MembersComponent>;
  //#endregion

  /**
   * Performs configuration functionality which needs to occur prior to each test.
   */
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [MembersComponent],
      imports: [HttpClientModule, RouterModule],
      providers: [
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
    fixture = TestBed.createComponent(MembersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  /**
   * Tests whether the componet is created correctly.
   */
  it('should create', () => {
    expect(component).toBeTruthy();
  });

  // TODO: Don't forget to test the functionality of the AddMember button (goToAddMemeberForm()).
  // TODO: Don't forget to test the functionality of editMemberByID().
  // TODO: Don't forget to test the functionality of deleteMemberByID().
  // TODO: Don't forget to test whether the content of the components are displayed as expected.
  // TODO: Don't forget to test whether the destructor is being called correctly.
});
