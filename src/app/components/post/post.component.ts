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
  thumbnail: SafeResourceUrl;

  constructor(private route: ActivatedRoute) {}

  ngOnInit() {
    const name = this.route.snapshot.params.name;
    let postStr = "";
    let entries = Object.entries(history.state);
    for(let [key, value] of entries) {
        postStr += value;
        if(value == "}") {
          break;
        }
    }

    let postObj = JSON.parse(postStr);
    this.title = postObj.title;
    this.description = postObj.description;
    this.author = postObj.author;
    this.date = postObj.date;
    this.content = postObj.content;
    this.thumbnail = postObj.thumbnail;
  }

}
