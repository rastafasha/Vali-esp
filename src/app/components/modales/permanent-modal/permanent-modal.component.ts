import { Component, OnInit } from '@angular/core';
import { PermanentService } from '../../../service/permanent.service';
import { Permanent } from '../../../models/permanent';

@Component({
  selector: 'app-permanent-modal',
  templateUrl: './permanent-modal.component.html',
  styleUrls: ['./permanent-modal.component.css']
})
export class PermanentModalComponent implements OnInit {

  permanents: Permanent;
  error: string;

  constructor(private permanentService: PermanentService) { }

  ngOnInit() {
    this.permanentService.getPermanents().subscribe(
      (data: Permanent) => this.permanents = data,
      error => this.error = error
    );
  }

}
