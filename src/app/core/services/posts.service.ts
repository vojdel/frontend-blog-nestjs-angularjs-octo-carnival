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

  getPosts(currentPage: number, itemsPerPage: number): Observable<PostCard[]> {
    return this.http.get<PostCard[]>(
      `${this.#path}?_page=${currentPage}&_limit=${itemsPerPage}`
    );
  }

  getPost(post: string): Observable<PostCard> {
    return this.http.get<PostCard>(`${this.#path}/${post}`);
  }
}
