import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PostCardComponent } from '../post-card/post-card.component';
import { RouterOutlet } from '@angular/router';
import { PostCard } from '../core/interfaces/post-card';
import { PostsService } from '../core/services/posts.service';
import { HttpClient, HttpClientModule } from '@angular/common/http';

@Component({
  selector: 'app-home-page',
  standalone: true,
  imports: [CommonModule, PostCardComponent, RouterOutlet],
  templateUrl: './home-page.component.html',
  styleUrl: './home-page.component.css',
  providers: [PostsService],
})
export class HomePageComponent implements OnInit {
  items: PostCard[] = [];

  constructor(private readonly postsService: PostsService) {}

  ngOnInit(): void {
    this.postsService.getPosts().subscribe((res) => {
      this.items = [...res];
    });
  }
}
