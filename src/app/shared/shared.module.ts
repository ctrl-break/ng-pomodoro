import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TasksIconsComponent } from '../pomodoro-tasks/tasks-icons/tasks-icons.component';
import { TaskTooltipDirective } from '../shared/task-tooltip.directive';

@NgModule({
    imports:[CommonModule],
    declarations: [
        TasksIconsComponent,
        TaskTooltipDirective
    ],
    exports: [
        TasksIconsComponent,
        TaskTooltipDirective
    ]
})
export class SharedModule{}
