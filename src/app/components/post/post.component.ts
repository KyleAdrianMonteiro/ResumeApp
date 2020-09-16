import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { SafeResourceUrl } from '@angular/platform-browser';
import { FirebaseService } from 'src/app/services/firebase.service';

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

  constructor(private route: ActivatedRoute, private firebaseService: FirebaseService) {}

  ngOnInit() {
    const name = this.route.snapshot.params.name;
    this.firebaseService.getPost(name as string).then((postObj) => {
      console.log(postObj);
      this.title = postObj.title;
      this.description = postObj.description;
      this.author = postObj.author;
      this.date = postObj.date;
      this.content = postObj.content;
      this.thumbnail = postObj.thumbnail;
    });
  }

}
