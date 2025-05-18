<template>
  <section class="form-page">
    <h1>Отправка данных</h1>
    <form @submit.prevent="submitForm" class="form">
      <label for="name">Имя</label>
      <input id="name" v-model="form.name" required placeholder="Введите имя" />

      <label for="email">Email</label>
      <input id="email" v-model="form.email" type="email" required placeholder="Введите email" />

      <label for="message">Сообщение</label>
      <textarea id="message" v-model="form.message" required placeholder="Введите сообщение"></textarea>

      <button type="submit" :disabled="loading" class="btn">
        {{ loading ? 'Отправка...' : 'Отправить' }}
      </button>
    </form>

    <div v-if="response" class="response-block">
      <h2>Ответ сервера:</h2>
      <pre>{{ response }}</pre>
    </div>

    <p v-if="error" class="error">{{ error }}</p>
  </section>
</template>

<script setup>
import { reactive, ref } from 'vue'
import axios from 'axios'

const form = reactive({
  name: '',
  email: '',
  message: ''
})

const response = ref(null)
const error = ref(null)
const loading = ref(false)

const submitForm = async () => {
  error.value = null
  response.value = null
  loading.value = true

  const payload = {
    name: form.name,
    email: form.email,
    message: form.message
  }

  try {
    const res = await axios.post('https://jsonplaceholder.typicode.com/posts', payload, {
      headers: { 'Content-Type': 'application/json' }
    })
    response.value = JSON.stringify(res.data, null, 2)

    // Очистка формы (по желанию)
    form.name = ''
    form.email = ''
    form.message = ''
  } catch {
    error.value = 'Ошибка отправки данных'
  } finally {
    loading.value = false
  }
}
</script>

<style scoped>
.form-page {
  max-width: 480px;
  margin: 2rem auto 4rem;
  padding: 2rem 2.5rem;
  background: #fff;
  border-radius: 12px;
  box-shadow: 0 3px 14px rgb(0 0 0 / 0.1);
  font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
  color: #2c3e50;
}

h1 {
  margin-bottom: 1.5rem;
  font-weight: 700;
  text-align: center;
}

.form {
  display: flex;
  flex-direction: column;
  gap: 1rem;
}

label {
  font-weight: 600;
  color: #34495e;
  margin-bottom: 0.25rem;
}

input, textarea {
  padding: 0.6rem 0.8rem;
  font-size: 1rem;
  border: 1.8px solid #bdc3c7;
  border-radius: 6px;
  transition: border-color 0.3s ease;
  resize: vertical;
  font-family: inherit;
  color: #2c3e50;
}

input:focus, textarea:focus {
  outline: none;
  border-color: #42b983;
  box-shadow: 0 0 5px rgba(66, 185, 131, 0.5);
}

textarea {
  min-height: 100px;
}

.btn {
  padding: 0.7rem;
  font-size: 1.1rem;
  font-weight: 600;
  background-color: #42b983;
  color: white;
  border: none;
  border-radius: 8px;
  cursor: pointer;
  margin-top: 1rem;
  transition: background-color 0.3s ease;
}

.btn:disabled {
  background-color: #7fbf9a;
  cursor: not-allowed;
}

.btn:hover:not(:disabled) {
  background-color: #369b72;
}

.response-block {
  margin-top: 2rem;
  background: #ecf0f1;
  padding: 1rem 1.5rem;
  border-radius: 8px;
  font-family: monospace;
  white-space: pre-wrap;
  word-wrap: break-word;
  color: #34495e;
}

.error {
  margin-top: 1rem;
  color: #e74c3c;
  font-weight: 600;
  text-align: center;
}
</style>
