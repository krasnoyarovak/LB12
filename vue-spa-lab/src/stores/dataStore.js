import { defineStore } from 'pinia'
import axios from 'axios'

export const useDataStore = defineStore('dataStore', {
  state: () => ({
    posts: [],
    loading: false,
    error: null
  }),
  actions: {
    async fetchPosts() {
      this.loading = true
      this.error = null
      try {
        const response = await axios.get('https://jsonplaceholder.typicode.com/posts?_limit=5')
        this.posts = response.data
      } catch (err) {
        this.error = 'Ошибка загрузки данных'
      } finally {
        this.loading = false
      }
    }
  }
})
