import { Component, OnInit } from '@angular/core';
import { BridalService } from '../../../service/bridal.service';
import { Bridal } from '../../../models/bridal';

@Component({
  selector: 'app-makeup-bridal',
  templateUrl: './makeup-bridal.component.html',
  styleUrls: ['./makeup-bridal.component.css']
})
export class MakeupBridalComponent implements OnInit {

  bridals: Bridal;
  error: string;

  constructor(private bridalService: BridalService) {}

  ngOnInit() {
    this.bridalService.getBridals().subscribe(
      (data: Bridal) => this.bridals = data,
      error => this.error = error
    );
  }

}
