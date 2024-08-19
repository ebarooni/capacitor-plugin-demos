import { ComponentFixture, TestBed } from '@angular/core/testing';
import { describe, beforeEach, test, expect } from 'vitest';
import { BaseIonContentComponent } from './base-ion-content.component';
import { appConfig } from '../../app.config';
import { By } from '@angular/platform-browser';

describe('BaseIonContentComponent', () => {
  let component: BaseIonContentComponent;
  let fixture: ComponentFixture<BaseIonContentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule(
      Object.assign({}, appConfig, {
        imports: [BaseIonContentComponent],
      }),
    ).compileComponents();

    fixture = TestBed.createComponent(BaseIonContentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  test('should create', () => {
    expect(component).toBeTruthy();
  });

  test(`should sent the color of 'ion-content' to light`, () => {
    const ionContent = fixture.debugElement.query(By.css('ion-content'));
    expect(ionContent.properties['color']).toBe('light');
  });
});
