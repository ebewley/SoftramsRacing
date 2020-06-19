import { TestBed, inject } from '@angular/core/testing';
import { AppService } from './app.service';
import { HttpClientModule } from '@angular/common/http';

/**
 * Provides unit tests for AppService functionality.
 */
describe('AppService', () => {

  /**
   * Performs configuration which needs to occur prior to each test.
   */
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [AppService],
      imports: [HttpClientModule]
    });
  });

  /**
   * Tests whether the service is created correctly.
   */
  it('should be created', inject([AppService], (service: AppService) => {
    expect(service).toBeTruthy();
  }));

  // TODO: Don't forget to test the value of the api variable.
  // TODO: Don't forget to test the value of the username variable.
  // TODO: Don't forget to test the functionality of the getMembers() method.
  // TODO: Don't forget to test the functionality of the setUserName() method.
  // TODO: Don't forget to test the functionality of the addMember() method.
  // TODO: Don't forget to test the functionality of the getTeams() method.
  // TODO: Don't forget to test the functionality of the handleError() method.
});
