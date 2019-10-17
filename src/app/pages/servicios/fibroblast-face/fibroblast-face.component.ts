import { Component, OnInit } from '@angular/core';
import { FibrofaceService } from '../../../service/fibroface.service';
import { Fibroface } from '../../../models/fibroface';

@Component({
  selector: 'app-fibroblast-face',
  templateUrl: './fibroblast-face.component.html',
  styleUrls: ['./fibroblast-face.component.css']
})
export class FibroblastFaceComponent implements OnInit {

  fibrofaces: Fibroface;
  error: string;

  constructor(private fibrofaceService: FibrofaceService) {}

  ngOnInit() {
    this.fibrofaceService.getFibrofaces().subscribe(
      (data: Fibroface) => this.fibrofaces = data,
      error => this.error = error
    );
  }

}
