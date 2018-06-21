import {Injectable} from '@angular/core';

@Injectable()
export class AboutService {
  info = {
    nom: 'BOU',
    email: 'walid@bouanani.com',
    tel: 1234
  }
  comments = [
    {
      date: new Date(),
      message: 'A'
    },
    {
      date: new Date(),
      message: 'B'
    },
    {
      date: new Date(),
      message: 'C'
    }
  ];
  commentaire = {
    date: null,
    message: ''
  };
  addComment(c) {
    c.date = new Date();
    this.comments.push(c);
  }
  getAllComment() {
    return this.comments;
  }
  getInfo() {
    return this.info;
  }
}
