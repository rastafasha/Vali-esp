import { Component, OnInit } from '@angular/core';
import {LookService} from '../../../service/look.service';
import { Look } from '../../../models/look';

@Component({
  selector: 'app-makeup-l-modal',
  templateUrl: './makeup-l-modal.component.html',
  styleUrls: ['./makeup-l-modal.component.css']
})
export class MakeupLModalComponent implements OnInit {

  looks: Look;
  error: string;

  constructor(private lookService: LookService) { }

  ngOnInit() {
    this.lookService.getLooks().subscribe(
      (data: Look) => this.looks = data,
      error => this.error = error
    );
  }

}
