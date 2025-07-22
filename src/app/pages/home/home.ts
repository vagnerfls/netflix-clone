import { Component, OnInit } from '@angular/core';
import { Header } from '../../components/header/header';
import { Footer } from '../../components/footer/footer';
import { Hero } from '../../components/hero/hero';
import { ContentRow } from '../../components/content-row/content-row';
import { Movie } from '../../interfaces/movie';
import { MovieService } from '../../services/movie';

@Component({
  selector: 'app-root',
  imports: [Header, Footer, Hero, ContentRow],
  templateUrl: './home.html',
  styleUrl: './home.scss'
})

export class HomeComponent implements OnInit {
    title = 'netflix-clone';

    trendingMovies: Movie[] = [];
    popularMovies: Movie[] = [];
    topRatedMovies: Movie[] = [];

    constructor(private movieService: MovieService) {}

    ngOnInit(): void {
      
      this.movieService.getTrendingMovies().subscribe(response => {
        this.trendingMovies = response.results;
      });

      this.movieService.getPopularMovies().subscribe(response => {
        this.popularMovies = response.results;
      });

      this.movieService.getTopRatedMovies().subscribe(response => {
        this.topRatedMovies = response.results;
      });
      
    }
}