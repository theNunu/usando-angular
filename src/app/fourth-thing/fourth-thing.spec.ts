import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FourthThing } from './fourth-thing';

describe('FourthThing', () => {
  let component: FourthThing;
  let fixture: ComponentFixture<FourthThing>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FourthThing]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FourthThing);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
