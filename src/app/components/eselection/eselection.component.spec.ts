import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EselectionComponent } from './eselection.component';

describe('EselectionComponent', () => {
  let component: EselectionComponent;
  let fixture: ComponentFixture<EselectionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EselectionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EselectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
