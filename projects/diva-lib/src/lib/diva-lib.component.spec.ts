import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DivaLibComponent } from './diva-lib.component';

describe('DivaLibComponent', () => {
  let component: DivaLibComponent;
  let fixture: ComponentFixture<DivaLibComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DivaLibComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DivaLibComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
