import { Component, OnInit } from '@angular/core';
import { LuxuringService } from '../../../service/luxury.service';
import { Luxuring } from '../../../models/luxury';

@Component({
  selector: 'app-facial-luxury',
  templateUrl: './facial-luxury.component.html',
  styleUrls: ['./facial-luxury.component.css']
})
export class FacialLuxuryComponent implements OnInit {

  luxurings: Luxuring;
  error: string;

  constructor(private luxuringService: LuxuringService) {}

  ngOnInit() {
    this.luxuringService.getLuxurings().subscribe(
      (data: Luxuring) => this.luxurings = data,
      error => this.error = error
    );
  }


}
