import { Component } from '@angular/core';
import { BookmarkService } from './bookmark.service';

@Component({
  selector: 'bookmark-app',
  template: `
      <bookmark-edit (save)="save($event)"></bookmark-edit>
      <bookmark-list (remove)="remove($event)" [bookmarks]="bookmarks"></bookmark-list>

  `,
})
export class AppComponent {

  bookmarks = [];

  constructor(private bookmarkService : BookmarkService)
  {
    this.reload(); 
  }

  save(bookmark) {
    this.bookmarkService.addBookmark(bookmark)
      .then(() => this.reload());
  }

  remove(bookmark){
    this.bookmarkService.removeBookmark(bookmark)
        .then(() => this.reload());
  }

  private reload() {
    return this.bookmarkService.getBookmarks()
      .then(bookmarks => this.bookmarks = bookmarks);
  }
}
