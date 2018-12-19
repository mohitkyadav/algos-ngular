import { map } from 'rxjs/operators';
import { Injectable } from '@angular/core';
import {Observable} from 'rxjs';
import { Http } from '@angular/http';


import { ContentItem } from '../model/content.model';
import { Links } from '../model/content.model';

@Injectable()
export class ContentService {
  constructor(private http: Http) {}

  fetchContent() {
    return this.http.get('https://api.github.com/repos/iiitv/algos/contents').pipe(map(
      (response) => response.json()
    ))
  }
  fetchFolderContent(content_url) {
    return this.http.get(content_url).pipe(map(
      (response) => response.json()
    ))
  }
}
