import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AppComponent } from './app.component';
import { test, describe, expect, beforeEach } from 'vitest';

describe('AppComponent', () => {
  let fixture: ComponentFixture<AppComponent>;
  let component: AppComponent;

  beforeEach(() => {
    fixture = TestBed.createComponent(AppComponent);
    component = fixture.componentInstance;
  });

  test('should create the app', () => {
    expect(component).toBeTruthy();
  });

  test(`should have the 'capacitor-calendar' title`, () => {
    expect(component.title).toEqual('capacitor-calendar');
  });

  test('should render title', () => {
    fixture.detectChanges();
    const compiled = fixture.nativeElement as HTMLElement;
    expect(compiled.querySelector('h1')?.textContent).toContain(
      'Hello, capacitor-calendar',
    );
  });
});
