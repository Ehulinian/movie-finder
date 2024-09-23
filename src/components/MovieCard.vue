<template>
  <div class="movie-card">
    <img :src="movie?.Poster" alt="Movie Poster" />
    <router-link class="movie-title" :to="{ name: 'movie-detail', params: { id: movie?.imdbID } }">
      {{ movie?.Title }}
    </router-link>
    <p>Director: {{ movie?.Director }}</p>
    <p>Year: {{ movie?.Year }}</p>
  </div>
</template>

<script lang="ts" setup>
import type { Movie } from '../types/Movie'

defineProps<{
  movie: Movie | null
}>()
</script>

<style scoped>
.movie-card {
  text-align: center;
  padding: 10px;
  margin-bottom: 20px;
}
.movie-card img {
  max-width: 100%;
  height: auto;
}
.movie-title {
  display: block;
  margin-top: 10px;
  font-size: 18px;
  font-weight: bold;
  color: #409eff;
  text-decoration: none;
  transition: color 0.3s ease;
}
.movie-title:hover {
  color: #1e90ff;
}
</style>

<script lang="ts">
export default {
  name: 'MovieCard'
}
</script>
