import { defineStore } from 'pinia'
import { ref, computed } from 'vue';
import { PokeAPIBaseResult } from '../types'
import data from '../assets/data.json';

export const usePokeStore = defineStore('pokemons', () => {
	const pokemons = computed<PokeAPIBaseResult[]>(() => data.data);
	const limit = ref(20);
	const APIURL = computed(() => `https://pokeapi.co/api/v2/pokemon?limit=${limit.value}&offset=0`)

	async function getPokemons() {
		const req = await fetch(APIURL.value)
		return await req.json();
	}

	return {
		pokemons,
		getPokemons,
	}
})
