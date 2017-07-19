import { Injectable } from '@angular/core';
import {Observable} from 'rxjs/Observable';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

import { ContentItem } from '../model/content.model';
import { Links } from '../model/content.model';

@Injectable()
export class ContentService {
  temp: Observable<Array<ContentItem>>;
  constructor(private http: Http) {}

  fetchContent() {
    return this.http.get('https://api.github.com/repos/iiitv/algos/contents').map(
      (response) => response.json()
    )
  }
}
