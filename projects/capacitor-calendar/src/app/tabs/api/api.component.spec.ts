import { ComponentFixture, TestBed } from '@angular/core/testing';
import { describe, beforeEach, test, expect } from 'vitest';
import { ApiComponent } from './api.component';
import { appConfig } from '../../app.config';

describe('ApiComponent', () => {
  let component: ApiComponent;
  let fixture: ComponentFixture<ApiComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule(
      Object.assign({}, appConfig, {
        imports: [ApiComponent],
      }),
    ).compileComponents();

    fixture = TestBed.createComponent(ApiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  test('should create', () => {
    expect(component).toBeTruthy();
  });
});
