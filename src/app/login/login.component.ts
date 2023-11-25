import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute, RouterModule } from '@angular/router';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent implements OnInit{

  constructor(private route: ActivatedRoute){}

  ngOnInit(){
    this.route.url.subscribe((event) => {
      console.log(event[0]); // It's an array remember [0]
      console.log(event[0].path); // e.g. /products
      console.log(event[0].parameters); // e.g. { id: 'x8klP0' }
    });
  }

}
