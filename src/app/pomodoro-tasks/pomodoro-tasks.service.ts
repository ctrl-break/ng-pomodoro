import { Task } from '../shared/interfaces/task';

export class TasksService{
  taskStore: Array<Task> = [];

  constructor(){
    const tasks = [
      {
        name: 'task1',
        deadline: 'Jun 23 2017',
        pomodorosRequired: 3
      },
      {
        name: 'task2',
        deadline: 'Jun 13 2017',
        queued: false,
        pomodorosRequired: 2
      },
      {
        name: 'task3',
        deadline: 'May 3 2017',
        pomodorosRequired: 1
      },
      {
        name: 'task4',
        deadline: 'May 31 2017',
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
