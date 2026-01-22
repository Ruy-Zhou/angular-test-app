import { UpperCasePipe } from "@angular/common";
import { Component, EventEmitter, Input, model, Output, Signal, signal } from "@angular/core";
@Component({
  selector: 'app-article-item',
  templateUrl: './article-item.html',
  imports: [UpperCasePipe]
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
