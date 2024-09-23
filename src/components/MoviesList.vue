<template>
  <div>
    <ul>
      <li v-for="movie in movies" :key="movie.imdbID" class="movie-item">
        <div class="movie-details">
          <span>{{ movie.Title }} ({{ movie.Year }})</span>
          <el-button type="danger" @click="deleteMovie(movie.imdbID)">Delete</el-button>
        </div>
      </li>
    </ul>
  </div>
</template>

<script lang="ts" setup>
defineProps(['movies']);
const emit = defineEmits(['deleteMovie']);

const deleteMovie = (imdbID: string) => {
  emit('deleteMovie', imdbID);
};
</script>

<script lang="ts">
export default {
  name: 'MoviesList',
};
</script>

<style scoped>
.movie-item {
  display: flex;
  justify-content: space-between;
  padding: 10px 0;
  border-bottom: 1px solid #ddd;
}

.movie-details {
  display: flex;
  align-items: center;
}

.movie-details span {
  margin-right: 10px;
}
</style>
