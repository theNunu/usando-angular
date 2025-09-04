import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeLogo } from './home-logo.component';

describe('HomeLogo', () => {
  let component: HomeLogo;
  let fixture: ComponentFixture<HomeLogo>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HomeLogo]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HomeLogo);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
