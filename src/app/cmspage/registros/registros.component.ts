import { Component, OnInit } from '@angular/core';
import { CmspageService } from '../../cmspage/cmspage.service';
import { Subcriptores } from '../registros';
import { Router } from '@angular/router';

@Component({
  selector: 'app-registros',
  templateUrl: './registros.component.html',
  styleUrls: ['./registros.component.css']
})
export class RegistrosComponent implements OnInit {

  model = new Subcriptores();
  submitted = false;
  error: any = {};

  constructor(
    private router: Router,
    private cmspageService: CmspageService
  ) { }

  ngOnInit() {
  }


  onSubmit() {
    this.submitted = true;
    return this.cmspageService.registroForm(this.model).subscribe(
      data => this.model = data,
      error => this.error = error
    );
  }

  gotoHome() {
    this.router.navigate(['/']);
  }
}
