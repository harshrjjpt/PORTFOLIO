import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-marquee',
  templateUrl: './marquee.component.html',
  styleUrls: ['./marquee.component.scss'],
})
export class MarqueeComponent implements OnInit {
  topArray = [
    'devicon-angularjs-plain',
    'devicon-react-original-wordmark',
    'devicon-html5-plain-wordmark',
    'devicon-tailwindcss-plain',
    'devicon-css3-plain-wordmark',
    'devicon-figma-plain',
    'devicon-github-original-wordmark',
    'devicon-sass-original',
    'devicon-javascript-plain',
    'devicon-java-plain-wordmark',
    'devicon-typescript-plain',
    'devicon-bootstrap-plain-wordmark',
  ];
  bottomArray = [
    'devicon-sass-original',
    'devicon-javascript-plain',
    'devicon-java-plain-wordmark',
    'devicon-typescript-plain',
    'devicon-bootstrap-plain-wordmark',
    'devicon-angularjs-plain',
    'devicon-react-original-wordmark',
    'devicon-html5-plain-wordmark',
    'devicon-tailwindcss-plain',
    'devicon-css3-plain-wordmark',
    'devicon-figma-plain',
    'devicon-github-original-wordmark',
    ,
  ];

  constructor() {}

  ngOnInit(): void {}
}
