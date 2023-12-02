import { Routes } from '@angular/router';
import { HomePageComponent } from './home-page/home-page.component';
import { LoginComponent } from './login/login.component';
import { PostDetailComponent } from './post-detail/post-detail.component';
import { SignupComponent } from './signup/signup.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { PostComponent } from './post/post.component';
import { PostEditComponent } from './post-edit/post-edit.component';
import { UserComponent } from './user/user.component';

export const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  // { path: 'home', component: HomePageComponent },
  { path: 'home', component: PostComponent },
  { path: 'signin', component: LoginComponent },
  { path: 'signup', component: SignupComponent },
  { path: 'post/:id', component: PostDetailComponent },
  { path: 'post/edit/:id', component: PostEditComponent },
  { path: 'user/:id', component: UserComponent },
  { path: '**', component: PageNotFoundComponent },
];
