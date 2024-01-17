import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class ArticleService {

  urlArticles = 'http://127.0.0.1:8080/articles';
  article: any;

  constructor(private Http: HttpClient) { }

  listArticles() {
    return this.Http.get(this.urlArticles);
  }

  createArticle(myform: any) {
    this.article = {
      'label': myform.value.label,
      'price': myform.value.price,
      'picture': myform.value.picture
    }
    return this.Http.post(this.urlArticles+"/"+myform.value.providerId, this.article);
  }
}
