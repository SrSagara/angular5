import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DraganddropformobileComponent } from './draganddropformobile.component';

describe('DraganddropComponent', () => {
  let component: DraganddropformobileComponent;
  let fixture: ComponentFixture<DraganddropformobileComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DraganddropformobileComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DraganddropformobileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
