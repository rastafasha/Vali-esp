import { Component, OnInit } from '@angular/core';
import { HypertrophicService } from '../../../service/hypertrophic.service';
import { Hypertrophic } from '../../../models/hypertrophic';

@Component({
  selector: 'app-fibroblast-h-modal',
  templateUrl: './fibroblast-h-modal.component.html',
  styleUrls: ['./fibroblast-h-modal.component.css']
})
export class FibroblastHModalComponent implements OnInit {

  hypertrophics: Hypertrophic;
  error: string;

  constructor(private hypertrophicService: HypertrophicService) { }

  ngOnInit() {
    this.hypertrophicService.getHypertrophics().subscribe(
      (data: Hypertrophic) => this.hypertrophics = data,
      error => this.error = error
    );
  }

}
