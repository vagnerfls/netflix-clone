import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'image',
  standalone: true
})

export class ImagePipe implements PipeTransform {

  private baseUrl = 'https://image.tmdb.org/t/p/w500';

  transform(value: string | null): string {
    if (!value) {
      return 'https://via.placeholder.com/500x750.png?text=Sem+Imagem';
    }

    return `${this.baseUrl}${value}`
  }
}