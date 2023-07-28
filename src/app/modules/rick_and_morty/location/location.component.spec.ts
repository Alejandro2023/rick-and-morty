import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LocationsComponent } from './location.component';

describe('LocationsComponent', () => {
  let component: LocationsComponent;
  let fixture: ComponentFixture<LocationsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [LocationsComponent],
    });
    fixture = TestBed.createComponent(LocationsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
