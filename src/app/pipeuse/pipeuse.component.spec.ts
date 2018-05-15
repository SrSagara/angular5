import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PipeuseComponent } from './pipeuse.component';

describe('PipeuseComponent', () => {
  let component: PipeuseComponent;
  let fixture: ComponentFixture<PipeuseComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PipeuseComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PipeuseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
