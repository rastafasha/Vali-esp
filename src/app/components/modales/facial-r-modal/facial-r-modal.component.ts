import { Component, OnInit } from '@angular/core';
import { RestorativeService } from '../../../service/restorative.service';
import { Restorative } from '../../../models/restorative';

@Component({
  selector: 'app-facial-r-modal',
  templateUrl: './facial-r-modal.component.html',
  styleUrls: ['./facial-r-modal.component.css']
})
export class FacialRModalComponent implements OnInit {

  restoratives: Restorative;
  error: string;

  constructor(private restorativeService: RestorativeService) { }

  ngOnInit() {
    this.restorativeService.getRestoratives().subscribe(
      (data: Restorative) => this.restoratives = data,
      error => this.error = error
    );
  }

}
