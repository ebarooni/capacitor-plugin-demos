import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AppComponent } from './app.component';
import {
  test,
  describe,
  expect,
  beforeEach,
  vi,
  afterEach,
  MockInstance,
} from 'vitest';
import { By } from '@angular/platform-browser';
import { appConfig } from './app.config';
import { ThemeService } from './services/theme/theme.service';
import { BehaviorSubject } from 'rxjs';
import { TestScheduler } from 'rxjs/testing';

describe('AppComponent', () => {
  let fixture: ComponentFixture<AppComponent>;
  let component: AppComponent;
  let themeService: ThemeService;
  let scheduler: TestScheduler;

  let isDarkModeSubject: BehaviorSubject<boolean>;
  let toggleSpy: MockInstance;

  beforeEach(async () => {
    isDarkModeSubject = new BehaviorSubject<boolean>(false);
    themeService = {
      isDarkMode$: isDarkModeSubject.asObservable(),
    } as ThemeService;

    await TestBed.configureTestingModule(
      Object.assign({}, appConfig, {
        imports: [AppComponent],
      }),
    )
      .overrideComponent(AppComponent, {
        set: {
          providers: [{ provide: ThemeService, useValue: themeService }],
        },
      })
      .compileComponents();

    fixture = TestBed.createComponent(AppComponent);
    component = fixture.componentInstance;
    scheduler = new TestScheduler((actual, expected) => {
      expect(actual).deep.equal(expected);
    });
  });

  afterEach(() => {
    toggleSpy?.mockRestore();
  });

  test('should create the app', () => {
    expect(component).toBeTruthy();
  });

  test(`should have the 'ion-app' element`, () => {
    expect(fixture.debugElement.query(By.css('ion-app'))).toBeTruthy();
  });

  test(`should have the 'ion-router-outlet' element`, () => {
    fixture.detectChanges();
    expect(
      fixture.debugElement.query(By.css('ion-router-outlet')),
    ).toBeTruthy();
  });

  test.each([true, false])(
    'should toggle dark class on document body',
    (isDarkMode) => {
      toggleSpy = vi.spyOn(document.documentElement.classList, 'toggle');
      const initialIsDarkMode = isDarkModeSubject.getValue();
      scheduler.run(({ cold, expectObservable, flush }) => {
        cold('-a').subscribe(() => isDarkModeSubject.next(isDarkMode));
        expectObservable(component.isDarkMode$).toBe('ab', {
          a: initialIsDarkMode,
          b: isDarkMode,
        });
        flush();
        expect(
          document.documentElement.classList.toggle,
        ).toHaveBeenNthCalledWith(2, 'ion-palette-dark', isDarkMode);
      });
    },
  );
});
