import { HttpClient } from '@angular/common/http';
import { Component, inject, OnInit, signal } from '@angular/core';
import { MatGridListModule } from '@angular/material/grid-list'
import { MatCardModule } from '@angular/material/card'
import { MatIconModule } from '@angular/material/icon'
import { NgOptimizedImage } from '@angular/common'

const API_MOVIE_LIST = 'https://api.imdbapi.dev/interests'

@Component({
  selector: 'app-movie-list',
  imports: [MatGridListModule, MatCardModule, MatIconModule, NgOptimizedImage],
  templateUrl: './movie-list.html',
  styleUrl: './movie-list.less',
})
export class MovieList implements OnInit {
  http = inject(HttpClient)
  protected categories = signal<MovieCategory[]>([])

  fetchMovies () {
    return this.http.get(API_MOVIE_LIST)
  }

  ngOnInit(): void {
    this.fetchMovies().subscribe(
      (data: any) => {
        console.log(data)
        this.categories.set(data.categories as MovieCategory[])
      },
      (err) => {
        alert(err)
      }
    )
  }

}
