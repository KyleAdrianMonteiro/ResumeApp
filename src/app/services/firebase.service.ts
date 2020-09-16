import { Injectable } from '@angular/core';
import * as firebase from 'firebase/app';
import 'firebase/storage';
import { Post } from 'src/app/models/Post';


@Injectable({
  providedIn: 'root',
})
export class FirebaseService {

    private storage: any;
    private firebaseConfig = {
        apiKey: "AIzaSyBanHleu052F63C8zY6bHexB5PowFagpgo",
        authDomain: "resumeapp-f48ce.firebaseapp.com",
        databaseURL: "https://resumeapp-f48ce.firebaseio.com",
        projectId: "resumeapp-f48ce",
        storageBucket: "resumeapp-f48ce.appspot.com",
        messagingSenderId: "1019813597438",
        appId: "1:1019813597438:web:791afc2dde02d6bef055af",
        measurementId: "G-EEV31HLHY8",
      };

    private posts: Promise<any>;


    constructor() {
        this.init();
     }

    async init() {
        firebase.initializeApp(this.firebaseConfig);
        this.storage = firebase.storage();
        this.posts = this.retrievePosts();
        console.log(this.posts);
    }

    async getPostNames(): Promise<any> {
        const posts: Promise<any> = new Promise((resolve, reject) => {
            this.storage.ref('blog.md').getDownloadURL().then((url: any) => {
                const xhr = new XMLHttpRequest();
                const reader = new FileReader();
                xhr.responseType = 'blob';
                xhr.onload = (event) => {
                    reader.onload = () => {
                        resolve(reader.result as string);
                    }
                    reader.readAsText(xhr.response, 'UTF-8');
                };

                xhr.open('GET', url);
                xhr.send();
            });
        });
        return posts;
    }

    async getFile(name: string): Promise<any> {
        const file: Promise<any> = new Promise((resolve, reject) => {
            this.storage.ref(name).getDownloadURL().then((url: any) => {
                const xhr = new XMLHttpRequest();
                const reader = new FileReader();
                xhr.responseType = 'blob';
                xhr.onload = (event) => {
                    reader.onload = () => {
                        resolve(reader.result as string);
                    }
                    reader.readAsText(xhr.response, 'UTF-8');
                };

                xhr.open('GET', url);
                xhr.send();
            });
        });
        return file;
    }

    getPost(name: string): Promise<any> {
        let post = new Promise((resolve, reject) => {
            this.posts.then((result) => {
                for(let p of result) {
                    if(p && p.route == name) {
                        resolve(p);
                    }
                }
            });
        });
        return post;
    }

    getPosts() {
        return this.posts;
    }

    async retrievePosts() {
        let posts: Promise<any> = new Promise((resolve, reject) => {
            this.getFile('blog.md').then((result) => {
                let postNames = result.split("\r\n");
                let postArr: Post[] = [];
                for (let [i, name] of postNames.entries()) {
                  this.getFile(name + ".md").then((result) => {
                    let objStr = (result as string).split('}')[0].replace(/\n/, '') + '}';
                    let postObj = JSON.parse(objStr);
                    let p: Post = {
                      title: postObj.title,
                      description: postObj.description,
                      date: postObj.date,
                      author: postObj.author,
                      thumbnail: `url(${postObj.thumbnail})`,
                      content: (result as string).substring((result as string).indexOf('}') + 1),
                      route: postObj.route,
                      postString: ''
                    };
    
                    p.postString = JSON.stringify(p);
                    p.postString = p.postString;
                    postArr[i] = p;

                    if(i == postNames.length - 1) {
                        resolve(postArr);
                    }

                  });
                }
            });
        });
        return posts;
    }

    getStorage() {
        return this.storage;
    }

}