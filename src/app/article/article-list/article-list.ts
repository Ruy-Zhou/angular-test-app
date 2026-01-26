import { UpperCasePipe } from "@angular/common";
import { Component, EventEmitter, Input, model, Output, Signal, signal } from "@angular/core";
@Component({
  selector: 'article-list',
  templateUrl: './article-list.html',
  imports: [UpperCasePipe]
})
export class ArticleList {
  @Input() articles = signal<ArticleEntity[]>([])
  @Output() deleteArticle = new EventEmitter()
  message = model<string>('')

  onDeleteArticle(id: number) {
    this.deleteArticle.emit(id)
    this.message.set('deleted: ' + id);
  }
}
