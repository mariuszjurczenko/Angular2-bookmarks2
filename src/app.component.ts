import { Component } from '@angular/core';
import { BookmarkService } from './bookmark.service';

@Component({
  selector: 'bookmark-app',
  template: `
      <bookmark-edit [bookmark]= editableBookmark
                     (save)="save($event)"></bookmark-edit>

      <bookmark-list (remove)="remove($event)"
                     (edit)="edit($event)"
                     [bookmarks]="bookmarks"></bookmark-list>

  `,
})
export class AppComponent {

  bookmarks = [];
  editableBookmark = { }

  constructor(private bookmarkService : BookmarkService)
  {
    this.reload(); 
  }

  edit(bookmark){
    this.editableBookmark = Object.assign({}, bookmark)
  }

  save(bookmark) {
    if(bookmark.id){
        this.bookmarkService.updateBookmark(bookmark)
          .then(() => this.reload());
    }else{
        this.bookmarkService.addBookmark(bookmark)
          .then(() => this.reload());
    }
    this.editableBookmark = { }
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
