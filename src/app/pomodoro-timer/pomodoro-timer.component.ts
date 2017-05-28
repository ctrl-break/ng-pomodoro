import { Component } from '@angular/core';

@Component({
  selector: 'app-pomodoro-timer',
  templateUrl: './pomodoro-timer.component.html',
  styleUrls: ['./pomodoro-timer.component.css']
})
export class PomodoroTimerComponent {

  seconds: number;
  minutes: number;

  constructor() {
    this.seconds = 59;
    this.minutes = 24;
    setInterval(() => this.tick(), 1000);
  }

  tick(): void {
    if (--this.seconds < 0) {
      this.seconds = 59;
      if (--this.minutes < 0) {
        this.minutes = 24;
        this.seconds = 59;
      }
    }
  }

}
