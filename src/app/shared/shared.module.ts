import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TasksIconsComponent } from '../pomodoro-tasks/tasks-icons/tasks-icons.component';;

@NgModule({
    imports:[CommonModule],
    declarations: [
        TasksIconsComponent
    ],
    exports: [
        TasksIconsComponent
    ]
})
export class SharedModule{}
