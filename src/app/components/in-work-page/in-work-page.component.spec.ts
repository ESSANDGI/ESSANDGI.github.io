import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InWorkPageComponent } from './in-work-page.component';

describe('InWorkPageComponent', () => {
  let component: InWorkPageComponent;
  let fixture: ComponentFixture<InWorkPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InWorkPageComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(InWorkPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
