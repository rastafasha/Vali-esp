import { Component, OnInit } from '@angular/core';
import { LookService } from '../../../service/look.service';
import { Look } from '../../../models/look';

@Component({
  selector: 'app-makeup-look',
  templateUrl: './makeup-look.component.html',
  styleUrls: ['./makeup-look.component.css']
})
export class MakeupLookComponent implements OnInit {

  looks: Look;
  error: string;

  constructor(private lookService: LookService) {}

  ngOnInit() {
    this.lookService.getLooks().subscribe(
      (data: Look) => this.looks = data,
      error => this.error = error
    );
  }


}
