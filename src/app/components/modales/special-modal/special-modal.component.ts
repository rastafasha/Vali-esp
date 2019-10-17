import { Component, OnInit } from '@angular/core';
import { SpecialtService } from '../../../service/specialt.service';
import { Specialt } from '../../../models/specialt';

@Component({
  selector: 'app-special-modal',
  templateUrl: './special-modal.component.html',
  styleUrls: ['./special-modal.component.css']
})
export class SpecialModalComponent implements OnInit {

  specialts: Specialt;
  error: string;

  constructor(private specialtService: SpecialtService) { }

  ngOnInit() {
    this.specialtService.getSpecialts().subscribe(
      (data: Specialt) => this.specialts = data,
      error => this.error = error
    );
  }

}
