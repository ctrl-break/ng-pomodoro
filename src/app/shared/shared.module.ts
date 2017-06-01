import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TasksIconsComponent } from '../pomodoro-tasks/tasks-icons/tasks-icons.component';
import { TaskTooltipDirective } from './directives/task-tooltip.directive';

import { FormattedTimePipe } from  './pipes/formatted-time.pipe'
import { QueuedOnlyPipe } from  './pipes/queued.pipe'

@NgModule({
    imports:[CommonModule],
    declarations: [
        TasksIconsComponent,
        TaskTooltipDirective,
        FormattedTimePipe,
        QueuedOnlyPipe
    ],
    exports: [
        TasksIconsComponent,
        TaskTooltipDirective,
        FormattedTimePipe,
        QueuedOnlyPipe
    ]
})
export class SharedModule{}
