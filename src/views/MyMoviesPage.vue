<template>
  <el-container>
    <el-header>
      <h1 class="page-title">My Movies</h1>
    </el-header>
    <el-main>
      <el-card class="movie-list-card">
        <LoadingSpinner v-if="localStore.loading" />
        <MoviesList :movies="localStore.movies" @deleteMovie="removeMovie" v-else />
      </el-card>
    </el-main>
  </el-container>
</template>

<script lang="ts" setup>
import LoadingSpinner from '../components/LoadingSpinner.vue';
import MoviesList from '../components/MoviesList.vue';
import { useLocalMoviesStore } from '../stores/localeStorage';

const localStore = useLocalMoviesStore();

const removeMovie = async (imdbID: string) => {
  await localStore.deleteMovie(imdbID);
};
</script>

<style scoped>
.page-title {
  font-size: 24px;
  font-weight: bold;
  color: #409eff;
  text-align: center;
  margin: 20px 0;
}

.movie-list-card {
  padding: 20px;
  background-color: #f5f7fa;
  box-shadow: 0 2px 12px 0 rgba(0, 0, 0, 0.1);
  border-radius: 8px;
}
</style>
