<template>
  <div>
    <div id="nav">
      <router-link to="/">Home</router-link> |
      <router-link to="/team">My team</router-link> |
      <router-link to="/types">Types: normal</router-link>
    </div>
    <div class="wrapper">
      <router-view/>
    </div>
  </div>
</template>

<style scoped>
  @reference "tailwindcss";
  #app {
    @apply text-center font-sans;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    #nav {
      @apply p-8;
      a {
        @apply font-bold;
        &.router-link-exact-active {
          @apply bg-emerald-500;
        }
      }
    }
    .wrapper {
      @apply mb-10;
    }
  }
</style>
