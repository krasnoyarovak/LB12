<template>
  <section class="api-page">
    <h1>Данные с API</h1>

    <p v-if="error" class="error">{{ error }}</p>

    <ul v-if="posts.length" class="posts-list">
      <li v-for="post in posts" :key="post.id" class="post-item">
        <h3>{{ post.title }}</h3>
        <p>{{ post.body }}</p>
      </li>
    </ul>
  </section>
</template>

<script setup>
import { onMounted } from 'vue'
import { useDataStore } from '../stores/dataStore'

const store = useDataStore()

onMounted(() => {
  store.fetchPosts()
})

const { posts, loading, error } = store
</script>

<style scoped>
.api-page {
  max-width: 700px;
  margin: 2rem auto;
  padding: 1rem 2rem;
  background: #fff;
  border-radius: 10px;
  box-shadow: 0 2px 12px rgb(0 0 0 / 0.1);
  font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
  color: #2c3e50;
}

h1 {
  text-align: center;
  font-weight: 700;
  margin-bottom: 1.5rem;
}

.error {
  text-align: center;
  color: #e74c3c;
  margin-bottom: 1rem;
  font-weight: 600;
}

.posts-list {
  list-style: none;
  padding: 0;
}

.post-item {
  padding: 1rem 1.5rem;
  margin-bottom: 1rem;
  background-color: #f7f9fa;
  border-radius: 6px;
  box-shadow: 0 1px 4px rgb(0 0 0 / 0.05);
}

.post-item h3 {
  margin: 0 0 0.5rem 0;
  font-weight: 600;
  font-size: 1.1rem;
  color: #34495e;
}

.post-item p {
  margin: 0;
  color: #555;
  line-height: 1.4;
}
</style>
