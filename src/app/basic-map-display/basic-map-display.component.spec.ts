import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BasicMapDisplayComponent } from './basic-map-display.component';

describe('BasicMapDisplayComponent', () => {
  let component: BasicMapDisplayComponent;
  let fixture: ComponentFixture<BasicMapDisplayComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BasicMapDisplayComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BasicMapDisplayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
