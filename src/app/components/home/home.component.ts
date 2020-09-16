import { Component, OnInit } from '@angular/core';
import { Post } from 'src/app/models/Post';
import { FirebaseService } from '../../services/firebase.service';

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
  posts: any[] = null;
  postStrings: string[];

  constructor(private sanitization: DomSanitizer, private firebaseService: FirebaseService) {
    this.sanitizer = sanitization;
    this.pageHeading = 'A Deep Dive into the Workforce';
    this.pageDesc = 'Read about my experiences and adventures with co-op.';
  }

  async ngOnInit() {
    this.posts = await this.firebaseService.getPosts();
  }

}
