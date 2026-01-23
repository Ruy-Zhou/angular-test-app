import { Routes } from '@angular/router';
import { Login } from './login/login';
import { User } from './user/user';
import { Home } from './home/home';
import { Role } from './user/role/role';

export const routes: Routes = [
    { path: 'home', component: Home, title: 'Home',  providers: [{ provide: 'title', useValue: 'angular-test-app' }] },
    { path: 'login', component: Login },
    { path: '', redirectTo: 'home', pathMatch: 'full' },
    {
        path: 'user',
        component: User,
        data: { title: 'user info' },
        children: [
            { path: 'role', component: Role }
        ]
    },
    { path: 'article', loadComponent: () => import('./article/article').then(m => m.Article) },
    { path: 'todo', loadComponent: () => import('./todo/todo').then(m => m.Todo) },
    { path: 'movies', loadComponent: () => import('./movie-list/movie-list').then(m => m.MovieList)}
];
