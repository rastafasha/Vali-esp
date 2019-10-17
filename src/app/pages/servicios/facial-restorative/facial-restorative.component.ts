import { Component, OnInit } from '@angular/core';
import { RestorativeService } from '../../../service/restorative.service';
import { Restorative } from '../../../models/restorative';

@Component({
  selector: 'app-facial-restorative',
  templateUrl: './facial-restorative.component.html',
  styleUrls: ['./facial-restorative.component.css']
})
export class FacialRestorativeComponent implements OnInit {

  restoratives: Restorative;
  error: string;

  constructor(private restorativeService: RestorativeService) {}

  ngOnInit() {
    this.restorativeService.getRestoratives().subscribe(
      (data: Restorative) => this.restoratives = data,
      error => this.error = error
    );
  }

}
