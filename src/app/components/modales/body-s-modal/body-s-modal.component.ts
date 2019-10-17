import { Component, OnInit } from '@angular/core';
import { SculptingService } from '../../../service/sculpting.service';
import { Sculpting } from '../../../models/sculpting';

@Component({
  selector: 'app-body-s-modal',
  templateUrl: './body-s-modal.component.html',
  styleUrls: ['./body-s-modal.component.css']
})
export class BodySModalComponent implements OnInit {

  sculptings: Sculpting;
  error: string;

  constructor(private sculptingService: SculptingService) { }

  ngOnInit() {
    this.sculptingService.getSculptings().subscribe(
      (data: Sculpting) => this.sculptings = data,
      error => this.error = error
    );
  }
}
