<template>
  <el-form @submit.prevent="addMovie">
    <el-form-item label="Title">
      <el-input v-model="newMovie.Title"></el-input>
    </el-form-item>
    <el-form-item label="Poster">
      <el-input v-model="newMovie.Poster"></el-input>
    </el-form-item>
    <el-form-item label="Director">
      <el-input v-model="newMovie.Director"></el-input>
    </el-form-item>
    <el-form-item label="Year">
      <el-input type="number" v-model="newMovie.Year"></el-input>
    </el-form-item>
    <el-button type="primary" @click="addMovie" :loading="localStore.loading">Add Movie</el-button>
  </el-form>
</template>

<script lang="ts" setup>
import { ref } from 'vue'
import { useLocalMoviesStore } from '../stores/localeStorage'
import type { NewMovie } from '../types/Movie'

const newMovie = ref<NewMovie>({
  Title: '',
  Poster: '',
  Director: '',
  Year: null
})

const localStore = useLocalMoviesStore()

const addMovie = async () => {
  await localStore.addMovie({
    ...newMovie.value,
    Year: Number(newMovie.value.Year)
  })

  newMovie.value = { Title: '', Poster: '', Director: '', Year: null }
}
</script>
