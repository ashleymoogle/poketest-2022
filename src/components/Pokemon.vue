<template>
  <div class="pokemon">
    <img class="pkm-sprite" :src="`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${getNumber}.png`" />
    {{pokemon.name}} - <button @click="something">Add to team</button>
  </div>
</template>

<script lang="ts">
  import { defineComponent } from 'vue'
  import { PokeAPIBaseResult } from '../types';
  import { useTeamStore } from '../store/team';

  export default defineComponent({
    name: 'Pokemon',
    props: {
      pokemon: {
        type: String, // How can we type this better?
        default: '',
      }
    },
    setup(props) {
      const { addToTeam } = useTeamStore();

      const pokemon: PokeAPIBaseResult = props.pokemon; // How to keep reactivity?

      const getNumber: () => number = () => {
        return pokemon.url.split('/')[pokemon.url.split('/').length - 2];
      };

      const something = () => {
        console.log('I\'m not doing anything, you should replace this log with something else!')
        // await addToTeam(1);
      };

      return {
        getNumber,
        something,
      }
    }
  })
</script>

<style scoped>
  .pkm-sprite {
    @apply m-auto;
  }
</style>
