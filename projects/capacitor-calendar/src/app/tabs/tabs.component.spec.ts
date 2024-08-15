import { ComponentFixture, TestBed } from '@angular/core/testing';
import { describe, beforeEach, test, expect } from 'vitest';

import { TabsComponent } from './tabs.component';
import { appConfig } from '../app.config';

describe('TabsComponent', () => {
  let component: TabsComponent;
  let fixture: ComponentFixture<TabsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule(
      Object.assign({}, appConfig, {
        imports: [TabsComponent],
      }),
    ).compileComponents();

    fixture = TestBed.createComponent(TabsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  test('should create', () => {
    expect(component).toBeTruthy();
  });
});
