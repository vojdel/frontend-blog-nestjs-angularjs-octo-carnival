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

  ngOnInit(): void {
    this.item.title = this.limitCharacter(this.item.title, 25);
    this.item.body = this.limitCharacter(this.item.body, 150);
  }

  changeRoute(evt: MouseEvent, post: string) {
    evt.preventDefault();

    this.router.navigate(['post', post]);
  }

  limitCharacter(body: string, limit: number): string {
    return body.substring(0, limit);
  }
}
