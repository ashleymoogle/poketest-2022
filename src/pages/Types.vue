<template>
  <div class="types">
    <h1>Types {{type}}:</h1>
    <div class="list">
      Noooooo
    </div>
  </div>
</template>

<script lang="ts">
  import { ref } from 'vue';
  export default {
    name: 'Types',
    setup() {
      const type = ref('normal');

      return {
        type,
      };
    }
  }
</script>
