import { Component, OnInit, Pipe, PipeTransform, Directive, HostListener } from '@angular/core';
import { ITask } from './itasks';
import { TasksService } from  './pomodoro-tasks.service'

@Component({
  selector: 'app-pomodoro-tasks',
  templateUrl: './pomodoro-tasks.component.html',
  styleUrls: ['./pomodoro-tasks.component.css']
})
export class PomodoroTasksComponent {

  today: Date;
  tasks: ITask[];
  queuedPomodoros: number;

  queueHeaderMapping: any = {
    '=0': 'No pomodoros',
    '=1': 'One pomodoro',
    'other': '# pomodoros'
  };

  constructor() {
    const taskService: TasksService = new TasksService();
    this.tasks = taskService.taskStore;
    this.today = new Date();
    this.updateQueuedPomodoros();
  }

  toggleTask(task:ITask):void{
    task.queued = !task.queued;
    this.updateQueuedPomodoros();
  }

  updateQueuedPomodoros():void{
    this.queuedPomodoros = this.tasks
      .filter((task:ITask) => task.queued)
      .reduce((pomodoros: number, queuedTask: ITask) => {
          return pomodoros + queuedTask.pomodorosRequired;
      }, 0)
  }
}
