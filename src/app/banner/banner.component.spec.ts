import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { BannerComponent } from './banner.component';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { RouterTestingModule } from '@angular/router/testing';

/**
 * Provides unit tests for banner component functionality.
 */
describe('BannerComponent', () => {

  //#region Variables & Constants
  let component: BannerComponent;
  let fixture: ComponentFixture<BannerComponent>;
  //#endregion

  /**
   * Provides configuration which needs to occur before each test.
   */
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BannerComponent ],
      imports: [ HttpClientTestingModule, RouterTestingModule ]
    })
    .compileComponents();
  }));

  /**
   * Provides additional configuration which needs to occur before each test.
   */
  // TODO: Check whether these two beforeEach() calls can be combined to improve readability and/or functionality.
  beforeEach(() => {
    fixture = TestBed.createComponent(BannerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  /**
   * Tests whether the creation of the component completes as expected.
   */
  it('should create', () => {
    expect(component).toBeTruthy();
  });

  // TODO: Don't forget to test the functionality of the Logon button.
  // TODO: Don't forget to test the functionality of the Cancel button.
  // TODO: Don't forget to test whether the content of the banner components are displayed as expected.
});
