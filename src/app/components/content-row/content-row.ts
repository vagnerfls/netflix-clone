import { Component, Input, ViewChild, ElementRef } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Movie } from '../../interfaces/movie';
import { ImagePipe } from '../../pipes/image-pipe';

@Component({
  selector: 'app-content-row',
  standalone: true,
  imports: [CommonModule, ImagePipe],
  templateUrl: './content-row.html',
  styleUrl: './content-row.scss'
})

export class ContentRow {

  @Input() title: string = '';
  @Input() movies: Movie[] = [];
  @ViewChild('posterContainer') posterContainer!: ElementRef;

  constructor() {}

  scrollLeft(): void {
    console.log('Clicou na seta esquerda!')
    const container = this.posterContainer.nativeElement;
    container.scrollLeft -= container.clientWidth;    
  }

  scrollRight(): void {
    console.log('Clicou na seta direita!')
    const container = this.posterContainer.nativeElement;
    container.scrollLeft += container.clientWidth;
  }
  
}
