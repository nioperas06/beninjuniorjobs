import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { JobBoardComponent } from './job-board.component';

describe('JobBoardComponent', () => {
  let component: JobBoardComponent;
  let fixture: ComponentFixture<JobBoardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ JobBoardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(JobBoardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
