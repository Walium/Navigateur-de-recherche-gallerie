import {Injectable} from '@angular/core';
import {Http} from '@angular/http';

@Injectable()
export class GalleryService {
  constructor(private http: Http) {
  }
  search(motCle: string, size: number, page: number) {
    return this.http.get(
      'https://pixabay.com/api/?key=9090534-cab22492b968d79466a7db936&q='
      + motCle + '&per_page='
      + size + '&page=' + page)
      .map(resp => resp.json())
  }
}
