import { ComponentFixture, TestBed } from '@angular/core/testing';
import { describe, beforeEach, test, expect } from 'vitest';
import { PermissionsDisplayComponent } from './permissions-display.component';
import { appConfig } from '../../app.config';

describe('PermissionsDisplayComponent', () => {
  let component: PermissionsDisplayComponent;
  let fixture: ComponentFixture<PermissionsDisplayComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule(
      Object.assign({}, appConfig, {
        imports: [PermissionsDisplayComponent],
      }),
    ).compileComponents();

    fixture = TestBed.createComponent(PermissionsDisplayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  test('should create', () => {
    expect(component).toBeTruthy();
  });
});
