<template>
  <div>
    <h2>Films</h2>
    <ul>
      <li v-for="film in films" :key="film.id">{{ film.titre }}</li>
    </ul>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import http from '@/api/http'

const films = ref([])

onMounted(async () => {
  const { data } = await http.get('/api/films')
  films.value = data
})
</script>
