<template>
  <div>
    <h2>Connexion</h2>
    <input v-model="pseudo" placeholder="Pseudo" />
    <input v-model="mdp" placeholder="Mot de passe" />
    <button @click="handleLogin">Se connecter</button>
    <p v-if="erreur" style="color: red">{{ erreur }}</p>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import { useRouter } from 'vue-router'
import { useAuthStore } from '@/stores/auth'

const pseudo = ref('')
const mdp = ref('')
const erreur = ref('')
const router = useRouter()
const auth = useAuthStore()

async function handleLogin() {
  try {
    await auth.login(pseudo.value, mdp.value)
    router.push('/films') // redirige après login
  } catch (e) {
    erreur.value = 'Identifiants incorrects'
  }
}
</script>
