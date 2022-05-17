// https://vuejs.org/guide/scaling-up/state-management.html#simple-state-management-with-reactivity-api

import { reactive } from 'vue'

const HOST = import.meta.env.VITE_API_HOST || `http://localhost:8080`
const API_URL = HOST + `/api/v1`
const PRODUCTS_URL = API_URL + '/products'


const prodotto = reactive([])

async function fetchProdotto() {
    prodotto.value = await (await fetch(PRODUCTS_URL)).json()
}

async function createProdotto(nome, categoria, prezzo, descrizione) {
    fetch(PRODUCTS_URL, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ name: nome, category: categoria, price: prezzo, description: descrizione }),
    })
    fetchProdotto()
};

async function deleteProdotto(prodotto) {
    await fetch(HOST + prodotto.self, {
        method: 'DELETE',
        headers: { 'Content-Type': 'application/json' }
    })
    fetchProdotto()
};

export { prodotto, fetchProdotto, createProdotto, deleteProdotto } 