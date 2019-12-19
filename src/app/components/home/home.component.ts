import { Component, OnInit } from '@angular/core';
import { Post } from 'src/app/models/Post';

import {
  DomSanitizer,
  SafeHtml,
  SafeUrl,
  SafeStyle
} from '@angular/platform-browser';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  sanitizer: DomSanitizer;
  pageHeading: string;
  pageDesc: string;
  posts: Post[];

  constructor(private sanitization: DomSanitizer) {
    this.sanitizer = sanitization;
    this.pageHeading = 'A Deep Dive into the Workforce';
    this.pageDesc = 'Read about my experiences and adventures with co-op.';
    this.posts = [];
  }

  ngOnInit() {
    const reader = new FileReader();
    const reader2 = new FileReader();
    const xhr = new XMLHttpRequest();
    let postRequests: XMLHttpRequest[] = [];
    let postReaders: FileReader[] = [];

    reader.onload = (e) => {
        let postNames = (reader.result as string).split('\n');
        let pathName = '';

        for (let i = 0; i < postNames.length; i++) {
          postRequests[i] = new XMLHttpRequest();
          postReaders[i] = new FileReader();
          pathName = postNames[i];
          postRequests[i].open('GET', 'assets/blog/posts/' + postNames[i] + '.md');
          postRequests[i].responseType = 'blob';
          postRequests[i].onload = () => {

            postReaders[i].onload = (e) => {
              let objStr = (postReaders[i].result as string).split('}')[0].replace(/\n/, '') + '}';
              let postObj = JSON.parse(objStr);
              let p: Post = {
                title: postObj.title,
                description: postObj.description,
                date: postObj.date,
                author: postObj.author,
                thumbnail: `url(${postObj.thumbnail})`,
                content: (postReaders[i].result as string).substring((postReaders[i].result as string).indexOf('}') + 1),
                route: postObj.route
              };

              this.posts.push(p);
            };

            postReaders[i].readAsText(postRequests[i].response, 'UTF-8');
          };
          postRequests[i].send();

        }
    };

    xhr.open('GET', 'assets/blog/blog.md');
    xhr.responseType = 'blob';
    xhr.onload = () => {
        reader.readAsText(xhr.response, 'UTF-8');
    };
    xhr.send();
  }

}
