import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { BookmarkService } from './bookmark.service';
import { AppComponent } from './app.component';
import { BookmarkEditComponent } from './bookmark-edit.component';
import { BookmarkListComponent } from './bookmark-list.component';



@NgModule({
  imports: [BrowserModule, FormsModule, HttpModule],
  declarations: [AppComponent,BookmarkListComponent,BookmarkEditComponent],
  providers: [BookmarkService],
  bootstrap: [AppComponent]
})
export class AppModule { }
