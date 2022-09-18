import { Component, OnInit } from '@angular/core';
import { FillerService } from 'src/app/filler.service';

@Component({
  selector: 'app-experience2',
  templateUrl: './experience2.component.html',
  styleUrls: ['./experience2.component.scss'],
})
export class Experience2Component implements OnInit {
  constructor(public filler: FillerService) {}

  ngOnInit(): void {}
}
