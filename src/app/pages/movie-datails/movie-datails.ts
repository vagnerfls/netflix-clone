import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { MovieService } from '../../services/movie';
import { ImagePipe } from '../../pipes/image-pipe';

@Component({
  selector: 'app-movie-datails',
  standalone: true,
  imports: [CommonModule, RouterModule, ImagePipe],
  templateUrl: './movie-datails.html',
  styleUrl: './movie-datails.scss'
})

export class MovieDatailsComponent implements OnInit {
  
  movieDetails: any;
  constructor(
    private route: ActivatedRoute,
    private movieService: MovieService
  ) {}

  ngOnInit(): void {
    const movieId = this.route.snapshot.paramMap.get('id');

    if (movieId){
      this.movieService.getMovieDetails(movieId).subscribe(details => {
        this.movieDetails = details;
        console.log('ID do filme selecionado:', this.movieDetails);
      });
    }
    
  }

}
