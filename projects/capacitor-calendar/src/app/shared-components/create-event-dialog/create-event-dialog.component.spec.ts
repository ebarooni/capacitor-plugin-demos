import { ComponentFixture, TestBed } from '@angular/core/testing';
import { describe, beforeEach, test, expect } from 'vitest';
import { CreateEventDialogComponent } from './create-event-dialog.component';
import { appConfig } from '../../app.config';

describe('CreateEventDialogComponent', () => {
  let component: CreateEventDialogComponent;
  let fixture: ComponentFixture<CreateEventDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule(
      Object.assign({}, appConfig, {
        imports: [CreateEventDialogComponent],
      }),
    ).compileComponents();

    fixture = TestBed.createComponent(CreateEventDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  test('should create', () => {
    expect(component).toBeTruthy();
  });
});
