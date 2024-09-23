<template>
  <div>
    <el-input v-model="searchQuery" placeholder="Search for a movie"></el-input>
    <el-button @click="search">Search</el-button>
  </div>
</template>

<script lang="ts" setup>
import { ref } from 'vue';
import { useRouter } from 'vue-router';

const searchQuery = ref<string>('');
const router = useRouter();

const search = () => {
  if (searchQuery.value) {
    router.push({ name: 'results', query: { title: searchQuery.value } });
  }
}
</script>
