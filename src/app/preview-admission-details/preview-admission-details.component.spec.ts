import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PreviewAdmissionDetailsComponent } from './preview-admission-details.component';

describe('PreviewAdmissionDetailsComponent', () => {
  let component: PreviewAdmissionDetailsComponent;
  let fixture: ComponentFixture<PreviewAdmissionDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PreviewAdmissionDetailsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PreviewAdmissionDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
