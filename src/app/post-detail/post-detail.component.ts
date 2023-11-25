import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Router, ActivatedRoute, Params } from '@angular/router';
import { PostsService } from '../core/services/posts.service';
import { PostCard } from '../core/interfaces/post-card';

@Component({
  selector: 'app-post-detail',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './post-detail.component.html',
  styleUrl: './post-detail.component.css',
  providers: [PostsService]
})
export class PostDetailComponent implements OnInit {
  id!: string;
  post!: PostCard;

  constructor(private router: ActivatedRoute, private readonly postService: PostsService) {}

  ngOnInit(): void {
    console.log(this.router.params);

    this.router.params.subscribe((params: Params) => {
      this.id = params['id'];
    });

    this.postService.getPost(this.id).subscribe((data: PostCard) => {
      this.post = data;
    });
  }
}
