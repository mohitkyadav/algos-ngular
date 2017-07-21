import { Component, Input } from '@angular/core';
import {Observable} from 'rxjs/Observable';

import { ContentService } from '../services/content.service';
import { ContentItem } from '../model/content.model';
import { Links } from '../model/content.model';

@Component({
  selector: 'content',
  templateUrl: '../views/content.component.html',
  styleUrls: ['../views/content.component.css']
})
export class ConentComponent {
  contentItemsTemp: Observable<Array<ContentItem>>;
  contentItems: Array<ContentItem>;

  constructor(private contentService: ContentService) {}

  ngOnInit() {
    this.contentItemsTemp = this.contentService.fetchContent();
    this.contentItemsTemp.subscribe(
      (data) => this.contentItems = data.slice(12)
    )
  }
  animate() {
    console.log("clicked");
  }
}
