import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EoptionsComponent } from './eoptions.component';

describe('EoptionsComponent', () => {
  let component: EoptionsComponent;
  let fixture: ComponentFixture<EoptionsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EoptionsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EoptionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
