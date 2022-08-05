<template>
  <div class="home">
    <div v-for="poke in pokemons" :key="poke">
      <pokemon :pokemon="poke" />
    </div>
  </div>
</template>

<script lang="ts">
  import { defineComponent, onMounted } from 'vue'
  import Pokemon from '../components/Pokemon.vue';
  import { storeToRefs } from 'pinia'
  import { usePokeStore } from '../store/pokemons';

  export default defineComponent({
    name: 'Home',
    components: { Pokemon },
    setup() {
      const pokeStore = usePokeStore();
      const { pokemons } = storeToRefs(pokeStore);

      onMounted(async () => {
        // We could do something here....
      })

      return {
        pokemons
      }
    }
  })
</script>
