<template>
  <div id="app">
    <el-container>
      <el-header>
        <el-menu mode="horizontal">
          <el-menu-item index="1" @click="goHome">Home</el-menu-item>
          <el-menu-item index="2" @click="goAddMovie">Add New Movie</el-menu-item>
          <el-menu-item index="3" @click="goMyMovies">My Movies</el-menu-item>
        </el-menu>
      </el-header>

      <el-main>
        <router-view />
      </el-main>

      <el-footer>
        <span>© 2024 MovieFinder</span>
      </el-footer>
    </el-container>
  </div>
</template>

<script setup>
import { useRouter } from 'vue-router';

const router = useRouter();

const goHome = () => {
  router.push({ name: 'home' });
};

const goAddMovie = () => {
  router.push({ name: 'add-movie' });
};

const goMyMovies = () => {
  router.push({ name: 'my-movies' });
};
</script>

<style scoped>
#app {
  display: flex;
  flex-direction: column;
  min-height: 100vh;
}

el-main {
  flex-grow: 1;
}

el-header {
  background-color: #409EFF;
  color: white;
}
</style>
