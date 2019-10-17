import { Component, OnInit} from '@angular/core';
import { WaxinfoService } from '../../service/waxinfo.service';
import { Waxinfo } from '../../models/waxinfo';

@Component({
  selector: 'app-waxinfo',
  templateUrl: './waxinfo.component.html',
  styleUrls: ['./waxinfo.component.css']
})
export class WaxinfoComponent implements OnInit {
  waxinfos: Waxinfo;
  error: string;

  idioma = false;

  title: string;
  titleesp: string;
  description: string;
  descriptionesp: string;

  constructor(private waxinfoService: WaxinfoService ) {
   }

  ngOnInit() {

    this.waxinfoService.getWaxinfos().subscribe(
      (data: Waxinfo) => this.waxinfos = data,
      error => this.error = error
    );
    this.idioma = true;
  }

}
