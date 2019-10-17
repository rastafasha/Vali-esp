import { Component, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';


@Component({
  selector: 'app-translation',
  templateUrl: './translation.component.html',
  styleUrls: ['./translation.component.css']
})
export class TranslationComponent implements OnInit {

  flag = false;

  public activeLang = 'en';

  constructor(private translate: TranslateService) {
    this.translate.setDefaultLang(this.activeLang);
  }
  ngOnInit() {
    this.flag = true;

  }
  public cambiarLenguaje(lang) {
    this.activeLang = lang;
    this.translate.use(lang);
    this.flag = !this.flag;
  }


}
