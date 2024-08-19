import { ComponentFixture, TestBed } from '@angular/core/testing';
import { describe, beforeEach, test, expect } from 'vitest';
import { AvatarBannerComponent } from './avatar-banner.component';
import { appConfig } from '../../app.config';

describe('AvatarBannerComponent', () => {
  let component: AvatarBannerComponent;
  let fixture: ComponentFixture<AvatarBannerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule(
      Object.assign({}, appConfig, {
        imports: [AvatarBannerComponent],
      }),
    ).compileComponents();

    fixture = TestBed.createComponent(AvatarBannerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  test('should create', () => {
    expect(component).toBeTruthy();
  });
});
