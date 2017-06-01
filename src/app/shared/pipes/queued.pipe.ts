import { Pipe, PipeTransform } from '@angular/core';
import { Queueable } from '../interfaces/queueable';

@Pipe({
  name: 'queuedPomodorosOnly',
  pure: false
})
export class QueuedOnlyPipe implements PipeTransform{
  transform( queueableItems:Queueable[], ...args):Queueable[]{
      return queueableItems.filter( (task: Queueable) => {
          return task.queued === args[0];
        }
      );
  }
}
