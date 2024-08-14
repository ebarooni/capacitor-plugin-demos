import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AppComponent } from './app.component';
import { test, describe, expect, beforeEach } from 'vitest';
import { By } from '@angular/platform-browser';
import { appConfig } from './app.config';
import { ThemeService } from './services/theme/theme.service';
import { BehaviorSubject } from 'rxjs';

describe('AppComponent', () => {
  let fixture: ComponentFixture<AppComponent>;
  let component: AppComponent;
  let themeService: ThemeService;

  let isDarkModeSubject: BehaviorSubject<boolean>;

  beforeEach(async () => {
    isDarkModeSubject = new BehaviorSubject<boolean>(false);
    themeService = {
      isDarkMode$: isDarkModeSubject.asObservable(),
    };

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
});
