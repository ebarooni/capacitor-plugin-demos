import { ComponentFixture, TestBed } from '@angular/core/testing';
import { describe, beforeEach, test, expect } from 'vitest';

import { EventsListViewComponent } from './events-list-view.component';
import { appConfig } from '../../app.config';

describe('EventsListViewComponent', () => {
  let component: EventsListViewComponent;
  let fixture: ComponentFixture<EventsListViewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule(
      Object.assign({}, appConfig, { imports: [EventsListViewComponent] }),
    ).compileComponents();

    fixture = TestBed.createComponent(EventsListViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  test('should create', () => {
    expect(component).toBeTruthy();
  });
});
