import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home';
import { MovieDatailsComponent } from './pages/movie-datails/movie-datails';

export const routes: Routes = [
    {path: '', component: HomeComponent},
    {path: 'filme/:id', component: MovieDatailsComponent},
    {path:'**', redirectTo:''}
];
