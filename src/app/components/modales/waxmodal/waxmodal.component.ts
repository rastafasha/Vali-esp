import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { WaxService } from '../../../service/wax.service';
import { Wax } from '../../../models/wax';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-waxmodal',
  templateUrl: './waxmodal.component.html',
  styleUrls: ['./waxmodal.component.css']
})
export class WaxmodalComponent implements OnInit {

  waxs: Wax;
  error: string;
  editorContent: string;

  public activeLang = 'en';

  public flag : boolean = false;

  constructor(private waxService: WaxService, 
    private activateRouter: ActivatedRoute,
    private translate: TranslateService,
    private router: Router,
    ) {
      this.translate.setDefaultLang(this.activeLang);
    }

  ngOnInit() {
    this.waxService.getWaxs().subscribe(
      (data: Wax) => this.waxs = data,
      error => this.error = error
    );

    
  }

  cambiarLenguaje() {
    this.flag= this.flag; 
  }

}

