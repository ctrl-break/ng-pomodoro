import { Component } from '@angular/core';

@Component({
  selector: 'app-pomodoro-timer',
  templateUrl: './pomodoro-timer.component.html',
  styleUrls: ['./pomodoro-timer.component.css']
})
export class PomodoroTimerComponent {

  seconds: number;
  minutes: number;
  isPaused: boolean = false;
  buttonLabel: string;

  constructor() {
    this.resetTimer();
    setInterval(() => this.tick(), 1000);
  }

  resetTimer(): void {
    this.minutes = 0;
    this.seconds = 59;
    this.buttonLabel = 'Start';
    this.togglePause();
  }

  togglePause():void {
    this.isPaused = !this.isPaused;
    if ( this.minutes < 0 || this.seconds < 59){
      this.buttonLabel = this.isPaused ? "Resume" : "Pause";
    }
  }

  tick(): void {
    if (!this.isPaused){
      this.buttonLabel = "Pause";
      if (--this.seconds < 0) {
        this.seconds = 59;
        if (--this.minutes < 0) {
          this.resetTimer();
        }
      }
    }
  }

}
