import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddUserlistComponent } from './add-userlist.component';

describe('AddUserlistComponent', () => {
  let component: AddUserlistComponent;
  let fixture: ComponentFixture<AddUserlistComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddUserlistComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddUserlistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
