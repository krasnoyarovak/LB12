<template>
  <div>
    <nav class="nav-bar">
      <router-link to="/" exact-active-class="active">Главная</router-link>
      <router-link to="/api" exact-active-class="active">API</router-link>
      <router-link to="/form" exact-active-class="active">Форма</router-link>
    </nav>
    <router-view />
  </div>
</template>

<style scoped>
.nav-bar {
  display: flex;
  justify-content: center;
  gap: 2rem;
  background: #42b983;
  padding: 1rem 0;
  font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
}

.nav-bar a {
  color: #d7f0e8;
  text-decoration: none;
  font-weight: 600;
  font-size: 1.1rem;
  transition: color 0.3s ease;
}

.nav-bar a:hover {
  color: white;
}

.nav-bar a.active {
  color: white;
  border-bottom: 2px solid white;
  padding-bottom: 2px;
}
</style>
