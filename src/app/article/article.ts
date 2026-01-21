import { Component, computed, HostBinding, HostListener, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ArticleItem } from './article-item/article-item';
import { ArticleHead } from './article-item/article-head';
import { ArticleFoot } from './article-item/article-foot';

@Component({
  selector: 'app-article',
  imports: [FormsModule, ArticleItem, ArticleHead, ArticleFoot],
  templateUrl: './article.html',
  styleUrl: './article.less',
})
export class Article {
  protected articles = signal<ArticleEntity[]>([]);
  protected title = signal('');
  protected content = signal('');
  protected message = signal('hello');

  isTitleValid = computed(() => {
    const length = this.title().length;
    return length > 3 ? 'is-valid' : length > 0 ? 'is-invalid' : '';
  });

  isContentValid = computed(() => {
    const length = this.content().length;
    return length > 3 ? 'is-valid' : length > 0 ? 'is-invalid' : '';
  });

  deleteArticle(id: number) {
    this.articles.update((articles) => articles.filter((item) => item.id !== id));
  }

  addArticle() {
    if (this.title() === '' || this.content() === '') {
      return alert('please input title and content');
    }

    const article: ArticleEntity = {
      id: this.articles().length + 1,
      title: this.title(),
      content: this.content(),
    };
    // show message
    this.message.set('added: ' + article.title);
    this.articles.update((articles) => [...articles, article]);
    // clear input
    this.title.set('');
    this.content.set('');
  }

  @HostBinding('style')
  get style() {
    return 'background: yellow;'
  }

  @HostListener('click', ['$event'])
  onClickList(e: MouseEvent) {
    console.log((e.target as HTMLElement).innerText)
  }
}
