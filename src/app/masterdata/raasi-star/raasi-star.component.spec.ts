import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RaasiStarComponent } from './raasi-star.component';

describe('RaasiStarComponent', () => {
  let component: RaasiStarComponent;
  let fixture: ComponentFixture<RaasiStarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RaasiStarComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RaasiStarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
