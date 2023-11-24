import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { PostCard } from '../interfaces/post-card';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class PostsService {
  #path = `http://localhost:3000/posts`;

  constructor(private readonly http: HttpClient) {}

  getPosts(): Observable<PostCard[]> {
    return this.http.get<PostCard[]>(this.#path);
  }
}
