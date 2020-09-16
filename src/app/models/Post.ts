import { SafeResourceUrl } from '@angular/platform-browser';

export class Post {
    title: string;
    description: string;
    author: string;
    date: string;
    content: string;
    thumbnail: SafeResourceUrl;
    route: string;
    postString: string;
}
