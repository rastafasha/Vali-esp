import { Component, OnInit } from '@angular/core';
import { SpecialfService } from '../../../service/specialf.service';
import { Specialf } from '../../../models/specialf';

@Component({
  selector: 'app-facial-special',
  templateUrl: './facial-special.component.html',
  styleUrls: ['./facial-special.component.css']
})
export class FacialSpecialComponent implements OnInit {

  specialfs: Specialf;
  error: string;

  constructor(private specialfService: SpecialfService) {}

  ngOnInit() {
    this.specialfService.getSpecialfs().subscribe(
      (data: Specialf) => this.specialfs = data,
      error => this.error = error
    );
  }

}
