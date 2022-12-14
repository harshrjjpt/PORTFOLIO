import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class FillerService {
  fillerWidth: number = 0;
  themeclass: string = 'light';
  showModal: boolean = false;
  circleLeft = 0;
  circleTop = 0;
  mouseMessage = '';
  circleWidth = false;

  gettheme() {
    // return localStorage.getItem('mytheme');
    return 'dark';
  }

  circleWidthHandler() {
    this.circleWidth = !this.circleWidth;
  }

  themechange(color: string) {
    if (this.themeclass === 'light') {
      this.themeclass = color;
    } else if (this.themeclass === 'dark') {
      this.themeclass = color;
    }
  }

  constructor() {}
}
