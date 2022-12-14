import { Component, OnInit } from '@angular/core';
import { FillerService } from 'src/app/filler.service';

@Component({
  selector: 'app-experience',
  templateUrl: './experience.component.html',
  styleUrls: ['./experience.component.scss'],
})
export class ExperienceComponent implements OnInit {
  constructor(public filler: FillerService) {}

  ngOnInit(): void {}
}
