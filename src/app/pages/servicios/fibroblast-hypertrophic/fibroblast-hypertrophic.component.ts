import { Component, OnInit } from '@angular/core';
import { HypertrophicService } from '../../../service/hypertrophic.service';
import { Hypertrophic } from '../../../models/hypertrophic';

@Component({
  selector: 'app-fibroblast-hypertrophic',
  templateUrl: './fibroblast-hypertrophic.component.html',
  styleUrls: ['./fibroblast-hypertrophic.component.css']
})
export class FibroblastHypertrophicComponent implements OnInit {

  hypertrophics: Hypertrophic;
  error: string;

  constructor(private hypertrophicService: HypertrophicService) {}

  ngOnInit() {
    this.hypertrophicService.getHypertrophics().subscribe(
      (data: Hypertrophic) => this.hypertrophics = data,
      error => this.error = error
    );
  }
}
