import { Component, Input } from '@angular/core';
import { Observable } from 'rxjs/Observable';
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
  folderItems: Array<ContentItem>;
  detailsTemp: Observable<string>;
  code_c: string;
  code_cpp: string;
  code_java: string;
  code_js: string;
  code_go: string;
  code_py: string;
  download_url: string;

  constructor(private contentService: ContentService, private http: Http) {}

  ngOnInit() {
    this.contentItemsTemp = this.contentService.fetchContent();
    this.contentItemsTemp.subscribe(
      (data) => this.contentItems = data.slice(12)
    )
  }
  animate(item) {
    console.log(this.download_url);
    console.log(item);
    for(var i = 0;i<this.contentItems.length;i++) {
      if(item.srcElement.outerText == this.contentItems[i].name) {
        this.contentItemsTemp = this.contentService.fetchFolderContent('https://api.github.com/repos/iiitv/algos/contents/' + item.srcElement.outerText);
        this.contentItemsTemp.subscribe(
          (data) => this.download_url = data[0].download_url,
        )
        console.log(this.download_url);
        break;
      }
    }
    this.detailsTemp = this.http.get(this.download_url).map(
      (res) => res.text(),
    );
    this.detailsTemp.subscribe(
      (data) => this.code_c = data
    );
  }
}
