import { Component, HostListener, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PostCard } from '../core/interfaces/post-card';
import { Router } from '@angular/router';
import { PostCardComponent } from '../post-card/post-card.component';
import { PostsService } from '../core/services/posts.service';
import { InfiniteScrollModule } from 'ngx-infinite-scroll';

@Component({
  selector: 'app-post',
  standalone: true,
  imports: [CommonModule, PostCardComponent, InfiniteScrollModule],
  templateUrl: './post.component.html',
  styleUrl: './post.component.css',
  providers: [PostsService],
})
export class PostComponent implements OnInit {
  items!: PostCard[];
  // newItems!: PostCard[]; // decorate the property with @Input()
  isLoading: boolean = false;
  currentPage: number = 1;
  itemsPerPage: number = 5;

  constructor(
    private router: Router,
    private readonly postsService: PostsService
  ) {}

  ngOnInit(): void {
    this.loadData();
  }

  toggleLoading = () => (this.isLoading = !this.isLoading);

  // it will be called when this component gets initialized.
  loadData = () => {
    this.toggleLoading();
    this.postsService.getPosts(this.currentPage, this.itemsPerPage).subscribe({
      next: (response) => {
        this.items = [...response];
        // this.newItems = [...response.splice(2, response.length - 1)];
      },
      error: (err) => console.log(err),
      complete: () => this.toggleLoading(),
    });
  };

  // this method will be called on scrolling the page
  @HostListener('', ['$event'])
  appendData = (event: KeyboardEvent) => {
    if (
      window.innerHeight + window.scrollY >= document.body.offsetHeight &&
      !this.isLoading
    ) {
      console.log(event);
      this.toggleLoading();
      this.postsService
        .getPosts(this.currentPage++, this.itemsPerPage)
        .subscribe({
          next: (response) => this.items.concat(response),
          error: (err) => console.log(err),
          complete: () => this.toggleLoading(),
        });
      console.log('append Done!');
    }
  };

  onScroll = () => {
    console.log('scrolled!!');
    this.currentPage++;
    this.postsService.getPosts(this.currentPage, this.itemsPerPage).subscribe({
      next: (response) => (this.items = [...this.items, ...response]),
      error: (err) => console.log(err),
      complete: () => this.toggleLoading(),
    });
    console.log('append Done!');
  };

  onScrollUp() {
    alert('scroll Up');
  }
}
