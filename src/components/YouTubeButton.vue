<template>
  <div class="youtube">
    <div
      class="g-ytsubscribe"
      data-channelid="UCwvUt_qrr3ueX6jBLcg00HQ"
      data-layout="full"
      data-count="default"
    ></div>
    <li
      class="back"
      @click="changeSidebarVisibility"
      v-bind:class="{backButtonVisible: isVisible}"
    >Back</li>
  </div>
</template>

<script>
export default {
  methods: {
    changeSidebarVisibility() {
      this.$store.commit("changeVisibility");
    }
  },
  computed: {
    isVisible() {
      return this.$store.getters.isVisible;
    }
  }
};
</script>
<style lang='sass'>
.back
  color: #282c34
  text-decoration: underline
  // margin-bottom: 1.5vh
  cursor: pointer
  list-style: none
  font-family: inherit
  font-size: calc(10px + 2vmin)
  transition: opacity 1s
  opacity: 0
  

.backButtonVisible
  opacity: 1

@media (min-width: 1100px)
  .back
    opacity: 0

.youtube
  height: 30vh
  // /* padding-left: 5vw */
  display: flex
  justify-content: space-between
  align-items: center

.g-ytsubscribe
  padding: 15px
  // /* height: 30vh */



@media (max-width: 1100px)
  .youtube
    width: 86vw
    height: 30vh
    max-width: 480px
    max-height: 270px
    margin: auto
    // display: block

  .back
    order: -1

  .ytsubscribe
    order: 2
</style>