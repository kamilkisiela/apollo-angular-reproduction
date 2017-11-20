import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UpvoterComponent } from './upvoter.component';

describe('UpvoterComponent', () => {
  let component: UpvoterComponent;
  let fixture: ComponentFixture<UpvoterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UpvoterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UpvoterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
