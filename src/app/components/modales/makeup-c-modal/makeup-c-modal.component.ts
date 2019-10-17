import { Component, OnInit } from '@angular/core';
import { ClasesService } from '../../../service/clases.service';
import { Clases } from '../../../models/clases';

@Component({
  selector: 'app-makeup-c-modal',
  templateUrl: './makeup-c-modal.component.html',
  styleUrls: ['./makeup-c-modal.component.css']
})
export class MakeupCModalComponent implements OnInit {

  clasess: Clases;
  error: string;

  constructor(private clasesService: ClasesService) { }

  ngOnInit() {
    this.clasesService.getClasess().subscribe(
      (data: Clases) => this.clasess = data,
      error => this.error = error
    );
  }

}
