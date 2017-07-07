import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'bookmark-list',
  template: `
  <div class="panel panel-default">
    <table class="table table-striped">
      <tr *ngFor="let bookmark of bookmarks">
        <td>
          <a [href]="bookmark.url" target="_blank">
            {{bookmark.Title}}
          </a>
        </td>
        <td>
          <button (click)="onRemove(bookmark)" class="btn btn-danger">Usuń</button>
        </td>
      </tr>
    </table>
  </div>
  `,
})
export class BookmarkListComponent {

  @Input() bookmarks = [];
  @Output() remove = new EventEmitter();

  onRemove(bookmark){
    this.remove.emit(bookmark);
  }

}
