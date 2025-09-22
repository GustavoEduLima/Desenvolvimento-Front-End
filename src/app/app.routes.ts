import { Routes } from '@angular/router';
import { BlogComponent } from './blog/blog';

export const routes: Routes = [
  { path: '', component: BlogComponent },
  { path: 'blog', component: BlogComponent }
];
