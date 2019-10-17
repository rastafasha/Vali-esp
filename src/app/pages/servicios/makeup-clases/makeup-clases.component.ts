import { Component, OnInit } from '@angular/core';
import { ClasesService } from '../../../service/clases.service';
import { Clases } from '../../../models/clases';

@Component({
  selector: 'app-makeup-clases',
  templateUrl: './makeup-clases.component.html',
  styleUrls: ['./makeup-clases.component.css']
})
export class MakeupClasesComponent implements OnInit {

  clasess: Clases;
  error: string;

  constructor(private clasesService: ClasesService) {}

  ngOnInit() {
    this.clasesService.getClasess().subscribe(
      (data: Clases) => this.clasess = data,
      error => this.error = error
    );
  }


}
