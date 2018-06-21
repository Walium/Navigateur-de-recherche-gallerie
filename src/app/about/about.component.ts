import { Component, OnInit } from '@angular/core';
import {AboutService} from '../../services/about.service';


@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {
  info: any;
  comments = [];
  commentaire = {date: null, message: ''};
  constructor(private aboutService: AboutService) {
  this.info = this.aboutService.getInfo();
  this.comments = this.aboutService.getAllComment();
  }

  ngOnInit() {
  }
  onAddCommentaire(c) {
    this.aboutService.addComment(c)
    this.commentaire.message = '';
    this.comments = this.aboutService.getAllComment();
  }

}
