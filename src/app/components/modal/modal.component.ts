import { Component, OnInit } from '@angular/core';
import { FillerService } from 'src/app/filler.service';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.scss'],
})
export class ModalComponent implements OnInit {
  constructor(public filler: FillerService) {}
  scrollTo(page) {
    this.filler.showModal = false;
    document.getElementById(page).scrollIntoView({
      behavior: 'smooth',
    });
  }

  ngOnInit(): void {}
}
