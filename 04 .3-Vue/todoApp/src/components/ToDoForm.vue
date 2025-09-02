<script setup lang="ts">
import { ref } from 'vue'
import { useTodosStore } from '../stores/todos'

const todosStore = useTodosStore()

const todoInput = ref('')

const addTodo = () => {
  todosStore.addTodo(todoInput.value)
  todoInput.value = ''
}
</script>

<template>
  <form @submit.prevent="addTodo">
    <input
      id="todo"
      type="text"
      placeholder="Add a new todo"
      v-model="todoInput"
      class="border-2"
    />
    <button>Add</button>
  </form>
</template>
