import { ComponentFixture, TestBed } from '@angular/core/testing';
import { describe, beforeEach, test, expect } from 'vitest';
import { BaseIonListComponent } from './base-ion-list.component';
import { appConfig } from '../../app.config';

describe('BaseIonListComponent', () => {
  let component: BaseIonListComponent;
  let fixture: ComponentFixture<BaseIonListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule(
      Object.assign({}, appConfig, {
        imports: [BaseIonListComponent],
      }),
    ).compileComponents();

    fixture = TestBed.createComponent(BaseIonListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  test('should create', () => {
    expect(component).toBeTruthy();
  });
});
