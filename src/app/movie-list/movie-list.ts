import { HttpClient } from '@angular/common/http';
import { Component, inject, OnInit } from '@angular/core';

const API_MOVIE_LIST = 'https://api.imdbapi.dev/interests'

@Component({
  selector: 'app-movie-list',
  imports: [],
  templateUrl: './movie-list.html',
  styleUrl: './movie-list.less',
})
export class MovieList implements OnInit {
  http = inject(HttpClient)

  fetchMovies () {
    return this.http.get(API_MOVIE_LIST)
  }

  ngOnInit(): void {
    this.fetchMovies().subscribe(
      (data) => {
        alert(data)
      },
      (err) => {
        alert(err)
      }
    )
  }

}
