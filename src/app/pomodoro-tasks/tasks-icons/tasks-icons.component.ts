import { Component, OnInit, Input} from '@angular/core';
import { Task } from '../../shared/interfaces/task';

@Component({
  selector: 'app-tasks-icons',
  templateUrl: './tasks-icons.component.html',
  styleUrls: ['./tasks-icons.component.css']
})
export class TasksIconsComponent implements OnInit {

  @Input() tasks: Task;
  @Input() size: number;

  icons: Object[] = [];

  ngOnInit() {
      this.icons.length = this.tasks.pomodorosRequired;
      this.icons.fill({ name: this.tasks.name });
  }

}
