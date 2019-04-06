<template>
  <main class="main">
        <p>
          Welcome
          <br>This is the home page of Ракета
        </p>
      </main>
</template>

<script>
export default {
  computed: {
    isVisible() {
      return this.$store.getters.isVisible;
    },
  },
  methods: {
    changeSidebarVisibility() {
      this.$store.commit('changeVisibility');
    },
  },
};
</script>

<style lang='sass'>
@media (max-width: 1100px)
  .main
    width: 100%

  .main p
    // justify-content: center
    // margin:  0 auto
</style>
