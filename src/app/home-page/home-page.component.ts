import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PostCardComponent } from '../post-card/post-card.component';
import {
  Router,
  RouterLink,
  RouterModule,
  RouterOutlet,
} from '@angular/router';
import { routes } from '../app.routes';

@Component({
  selector: 'app-home-page',
  standalone: true,
  imports: [CommonModule, PostCardComponent, RouterOutlet],
  templateUrl: './home-page.component.html',
  styleUrl: './home-page.component.css',
})
export class HomePageComponent {
  public items = [1, 2, 3, 4, 5, 6];
  constructor(private readonly router: Router) {}
}
