import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { Angular2FontawesomeModule } from 'angular2-fontawesome/angular2-fontawesome'

import { AppComponent } from './app.component';
import { PomodoroTasksComponent } from './pomodoro-tasks/pomodoro-tasks.component';

import { SharedModule } from './shared/shared.module'

@NgModule({
  declarations: [
    AppComponent,
    PomodoroTasksComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    SharedModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
