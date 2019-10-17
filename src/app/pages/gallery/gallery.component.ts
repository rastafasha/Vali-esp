import { Component, OnInit } from '@angular/core';
import { GalleryService } from '../../service/gallery.service';
import { Gallery } from '../../models/gallery';

@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.css']
})
export class GalleryComponent implements OnInit {

  gallerys: Gallery;
  error: string;

  constructor(private galleryService: GalleryService) {}

  ngOnInit() {
    this.galleryService.getGallerys().subscribe(
      (data: Gallery) => this.gallerys = data,
      error => this.error = error
    );
  }

}
