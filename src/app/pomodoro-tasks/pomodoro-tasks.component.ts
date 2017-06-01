import { Component, OnInit, Pipe, PipeTransform, Directive, HostListener } from '@angular/core';
import { Task } from '../shared/interfaces/task';
import { TasksService } from  './pomodoro-tasks.service'
//import { FormattedTimePipe } from '../shared/formatted-time.pipe'
//import { TasksIconsComponent } from './tasks-icons/tasks-icons.component';

@Component({
  selector: 'app-pomodoro-tasks',
  //entryComponents: [TasksIconsComponent],
  templateUrl: './pomodoro-tasks.component.html',
  styleUrls: ['./pomodoro-tasks.component.css']
})
export class PomodoroTasksComponent {

  today: Date;
  tasks: Task[];
  queuedPomodoros: number;
  hint: string;

  queueHeaderMapping: any = {
    '=0': 'No pomodoros',
    '=1': 'One pomodoro',
    'other': '# pomodoros'
  };

  constructor() {
    const taskService: TasksService = new TasksService();
    this.tasks = taskService.taskStore;
    this.today = new Date();
    this.hint = 'Mouseover for details';
    this.updateQueuedPomodoros();
  }

  toggleTask(task:Task):void{
    task.queued = !task.queued;
    this.updateQueuedPomodoros();
  }

  updateQueuedPomodoros():void{
    this.queuedPomodoros = this.tasks
      .filter((task:Task) => task.queued)
      .reduce((pomodoros: number, queuedTask: Task) => {
          return pomodoros + queuedTask.pomodorosRequired;
      }, 0)
  }
}
