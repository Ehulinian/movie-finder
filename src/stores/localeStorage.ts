import { defineStore } from 'pinia'
import type { Movie, NewMovie } from '../types/Movie'
import { generateUniqueId } from '../utils/helper'

export const useLocalMoviesStore = defineStore('localMovies', {
  state: () => ({
    movies: [] as Movie[],
    loading: false
  }),
  actions: {
    async addMovie(movie: NewMovie) {
      this.loading = true
      try {
        const newMovie: Movie = {
          imdbID: generateUniqueId(),
          ...movie
        }
        await new Promise((resolve) => setTimeout(resolve, 2000))
        this.movies.push(newMovie)
      } catch (error) {
        console.error('Error adding movie:', error)
      } finally {
        this.loading = false
      }
    },

    async deleteMovie(imdbID: string) {
      this.loading = true
      try {
        await new Promise((resolve) => setTimeout(resolve, 1000))
        this.movies = this.movies.filter((movie) => movie.imdbID !== imdbID)
      } catch (error) {
        console.error('Error deleting movie:', error)
      } finally {
        this.loading = false
      }
    }
  }
})
