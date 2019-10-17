import { Component, OnInit } from '@angular/core';
import { BrighteningService } from '../../../service/brightening.service';
import { Brightening } from '../../../models/brightening';

@Component({
  selector: 'app-facial-brightening',
  templateUrl: './facial-brightening.component.html',
  styleUrls: ['./facial-brightening.component.css']
})
export class FacialBrighteningComponent implements OnInit {

  brightenings: Brightening;
  error: string;

  constructor(private brighteningService: BrighteningService) {}

  ngOnInit() {
    this.brighteningService.getBrightenings().subscribe(
      (data: Brightening) => this.brightenings = data,
      error => this.error = error
    );
  }

}
