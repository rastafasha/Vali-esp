import { Component, OnInit } from '@angular/core';
import { CalmingService } from '../../../service/calming.service';
import { Calming } from '../../../models/calming';

@Component({
  selector: 'app-facial-calming',
  templateUrl: './facial-calming.component.html',
  styleUrls: ['./facial-calming.component.css']
})
export class FacialCalmingComponent implements OnInit {

  calmings: Calming;
  error: string;

  constructor(private calmingService: CalmingService) {}

  ngOnInit() {
    this.calmingService.getCalmings().subscribe(
      (data: Calming) => this.calmings = data,
      error => this.error = error
    );
  }

}
