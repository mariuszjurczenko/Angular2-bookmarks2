import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'bookmark-edit',
  template: `
  <div class="panel panel-primary">
      <div class="panel-body">
           <input type="text" [(ngModel)]="bookmark.Title"
            placeholder="Title" style="width: 25%;">

           <input type="text" [(ngModel)]="bookmark.Url"
            placeholder="URL" style="width: 50%;">

           <button (click)="onSave()" class="btn btn-primary">Zapisz</button>
      </div>
  </div>
  `,
})
export class BookmarkEditComponent {

    bookmark = {};

    @Output() save = new EventEmitter();

    onSave() {
        this.save.emit(this.bookmark);
    }

}
