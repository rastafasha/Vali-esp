import { Component, OnInit } from '@angular/core';
import { HandService } from '../../../service/hand.service';
import { Hand } from '../../../models/hand';

@Component({
  selector: 'app-body-h-modal',
  templateUrl: './body-h-modal.component.html',
  styleUrls: ['./body-h-modal.component.css']
})
export class BodyHModalComponent implements OnInit {

  hands: Hand;
  error: string;

  constructor(private handService: HandService) { }

  ngOnInit() {
    this.handService.getHands().subscribe(
      (data: Hand) => this.hands = data,
      error => this.error = error
    );
  }

}
