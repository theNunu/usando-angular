import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ThirdThing } from './third-thing';

describe('ThirdThing', () => {
  let component: ThirdThing;
  let fixture: ComponentFixture<ThirdThing>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ThirdThing]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ThirdThing);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
