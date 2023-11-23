import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Router, ActivatedRoute, Params } from '@angular/router';

@Component({
  selector: 'app-post-detail',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './post-detail.component.html',
  styleUrl: './post-detail.component.css',
})
export class PostDetailComponent implements OnInit {
  id!: string;

  constructor(private router: ActivatedRoute) {}

  ngOnInit(): void {
    console.log(this.router.params);

    this.router.params.subscribe((params: Params) => {
      this.id = params['id'];
    });
  }
}
