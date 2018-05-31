import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WizardConfirmComponent } from './wizard-confirm.component';

describe('WizardConfirmComponent', () => {
  let component: WizardConfirmComponent;
  let fixture: ComponentFixture<WizardConfirmComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WizardConfirmComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WizardConfirmComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
