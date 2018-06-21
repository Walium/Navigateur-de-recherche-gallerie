import { Component, OnInit } from '@angular/core';
import {Http} from '@angular/http';
import 'rxjs/add/operator/map';
import {GalleryService} from '../../services/gallery.service';

@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.css']
})
export class GalleryComponent implements OnInit {

  pagePhotos: any;
  currentPage = 1;
  size = 5;
  pages: Array<number> = [];
  totalPages: number;
  motCle: '';
  constructor(private galleryService: GalleryService) { }

  ngOnInit() {
  }

  onSearch(dataForm) {
    this.galleryService.search(dataForm.motCle, this.size, this.currentPage)
      .subscribe(data => {
        console.log(data);
        this.pagePhotos = data;
        this.totalPages = data.totalHits / this.size;
        if (data.totalHits % this.size !== 0) {
          ++this.totalPages;
        }
        this.pages = new Array(this.totalPages);
      }, err => {
        console.log(err);
      });
  }
  goToPage(i) {
    this.currentPage = i + 1;
    this.onSearch({motCle: this.motCle});
  }

}
