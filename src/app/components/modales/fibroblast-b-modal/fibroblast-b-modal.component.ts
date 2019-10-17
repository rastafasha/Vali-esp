import { Component, OnInit } from '@angular/core';
import { BodyService } from '../../../service/body.service';
import { Body } from '../../../models/body';

@Component({
  selector: 'app-fibroblast-b-modal',
  templateUrl: './fibroblast-b-modal.component.html',
  styleUrls: ['./fibroblast-b-modal.component.css']
})
export class FibroblastBModalComponent implements OnInit {
  bodys: Body;
  error: string;

  constructor(private waxService: BodyService) { }

  ngOnInit() {
    this.waxService.getBodys().subscribe(
      (data: Body) => this.bodys = data,
      error => this.error = error
    );
  }

}
