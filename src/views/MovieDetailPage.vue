<template>
  <div>
    <LoadingSpinner v-if="store.loading" />
    <div v-else>
      <h2>{{ store.selectedMovie?.Title }}</h2>
      <img :src="store.selectedMovie?.Poster" />
      <p>Director: {{ store.selectedMovie?.Director }}</p>
      <p>Year: {{ store.selectedMovie?.Year }}</p>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { onMounted } from 'vue';
import { useRoute } from 'vue-router';
import LoadingSpinner from '../components/LoadingSpinner.vue';
import { useMoviesStore } from '../stores/movies';

const route = useRoute();
const store = useMoviesStore();

onMounted(async () => {
  const { id } = route.params;
  await store.fetchMovieById(id as string);
});
</script>
