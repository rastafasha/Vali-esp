import { Component, OnInit } from '@angular/core';
import { BridalService } from '../../../service/bridal.service';
import { Bridal } from '../../../models/bridal';

@Component({
  selector: 'app-makeup-b-modal',
  templateUrl: './makeup-b-modal.component.html',
  styleUrls: ['./makeup-b-modal.component.css']
})
export class MakeupBModalComponent implements OnInit {

  bridals: Bridal;
  error: string;

  constructor(private bridalService: BridalService) { }

  ngOnInit() {
    this.bridalService.getBridals().subscribe(
      (data: Bridal) => this.bridals = data,
      error => this.error = error
    );
  }

}
