import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MotherTongueComponent } from './mother-tongue.component';

describe('MotherTongueComponent', () => {
  let component: MotherTongueComponent;
  let fixture: ComponentFixture<MotherTongueComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MotherTongueComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MotherTongueComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
