import { Component, OnInit } from '@angular/core';
import { SpecialfService } from '../../../service/specialf.service';
import { Specialf } from '../../../models/specialf';

@Component({
  selector: 'app-facial-st-modal',
  templateUrl: './facial-st-modal.component.html',
  styleUrls: ['./facial-st-modal.component.css']
})
export class FacialSTModalComponent implements OnInit {

  specialfs: Specialf;
  error: string;

  constructor(private specialfService: SpecialfService) { }

  ngOnInit() {
    this.specialfService.getSpecialfs().subscribe(
      (data: Specialf) => this.specialfs = data,
      error => this.error = error
    );
  }

}
