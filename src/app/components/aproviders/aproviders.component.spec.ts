import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AprovidersComponent } from './aproviders.component';

describe('AprovidersComponent', () => {
  let component: AprovidersComponent;
  let fixture: ComponentFixture<AprovidersComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AprovidersComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AprovidersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
