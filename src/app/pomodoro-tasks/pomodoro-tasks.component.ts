import { Component, OnInit, Pipe, PipeTransform, Directive, HostListener } from '@angular/core';

interface ITask{
  name: string;
  deadline: Date;
  queued: boolean;
  pomodorosRequired: number;
}

class TasksService{
  taskStore: Array<ITask> = [];

  constructor(){
    const tasks = [
      {
        name: 'task1',
        deadline: '23 Июнь 2017',
        pomodorosRequired: 3
      },
      {
        name: 'task2',
        deadline: '13 Июнь 2017',
        queued: false,
        pomodorosRequired: 2
      },
      {
        name: 'task3',
        deadline: '3 Июнь 2017',
        pomodorosRequired: 1
      },
      {
        name: 'task4',
        deadline: '31 Май 2017',
        pomodorosRequired: 1
      },
    ];

    this.taskStore = tasks.map( task => {
      return {
        name: task.name,
        deadline: new Date(task.deadline),
        queued: false,
        pomodorosRequired: task.pomodorosRequired
      }
    });
  }
}

@Component({
  selector: 'app-pomodoro-tasks',
  templateUrl: './pomodoro-tasks.component.html',
  styleUrls: ['./pomodoro-tasks.component.css']
})
export class PomodoroTasksComponent {

  today: Date;
  tasks: ITask[];

  constructor() {
    const taskService: TasksService = new TasksService();
    this.tasks = taskService.taskStore;
    this.today = new Date();
  }


}
