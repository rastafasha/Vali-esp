import { Component, OnInit } from '@angular/core';
import { AntiageService } from '../../../service/antiage.service';
import { Antiage } from '../../../models/antiage';

@Component({
  selector: 'app-facial-antiage',
  templateUrl: './facial-antiage.component.html',
  styleUrls: ['./facial-antiage.component.css']
})
export class FacialAntiageComponent implements OnInit {

  antiages: Antiage;
  error: string;

  constructor(private antiageService: AntiageService) {}

  ngOnInit() {
    this.antiageService.getAntiages().subscribe(
      (data: Antiage) => this.antiages = data,
      error => this.error = error
    );
  }

}
