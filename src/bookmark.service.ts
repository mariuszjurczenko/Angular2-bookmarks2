import { Injectable } from '@angular/core';
import { Http } from '@angular/http';

@Injectable()
export class BookmarkService {

    private baseUrl = 'https://angular2test-28483.firebaseio.com/';

    //private baseUrl = 'https://CHANGE-ME.firebaseio.com';

    constructor(private http: Http) { }

    addBookmark(bookmark) {
        const json = JSON.stringify(bookmark);
        return this.http.post(`${this.baseUrl}/bookmarks.json`, json)
        .toPromise();  
    }

    updateBookmark(bookmark) {
        const json = JSON.stringify({
            Title: bookmark.Title,
            Url: bookmark.Url
        });
        return this.http.patch(`${this.baseUrl}/bookmarks/${bookmark.id}.json`, json)
        .toPromise();  
    }

    removeBookmark(bookmark){
         return this.http.delete(`${this.baseUrl}/bookmarks/${bookmark.id}.json`)
        .toPromise();  
    }

    getBookmarks() {
        return this.http.get(`${this.baseUrl}/bookmarks.json`)
                     .toPromise()
                     .then(response => this.convert(response.json()));
    }

    private convert(convertResponse){
       return Object.keys(convertResponse)
                .map(id => ({
                    id: id,
                    Title: convertResponse[id].Title,
                    Url: convertResponse[id].Url
                }))
                .sort((a,b) => a.Title.localeCompare(b.Title));
    }
}