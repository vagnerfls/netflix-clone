import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MovieDatails } from './movie-datails';

describe('MovieDatails', () => {
  let component: MovieDatails;
  let fixture: ComponentFixture<MovieDatails>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MovieDatails]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MovieDatails);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
