<template>
  <nav>
    <span>Mon App</span>
    <button v-if="auth.isAuthenticated" @click="handleLogout">Se déconnecter</button>
  </nav>
</template>

<script setup>
import { useRouter } from 'vue-router'
import { useAuthStore } from '@/stores/auth'

const router = useRouter()
const auth = useAuthStore()

function handleLogout() {
  auth.logout()
  router.push('/login')
}
</script>
