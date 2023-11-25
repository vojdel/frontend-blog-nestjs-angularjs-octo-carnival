import { AfterViewInit, Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute, Router, RouterModule, RouterOutlet } from '@angular/router';
import { HeaderComponent } from './header/header.component';
import { HttpClientModule } from '@angular/common/http';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    CommonModule,
    RouterOutlet,
    HeaderComponent,
    RouterModule,
    HttpClientModule,
  ],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements AfterViewInit {
  title = 'frontend-blog-nestjs-angularjs';
  clase: string = 'min-w-full min-h-full';

  constructor(private route: ActivatedRoute) {}

  ngAfterViewInit() {
    setTimeout(() => {
      this.route.url.subscribe((event) => {
        console.log(event[0]); // It's an array remember [0]
        console.log(event[0].path); // e.g. /products
        console.log(event[0].parameters); // e.g. { id: 'x8klP0' }
      });
    }, 5000);
  }
}
