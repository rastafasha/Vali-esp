import { Component, OnInit } from '@angular/core';
import { LuxuringService } from '../../../service/luxury.service';
import { Luxuring } from '../../../models/luxury';

@Component({
  selector: 'app-facial-l-modal',
  templateUrl: './facial-l-modal.component.html',
  styleUrls: ['./facial-l-modal.component.css']
})
export class FacialLModalComponent implements OnInit {

  luxurings: Luxuring;
  error: string;

  constructor(private luxuringService: LuxuringService) { }

  ngOnInit() {
    this.luxuringService.getLuxurings().subscribe(
      (data: Luxuring) => this.luxurings = data,
      error => this.error = error
    );
  }

}
