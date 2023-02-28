import { Component, OnInit } from '@angular/core';
import { FillerService } from 'src/app/filler.service';
import Constants from 'src/utility/constants';

@Component({
  selector: 'app-portfolio',
  templateUrl: './portfolio.component.html',
  styleUrls: ['./portfolio.component.scss', './portfolio.component2.scss'],
})
export class PortfolioComponent implements OnInit {
  projects = Constants.data.projects;
  constructor(public filler: FillerService) {}

  ngOnInit(): void {}
}
