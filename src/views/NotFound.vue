<template>
  <div>
    <h1>Oops, We are sorry</h1>
    <p>we couldn't find that page.</p>
    <span>Erro 404! </span>
    <router-link :to="{ name: 'Home' }">
      <button>Home</button>
    </router-link>
  </div>
</template>
