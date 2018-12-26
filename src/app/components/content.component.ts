import { Component, Input, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { ContentService } from '../services/content.service';
import { ContentItem } from '../model/content.model';
import { Http } from '@angular/http';
import { map } from 'rxjs/operators';


const Prism = require('prismjs');

import 'prismjs';
import 'prismjs/components/prism-java';
import 'prismjs/components/prism-go';
import 'prismjs/components/prism-csharp';
import 'prismjs/components/prism-python';

import { Links } from '../model/content.model';

@Component({
  // `component-selector` is disabled because of https://github.com/mgechev/codelyzer/issues/192
  selector: 'content', // tslint:disable-line component-selector
  templateUrl: '../views/content.component.html',
  styleUrls: ['../views/content.component.css']
})
export class ContentComponent implements OnInit {
  contentItemsTemp: Observable<Array<ContentItem>>;
  contentItems: Array<ContentItem>;
  folderItems: Array<ContentItem>;
  detailsTemp: Observable<string>;
  code_c: any;
  code_cpp: string;
  code_java: string;
  code_js: string;
  code_go: string;
  code_py: string;
  code_cs: string;
  download_url: string;
  isLoading: boolean;

  constructor(private contentService: ContentService, private http: Http) {}

  ngOnInit() {
    this.contentItemsTemp = this.contentService.fetchContent();
    this.contentItemsTemp.subscribe(
      (data) => this.contentItems = data.filter(elem => elem.type !== 'file' && elem.name !== '.bin')
    );
    this.isLoading = false;
  }
  fetchCode(item): any {
    this.isLoading = true;
    for (let i = 0; i < this.contentItems.length; i++) {
      if (item.srcElement) {
        if (item.srcElement.outerText === this.contentItems[i].name) {
          const contentsUrl = `https://api.github.com/repos/iiitv/algos/contents/${item.srcElement.outerText}`;
          this.contentItemsTemp = this.contentService.fetchFolderContent(contentsUrl);
          this.contentItemsTemp.subscribe(
            (data) => this.getCodes(data)
          );
          break;
        }
      }
      if (item.originalTarget) {
        if (item.originalTarget.innerText === this.contentItems[i].name) {
          const contentsUrl = `https://api.github.com/repos/iiitv/algos/contents/${item.originalTarget.innerText}`;
          this.contentItemsTemp = this.contentService.fetchFolderContent(contentsUrl);
          this.contentItemsTemp.subscribe(
            (data) => this.getCodes(data)
          );
          break;
        }
      }
    }

  }
  getCode(url, type) {
    this.detailsTemp = this.http.get(url).pipe(map(
      (res) => res.text()
    ));
    if (type === 'c') {
    this.detailsTemp.subscribe(
      (data) => this.code_c = Prism.highlight(data, Prism.languages.csharp)
    );
    }
    if (type === 'cpp') {
    this.detailsTemp.subscribe(
      (data) => this.code_cpp = Prism.highlight(data, Prism.languages.csharp)
    );
    }
    if (type === 'java') {
    this.detailsTemp.subscribe(
      (data) => this.code_java = Prism.highlight(data, Prism.languages.java)
    );
    }
    if (type === 'py') {
    this.detailsTemp.subscribe(
      (data) => this.code_py = Prism.highlight(data, Prism.languages.python)
    );
    }
    if (type === 'go') {
    this.detailsTemp.subscribe(
      (data) => this.code_go = Prism.highlight(data, Prism.languages.go)
    );
    }
    if (type === 'js') {
    this.detailsTemp.subscribe(
      (data) => this.code_js = Prism.highlight(data, Prism.languages.javascript)
    );
    }
    if (type === 'cs') {
    this.detailsTemp.subscribe(
      (data) => this.code_cs = Prism.highlight(data, Prism.languages.csharp)
    );
    }
  }
  getCodes(data) {
    let jk: string;
    let flag, c, java, go, js, py, cpp = false;
    for (let i = 0; i < data.length; i++) {
      const fileName = data[i].name;
      jk = '';
      flag = false;
      for (let j = 0; j < fileName.length; j++) {
        if (flag) {
          jk += fileName[j];
        }
        if (fileName[j] === '.') {
          flag = true;
        }
      }
      if (jk === 'c') { c = true; }
      if (jk === 'java') { java = true; }
      if (jk === 'go') { go = true; }
      if (jk === 'js') { js = true; }
      if (jk === 'cpp') { cpp = true; }
      if (jk === 'py') { py = true; }
      this.getCode(data[i].download_url, jk);
    }
    if (!c) { this.code_c = null; }
    if (!cpp) { this.code_cpp = null; }
    if (!java) { this.code_java = null; }
    if (!go) { this.code_go = null; }
    if (!js) { this.code_js = null; }
    if (!py) { this.code_py = null; }
    this.isLoading = false;
  }
}
