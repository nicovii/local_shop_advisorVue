<script setup>
import { ref, onMounted, watch } from 'vue'
import { prodotto, fetchProdotto, deleteProdotto} from '../states/products.js'

const HOST = import.meta.env.VITE_API_HOST || `http://localhost:8080`
const API_URL = HOST + `/api/v1`
const PRODUCTS_URL = API_URL + '/products'

onMounted( () => {
  fetchProdotto() // fetch on init
})

</script>

<template>
  <h1>Prodotti in catalogo:</h1>

  <ul>
    <li v-for="prodotto in prodotto.value" :key="prodotto.self">
      <a :href="HOST+prodotto.self">{{prodotto.name}}</a>
      -
      <button @click="deleteProdotto(prodotto)">Rimuovi</button>
    </li>
  </ul>

</template>