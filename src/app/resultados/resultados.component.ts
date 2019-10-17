import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';

// modelos
import { Wax } from '../models/wax';
import { Wrapping } from '../models/wrapping';
import { Specialf } from '../models/specialf';
import { Specialt } from '../models/specialt';
import { Sculpting } from '../models/sculpting';
import { Restorative } from '../models/restorative';
import { Permanent } from '../models/permanent';
import { Luxuring } from '../models/luxury';
import { Look } from '../models/look';
import { Hypertrophic } from '../models/hypertrophic';
import { Hand } from '../models/hand';
import { Fibroface } from '../models/fibroface';
import { Clases } from '../models/clases';
import { Calming } from '../models/calming';
import { Brightening } from '../models/brightening';
import { Bridal } from '../models/bridal';
import { Body } from '../models/body';
import { Antiage } from '../models/antiage';





@Component({
  selector: 'app-resultados',
  templateUrl: './resultados.component.html',
  styleUrls: ['./resultados.component.css']
})
export class ResultadosComponent implements OnInit {

  waxs: Wax[] = [];
  ServerUrl = environment.baseUrl;

  constructor(
    public activateRoute: ActivatedRoute,
    public http: HttpClient
  ) {
    activateRoute.params
      .subscribe( params => {
        let termino = params['termino'];
        this.buscar(termino);
      })
   }

  ngOnInit() {

  }

  buscar( termino: string) {
    let url = this.ServerUrl + 'buscar/todo/' + termino;

    this.http.get(url)
      .subscribe( (resp: any) => {
        this.waxs = resp.waxs; 
      });
  }

  
  

 


}
