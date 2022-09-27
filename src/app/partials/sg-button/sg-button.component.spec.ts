import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SgButtonComponent } from './sg-button.component';

describe('SgButtonComponent', () => {
  let component: SgButtonComponent;
  let fixture: ComponentFixture<SgButtonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SgButtonComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SgButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
