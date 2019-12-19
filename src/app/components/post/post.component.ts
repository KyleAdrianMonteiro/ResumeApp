import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { SafeResourceUrl } from '@angular/platform-browser';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css']
})
export class PostComponent implements OnInit {


  title: string;
  description: string;
  author: string;
  date: string;
  content: string;
  filePath: string;
  thumbnail: SafeResourceUrl;

  constructor(private route: ActivatedRoute) {}

  ngOnInit() {
    const name = this.route.snapshot.params.name;

    const reader = new FileReader();
    const xhr = new XMLHttpRequest();

    reader.onload = (e) => {
        const firstLine = (reader.result as string).split('}')[0].replace(/\n/, '');
        const postObj = JSON.parse(firstLine + '}');
        this.title = postObj.title;
        this.description = postObj.description;
        this.date = postObj.date;
        this.author = postObj.author;
        this.content = (reader.result as string).substring((reader.result as string).indexOf('}') + 1);
        this.thumbnail = postObj.thumbnail;
    };

    this.filePath = 'assets/blog/posts/' + name + '.md';

    xhr.open('GET', this.filePath);
    xhr.responseType = 'blob';
    xhr.onload = () => {
        reader.readAsText(xhr.response, 'UTF-8');
    };
    xhr.send();
  }

}
