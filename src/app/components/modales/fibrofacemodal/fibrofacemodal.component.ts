import { Component, OnInit } from '@angular/core';
import { FibrofaceService } from '../../../service/fibroface.service';
import { Fibroface } from '../../../models/fibroface';

@Component({
  selector: 'app-fibrofacemodal',
  templateUrl: './fibrofacemodal.component.html',
  styleUrls: ['./fibrofacemodal.component.css']
})
export class FibrofacemodalComponent implements OnInit {

  fibrofaces: Fibroface;
  error: string;

  constructor(private fibrofaceService: FibrofaceService) { }

  ngOnInit() {
    this.fibrofaceService.getFibrofaces().subscribe(
      (data: Fibroface) => this.fibrofaces = data,
      error => this.error = error
    );
  }

}
