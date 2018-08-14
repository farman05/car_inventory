import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ManufacturerlistComponent } from './manufacturerlist.component';

describe('ManufacturerlistComponent', () => {
  let component: ManufacturerlistComponent;
  let fixture: ComponentFixture<ManufacturerlistComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ManufacturerlistComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ManufacturerlistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
