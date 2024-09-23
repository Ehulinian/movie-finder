import axios from 'axios'
import { defineStore } from 'pinia'
import type { Movie } from '../types/Movie'

export const useMoviesStore = defineStore('movies', {
  state: () => ({
    movies: [] as Movie[],
    loading: false,
    selectedMovie: null as Movie | null
  }),
  actions: {
    async fetchMovies(title: string) {
      this.loading = true
      try {
        const response = await axios.get(`https://www.omdbapi.com/?s=${title}&apikey=c0acbbe7`)
        this.movies = response.data.Search || []
      } catch (error) {
        console.error('Error fetching movies:', error)
        this.loading = false
      } finally {
        setTimeout(() => {
          this.loading = false
        }, 300)
      }
    },

    async fetchMovieById(id: string) {
      this.loading = true
      try {
        const response = await axios.get(`https://www.omdbapi.com/?i=${id}&apikey=c0acbbe7`)
        this.selectedMovie = response.data
      } catch (error) {
        console.error('Error fetching movie:', error)
        this.loading = false
      } finally {
        setTimeout(() => {
          this.loading = false
        }, 300)
      }
    }
  }
})
