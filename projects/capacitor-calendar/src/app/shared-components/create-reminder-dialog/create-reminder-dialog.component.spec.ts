import { ComponentFixture, TestBed } from '@angular/core/testing';
import { describe, beforeEach, test, expect } from 'vitest';
import { CreateReminderDialogComponent } from './create-reminder-dialog.component';
import { appConfig } from '../../app.config';

describe('CreateReminderDialogComponent', () => {
  let component: CreateReminderDialogComponent;
  let fixture: ComponentFixture<CreateReminderDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule(
      Object.assign({}, appConfig, {
        imports: [CreateReminderDialogComponent],
      }),
    ).compileComponents();

    fixture = TestBed.createComponent(CreateReminderDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  test('should create', () => {
    expect(component).toBeTruthy();
  });
});
