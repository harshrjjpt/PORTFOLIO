import { Component, OnInit, HostListener } from '@angular/core';
import { FillerService } from './filler.service';
import * as AOS from 'aos';

// declare let window: any;

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  constructor(public filler: FillerService) {}
  top: any;
  left: any;
  expand = false;

  title = 'my-portfolio';

  circle = document.querySelector('svg');

  mouseMessageHandler(msg: string) {
    this.filler.mouseMessage = msg;
  }

  @HostListener('window:scroll', ['$event'])
  scrollHandler(event) {
    console.log(event);
  }

  @HostListener('document:mousemove', ['$event'])
  onMouseMove(e) {
    this.filler.circleLeft = e.screenX - 34;
    this.filler.circleTop = e.screenY - 133;
    console.log(e.screenX);
  }

  // window.addEventListner('mousemove', (event)=>{
  //   console.log(event.clientX);
  // })

  ngOnInit(): void {
    AOS.init();
    if (!localStorage.getItem('mytheme')) {
      localStorage.setItem('mytheme', 'dark');
    }
  }
}
