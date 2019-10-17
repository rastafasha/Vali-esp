import { Component, OnInit } from '@angular/core';
import { WrappingService } from '../../../service/wrapping.service';
import { Wrapping } from '../../../models/wrapping';

@Component({
  selector: 'app-body-w-modal',
  templateUrl: './body-w-modal.component.html',
  styleUrls: ['./body-w-modal.component.css']
})
export class BodyWModalComponent implements OnInit {

  wrappings: Wrapping;
  error: string;

  constructor(private wrappingService: WrappingService) { }

  ngOnInit() {
    this.wrappingService.getWrappings().subscribe(
      (data: Wrapping) => this.wrappings = data,
      error => this.error = error
    );
  }

}
