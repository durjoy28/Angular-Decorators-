import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OutpComponent } from './outp.component';

describe('OutpComponent', () => {
  let component: OutpComponent;
  let fixture: ComponentFixture<OutpComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OutpComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OutpComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
