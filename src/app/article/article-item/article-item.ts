import { Component, EventEmitter, Input, model, Output, Signal, signal } from "@angular/core";
@Component({
  selector: 'app-article-item, article-head, article-foot',
  templateUrl: './article-item.html',
})
export class ArticleItem {
  @Input() articles: Signal<ArticleEntity[]> = signal([]);
  @Output() deleteArticle = new EventEmitter<number>();
  message = model<string>('');

  onDeleteArticle(id: number) {
    this.deleteArticle.emit(id);
    this.message.set('deleted: ' + id);
  }
}
