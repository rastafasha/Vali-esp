import { Component, OnInit } from '@angular/core';
import { AntiageService } from '../../../service/antiage.service';
import { Antiage } from '../../../models/antiage';

@Component({
  selector: 'app-facial-a-modal',
  templateUrl: './facial-a-modal.component.html',
  styleUrls: ['./facial-a-modal.component.css']
})
export class FacialAModalComponent implements OnInit {

  antiages: Antiage;
  error: string;

  constructor(private antiageService: AntiageService) { }

  ngOnInit() {
    this.antiageService.getAntiages().subscribe(
      (data: Antiage) => this.antiages = data,
      error => this.error = error
    );
  }

}
