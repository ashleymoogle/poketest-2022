import { defineStore } from 'pinia'
import { ref, computed } from 'vue';
import { Pokemon } from '../types';

export const useTeamStore = defineStore('team', () => {
	const team = ref<Pokemon[]>([{
		id: 25,
		name: 'Pikachu',
		sprites: {
			front_default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/25.png',
		},
		types: [{
			name: 'electric',
			url: 'https://pokeapi.co/api/v2/type/13/'
		}]
	}])

	const getTeam = computed(() => team.value)

	function addToTeam (id: number) {
		team.value.push(id);
	}

	function removeFromTeam (id: number) {
		team.value.splice(id, 1);
	}

	return { team, getTeam, addToTeam, removeFromTeam }
})
