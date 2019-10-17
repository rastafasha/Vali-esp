import { Component, OnInit } from '@angular/core';
import { CalmingService } from '../../../service/calming.service';
import { Calming } from '../../../models/calming';

@Component({
  selector: 'app-facial-c-modal',
  templateUrl: './facial-c-modal.component.html',
  styleUrls: ['./facial-c-modal.component.css']
})
export class FacialCModalComponent implements OnInit {

  calmings: Calming;
  error: string;

  constructor(private calmingService: CalmingService) { }

  ngOnInit() {
    this.calmingService.getCalmings().subscribe(
      (data: Calming) => this.calmings = data,
      error => this.error = error
    );
  }
}
