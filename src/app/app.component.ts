import { Component, OnInit } from '@angular/core';
import { FillerService } from './filler.service';
import * as AOS from 'aos';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  constructor(public filler: FillerService) {}

  title = 'my-portfolio';

  ngOnInit(): void {
    AOS.init();
    if (!localStorage.getItem('mytheme')) {
      localStorage.setItem('mytheme', 'dark');
    }
  }
}
