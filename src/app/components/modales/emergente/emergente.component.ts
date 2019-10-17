import { Component, OnInit } from '@angular/core';
import { ModalService } from '../../../service/modal.service';
import { Modal } from '../../../models/modal';

@Component({
  selector: 'app-emergente',
  templateUrl: './emergente.component.html',
  styleUrls: ['./emergente.component.css']
})
export class EmergenteComponent implements OnInit {

  modals: Modal;
  error: string;
  image: string;

  constructor(private modalService: ModalService) { }

  ngOnInit() {
    this.modalService.getModals().subscribe(
      (data: Modal) => this.modals = data,
      error => this.error = error
    );
  }

}
