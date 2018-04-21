import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OneBoxComponent } from './one-box.component';

describe('OneBoxComponent', () => {
  let component: OneBoxComponent;
  let fixture: ComponentFixture<OneBoxComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OneBoxComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OneBoxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
