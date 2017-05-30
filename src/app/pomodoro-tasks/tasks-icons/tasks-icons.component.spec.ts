import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TasksIconsComponent } from './tasks-icons.component';

describe('TasksIconsComponent', () => {
  let component: TasksIconsComponent;
  let fixture: ComponentFixture<TasksIconsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TasksIconsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TasksIconsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
