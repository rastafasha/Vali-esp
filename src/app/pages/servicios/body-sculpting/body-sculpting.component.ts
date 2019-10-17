import { Component, OnInit } from '@angular/core';
import { SculptingService } from '../../../service/sculpting.service';
import { Sculpting } from '../../../models/sculpting';

@Component({
  selector: 'app-body-sculpting',
  templateUrl: './body-sculpting.component.html',
  styleUrls: ['./body-sculpting.component.css']
})
export class BodySculptingComponent implements OnInit {

  sculptings: Sculpting;
  error: string;

  constructor(private sculptingService: SculptingService) {}

  ngOnInit() {
    this.sculptingService.getSculptings().subscribe(
      (data: Sculpting) => this.sculptings = data,
      error => this.error = error
    );
  }

}
