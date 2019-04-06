<template>
  <nav class="navigation">
    <router-link class="link" to="/">Home</router-link>
    <router-link class="link" to="/about">About</router-link>
    <li class="linkToVideos" @click="changeSidebarVisibility">Videos</li>
    <router-link class="link" to='/feedback'>Feedback</router-link>
  </nav>
</template>

<script>
export default {
  methods: {
    changeSidebarVisibility() {
      this.$store.commit('changeVisibility');
    },
  },
};
</script>

<style scoped lang="sass">
.navigation
  list-style: none
  font-size: calc(10px + 2vmin)
  text-decoration: none
  display: flex
  flex-direction: column
  justify-content: space-between
  // max-height: 60px
  width: 40vw
  text-align: left
  margin: 0 auto 10px

@media (min-width: 470px)
  .navigation
    margin-bottom: 30px

.link, .linkToVideos
  color: white
  text-decoration: underline
  margin-bottom: 1.5vh
  cursor: pointer

.link:last-child
  margin-bottom: 0

.linkToVideos
  display: none

@media (max-width: 1100px)
  .navigation
    align-items: center

  .navigation li:last-child
    margin-bottom: 0

  .linkToVideos
    display: block
</style>
