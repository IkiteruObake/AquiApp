import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CarRoutingComponent } from './car-routing.component';

describe('CarRoutingComponent', () => {
  let component: CarRoutingComponent;
  let fixture: ComponentFixture<CarRoutingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CarRoutingComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CarRoutingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
