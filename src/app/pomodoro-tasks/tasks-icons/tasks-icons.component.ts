import { Component, OnInit, Input} from '@angular/core';
import { ITask } from '../itasks'

@Component({
  selector: 'app-tasks-icons',
  templateUrl: './tasks-icons.component.html',
  styleUrls: ['./tasks-icons.component.css']
})
export class TasksIconsComponent implements OnInit {

  @Input() tasks: ITask;
  @Input() size: number;
  
  icons: Object[] = [];

  ngOnInit() {
      this.icons.length = this.tasks.pomodorosRequired;
      this.icons.fill({ name: this.tasks.name });
  }

}
