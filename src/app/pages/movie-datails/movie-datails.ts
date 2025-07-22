import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-movie-datails',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './movie-datails.html',
  styleUrl: './movie-datails.scss'
})

export class MovieDatailsComponent implements OnInit {

  movieId: string | null = null;
  constructor(private route: ActivatedRoute) {}
  ngOnInit(): void {
    this.movieId = this.route.snapshot.paramMap.get('id');
    console.log('ID do filme selecionado:', this.movieId);
  }

}
