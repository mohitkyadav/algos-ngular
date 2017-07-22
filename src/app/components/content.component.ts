import { Component, Input } from '@angular/core';
import {Observable} from 'rxjs/Observable';

import { ContentService } from '../services/content.service';
import { ContentItem } from '../model/content.model';
import { Http } from '@angular/http';
import { Links } from '../model/content.model';

@Component({
  selector: 'content',
  templateUrl: '../views/content.component.html',
  styleUrls: ['../views/content.component.css']
})
export class ConentComponent {
  contentItemsTemp: Observable<Array<ContentItem>>;
  contentItems: Array<ContentItem>;
  detailsTemp: Observable<string>;
  details: string;

  constructor(private contentService: ContentService, private http: Http) {}

  ngOnInit() {
    this.detailsTemp = this.http.get('https://raw.githubusercontent.com/iiitv/algos/master/.coafile').map(
      (res) => res.toString()
    );
    this.detailsTemp.subscribe(
      (data) => this.details = data
    );
    this.contentItemsTemp = this.contentService.fetchContent();
    this.contentItemsTemp.subscribe(
      (data) => this.contentItems = data.slice(12)
    )
  }
  animate() {
    console.log("clicked");
  }
}
