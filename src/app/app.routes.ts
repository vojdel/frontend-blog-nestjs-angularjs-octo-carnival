import { Routes } from '@angular/router';
import { HomePageComponent } from './home-page/home-page.component';
import { LoginComponent } from './login/login.component';
import { PostComponent } from './post/post.component';
import { PostDetailComponent } from './post-detail/post-detail.component';
import { SignupComponent } from './signup/signup.component';

export const routes: Routes = [
  { path: '', component: HomePageComponent },
  { path: '', component: LoginComponent },
  { path: '', component: PostComponent },
  { path: '', component: SignupComponent },
  { path: '', component: PostDetailComponent },
];
