import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SmallContactComponent } from './small-contact.component';

describe('SmallContactComponent', () => {
  let component: SmallContactComponent;
  let fixture: ComponentFixture<SmallContactComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SmallContactComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SmallContactComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
