import { TestBed, async } from '@angular/core/testing';
import { AppComponent } from './app.component';
import { BannerComponent } from './banner/banner.component';
import { APP_BASE_HREF } from '@angular/common';
import { RouterModule } from '@angular/router';
import { HttpClientTestingModule } from '@angular/common/http/testing';

/**
 * Provides unit tests for the AppComponent functionality.
 */
describe('AppComponent', () => {

  /**
   * Provides configuration which needs to occur before each test.
   */
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [AppComponent, BannerComponent],
      imports: [RouterModule.forRoot([]), HttpClientTestingModule],
      providers: [{ provide: APP_BASE_HREF, useValue: '/' }]
    }).compileComponents();
  }));

  /**
   * Tests whether the creation of the component completes as expected.
   */
  it('should create the app', async(() => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  }));

  /**
   * Tests whether the title is correct.
   */
  it(`should have as title 'softrams-racing'`, async(() => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app.title).toEqual('softrams-racing');
  }));
});
