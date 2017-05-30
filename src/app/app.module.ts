import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { PomodoroTimerComponent } from './pomodoro-timer/pomodoro-timer.component';
import { PomodoroTasksComponent } from './pomodoro-tasks/pomodoro-tasks.component';

@NgModule({
  declarations: [
    AppComponent,
    PomodoroTimerComponent,
    PomodoroTasksComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
