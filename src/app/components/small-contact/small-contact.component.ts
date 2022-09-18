import { Component, OnInit } from '@angular/core';
import { FillerService } from 'src/app/filler.service';

@Component({
  selector: 'app-small-contact',
  templateUrl: './small-contact.component.html',
  styleUrls: ['./small-contact.component.scss'],
})
export class SmallContactComponent implements OnInit {
  constructor(public filler: FillerService) {}

  ngOnInit(): void {}
}
