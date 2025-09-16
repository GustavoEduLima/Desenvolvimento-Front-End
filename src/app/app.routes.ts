import { Routes } from '@angular/router';
import { Home } from './home/home';
import { BlogComponent } from './blog-component/blog-component';

export const routes: Routes = [
    {path: 'home', component: Home},
    {path: 'BlogComponent', component: BlogComponent}
];
