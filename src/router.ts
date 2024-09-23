import { createRouter, createWebHistory, type RouteRecordRaw } from 'vue-router'
import AddMoviePage from './views/AddMoviePage.vue'
import HomePage from './views/HomePage.vue'
import MovieDetailPage from './views/MovieDetailPage.vue'
import MyMoviesPage from './views/MyMoviesPage.vue'
import ResultsPage from './views/ResultsPage.vue'

const routes: Array<RouteRecordRaw> = [
  { path: '/', name: 'home', component: HomePage },
  { path: '/results', name: 'results', component: ResultsPage },
  { path: '/movie/:id', name: 'movie-detail', component: MovieDetailPage },
  { path: '/add-movie', name: 'add-movie', component: AddMoviePage },
  { path: '/my-movies', name: 'my-movies', component: MyMoviesPage }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
