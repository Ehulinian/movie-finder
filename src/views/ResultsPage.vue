<template>
  <div>
    <LoadingSpinner v-if="store.loading" />
    <Swiper v-if="store.movies.length > 0" :slides-per-view="3">
      <SwiperSlide v-for="movie in store.movies" :key="movie.imdbID">
        <MovieCard :movie="movie" />
      </SwiperSlide>
    </Swiper>
    <div v-else>No movies found.</div>
  </div>
</template>

<script lang="ts" setup>
import 'swiper/swiper-bundle.css';
import { Swiper, SwiperSlide } from 'swiper/vue';
import { onMounted } from 'vue';
import { useRoute } from 'vue-router';
import LoadingSpinner from '../components/LoadingSpinner.vue';
import MovieCard from '../components/MovieCard.vue';
import { useMoviesStore } from '../stores/movies';

const route = useRoute();
const store = useMoviesStore();

onMounted(() => {
  const { title } = route.query;
  if (title) {
    store.fetchMovies(title as string);
  }
});
</script>
