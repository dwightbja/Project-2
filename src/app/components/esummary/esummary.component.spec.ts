import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EsummaryComponent } from './esummary.component';

describe('EsummaryComponent', () => {
  let component: EsummaryComponent;
  let fixture: ComponentFixture<EsummaryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EsummaryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EsummaryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
