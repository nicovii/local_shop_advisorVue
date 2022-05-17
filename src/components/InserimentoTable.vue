<script setup>
import { ref, onMounted, watch } from 'vue'
import { createProdotto } from '../states/products.js'


const name = ref('nome')
const category = ref('categoria')
const price = ref('prezzo')
const description = ref('descrizione')
const warningMessage = ref('')


function createProdottoButton() {
  if (name.value=='' || category.value=='' || price.value=='' || description.value=='') {
    warningMessage.value = 'Please specify a valid title!'
    return;
  }
  warningMessage.value = ''
  createProdotto(name.value, category.value, price.value, description.value).catch( err => console.error(err) );
};

</script>



<template>
  <form>
    <span>Inserisci un nuovo prodotto</span>
    <br />
    <input v-model="name" />
    <input v-model="category" />
    <input v-model="price" />
    <input v-model="description" />
    <button type="button" @click="createProdottoButton">inserisci</button>
    <br />
    <span style="color: red"> {{warningMessage}} </span>
  </form>
</template>
