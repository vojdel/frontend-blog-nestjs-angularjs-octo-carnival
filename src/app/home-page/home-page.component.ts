import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { PostCard } from '../core/interfaces/post-card';
import { PostsService } from '../core/services/posts.service';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { PostComponent } from '../post/post.component';

@Component({
  selector: 'app-home-page',
  standalone: true,
  imports: [CommonModule, PostComponent, RouterOutlet],
  templateUrl: './home-page.component.html',
  styleUrl: './home-page.component.css',
  providers: [PostsService],
})
export class HomePageComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}
}
