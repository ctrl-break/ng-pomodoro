import { Directive, HostListener, Input} from '@angular/core';
import { Task } from '../interfaces/task';

@Directive({
  selector: '[tasks]'
})
export class TaskTooltipDirective{

  private defaultTooltipText:string;
  @Input() tasks: Task;
  @Input() taskTooltip: any;

  @HostListener('mouseover') onMouseOver() {
    if (!this.defaultTooltipText && this.taskTooltip){
      this.defaultTooltipText = this.taskTooltip.innerText;
    }
    this.taskTooltip.innerText = this.tasks.name;
  }

  @HostListener('mouseout') onMouseOut() {
    if (this.taskTooltip){
      this.taskTooltip.innerText = this.defaultTooltipText;
    }
  }
}
