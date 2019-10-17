import { Component, OnInit } from '@angular/core';
import { WrappingService } from '../../../service/wrapping.service';
import { Wrapping } from '../../../models/wrapping';

@Component({
  selector: 'app-body-wrapping',
  templateUrl: './body-wrapping.component.html',
  styleUrls: ['./body-wrapping.component.css']
})
export class BodyWrappingComponent implements OnInit {

  wrappings: Wrapping;
  error: string;

  constructor(private wrappingService: WrappingService) {}

  ngOnInit() {
    this.wrappingService.getWrappings().subscribe(
      (data: Wrapping) => this.wrappings = data,
      error => this.error = error
    );
  }
}
