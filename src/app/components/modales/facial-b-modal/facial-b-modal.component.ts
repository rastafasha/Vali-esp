import { Component, OnInit } from '@angular/core';
import { BrighteningService } from '../../../service/brightening.service';
import { Brightening } from '../../../models/brightening';

@Component({
  selector: 'app-facial-b-modal',
  templateUrl: './facial-b-modal.component.html',
  styleUrls: ['./facial-b-modal.component.css']
})
export class FacialBModalComponent implements OnInit {

  brightenings: Brightening;
  error: string;

  constructor(private brighteningService: BrighteningService) { }

  ngOnInit() {
    this.brighteningService.getBrightenings().subscribe(
      (data: Brightening) => this.brightenings = data,
      error => this.error = error
    );
  }
}
