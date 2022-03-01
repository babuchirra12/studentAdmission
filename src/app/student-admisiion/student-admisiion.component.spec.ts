import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StudentAdmisiionComponent } from './student-admisiion.component';

describe('StudentAdmisiionComponent', () => {
  let component: StudentAdmisiionComponent;
  let fixture: ComponentFixture<StudentAdmisiionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StudentAdmisiionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(StudentAdmisiionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
