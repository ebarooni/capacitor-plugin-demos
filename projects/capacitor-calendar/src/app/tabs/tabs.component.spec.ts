import { ComponentFixture, TestBed } from '@angular/core/testing';
import { describe, beforeEach, test, expect } from 'vitest';

import { TabsComponent } from './tabs.component';
import { appConfig } from '../app.config';
import { By } from '@angular/platform-browser';

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

  test.each(['api', 'logs', 'settings'])('should contain %s tab', (tab) => {
    const tabsArr = fixture.debugElement.queryAll(By.css('ion-tab-button'));
    expect(tabsArr.some((tabBtn) => tabBtn.properties['tab'] === tab)).toBe(
      true,
    );
  });
});
