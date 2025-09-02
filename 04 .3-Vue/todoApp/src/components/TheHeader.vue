<script lang="ts" setup>
import { RouterLink } from 'vue-router'
</script>

<template>
  <header class="custom-header">
    <div>
      <nav>
        <RouterLink to="/">Home</RouterLink>
      </nav>
    </div>
  </header>
</template>

<style scoped>
.custom-header {
  background-color: #fff;
  box-shadow:
    0 4px 6px -1px rgba(0, 0, 0, 0.1),
    0 2px 4px -2px rgba(0, 0, 0, 0.1);
  padding: 7px 10px;
  border-bottom: 1px solid #e5e7eb;
  margin-bottom: 17px;
}
.custom-header nav a {
  color: #111;
  text-decoration: none;
  font-weight: 500;
  cursor: default;
}
</style>
