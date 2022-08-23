<template>
  <div class="team">
    {{getTeam}}
  </div>
</template>

<script>
  import { defineComponent } from 'vue'
  import { storeToRefs } from 'pinia'
  import { useTeamStore } from '../store/team';

  export default defineComponent({
    name: 'Team',
    setup() {
      const store = useTeamStore();
      const { getTeam } = store;
      const { team } = storeToRefs(store);
      return {
        getTeam,
        team,
      };
    }
  })
</script>
