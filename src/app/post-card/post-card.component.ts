import { Component, OnInit, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { Router, RouterModule } from '@angular/router';
import { PostCard } from '../core/interfaces/post-card';

@Component({
  selector: 'app-post-card',
  standalone: true,
  imports: [CommonModule, MatButtonModule, MatCardModule, RouterModule],
  templateUrl: './post-card.component.html',
  styleUrl: './post-card.component.css',
})
export class PostCardComponent implements OnInit {
  @Input() item!: PostCard; // decorate the property with @Input()

  constructor(private router: Router) {}

  ngOnInit(): void {}

  changeRoute(evt: MouseEvent, post: string) {
    evt.preventDefault();

    this.router.navigate(['post', post]);
  }
}
