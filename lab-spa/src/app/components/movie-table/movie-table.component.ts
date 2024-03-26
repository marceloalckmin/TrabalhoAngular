import { Component } from '@angular/core';
import { IMovie } from 'src/app/models/i-movie';
import { MovieService } from 'src/app/services/movie.service';

@Component({
  selector: 'app-movie-table',
  templateUrl: './movie-table.component.html',
  styleUrls: ['./movie-table.component.scss']
})
export class MovieTableComponent {
  movies: IMovie[] = [];

  constructor(private service: MovieService) { }

  ngOnInit(): void {
    this.movies = [
      {id:3,title:'O Senhor dos Anéis: As Duas Torres', genre:'Aventura,Fantasia,Épico'},
      {id:4, title:'O Senhor dos Anéis: O Retorno do Rei', genre:'Aventura,Fantasia,Épico'},
      {id:5, title:'Gente Grande', genre:'Comédia'}
    ];

  for (let m of this.movies){
    console.log(m.id);
    console.log(m.title);
    console.log(m.genre)
  }

  this.service.findAll().subscribe({
    next:(data) => this.movies = data
    ,
    error: (err) => console.error(err)
  });
  }
}
