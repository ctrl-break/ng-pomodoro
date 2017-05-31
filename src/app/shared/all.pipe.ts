import { Pipe, PipeTransform } from '@angular/core';
import { ITask } from '../pomodoro-tasks/itasks'

@Pipe({
  name: 'pomodoroFormattedTime'
})
export class FormattedTimePipe implements PipeTransform {
  transform(totalMinutes:number):string{
        let minutes: number = totalMinutes % 60;
        let hours: number = Math.floor(totalMinutes / 60);
        return `${hours}:${minutes}`;
  }
}

@Pipe({
  name: 'queuedPomodorosOnly',
  pure: false
})
export class QueuedPomodorosPipe implements PipeTransform{
  transform( tasks:ITask[], ...args:any[]):ITask[]{
      return tasks.filter( (task: ITask) => {
          return task.queued === args[0];
        }
      );
  }
}
