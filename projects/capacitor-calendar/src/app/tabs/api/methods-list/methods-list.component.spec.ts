import { ComponentFixture, TestBed } from '@angular/core/testing';
import { describe, beforeEach, test, expect } from 'vitest';
import { MethodsListComponent } from './methods-list.component';
import { appConfig } from '../../../app.config';

describe('MethodsListComponent', () => {
  let component: MethodsListComponent;
  let fixture: ComponentFixture<MethodsListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule(
      Object.assign({}, appConfig, {
        imports: [MethodsListComponent],
      }),
    ).compileComponents();

    fixture = TestBed.createComponent(MethodsListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  test('should create', () => {
    expect(component).toBeTruthy();
  });
});
