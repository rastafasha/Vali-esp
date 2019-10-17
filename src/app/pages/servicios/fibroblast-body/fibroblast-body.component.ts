import { Component, OnInit } from '@angular/core';
import { BodyService } from '../../../service/body.service';
import { Body } from '../../../models/body';

@Component({
  selector: 'app-fibroblast-body',
  templateUrl: './fibroblast-body.component.html',
  styleUrls: ['./fibroblast-body.component.css']
})
export class FibroblastBodyComponent implements OnInit {

  bodys: Body;
  error: string;

  constructor(private bodyService: BodyService) {}

  ngOnInit() {
    this.bodyService.getBodys().subscribe(
      (data: Body) => this.bodys = data,
      error => this.error = error
    );
  }
}
