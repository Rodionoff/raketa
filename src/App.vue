<template>
  <div class="container" v-bind:class="{hideOverflow: isVisible}">
    <div id="app">
      <div class="wrapper" v-bind:class="{changeOpacity: isVisible}">
        <header class="App-header">
          <Logo/>
        </header>
        <Navigation/>
        <router-view/>
      </div>
    </div>

    <div class="sideBar" v-bind:class="{visible: isVisible}">
      <YouTubeButton/>
      <div>
        <iframe
          class="youtubeVideoIframe"
          v-bind:class="{smallIframe: isVisible}"
          src="https://www.youtube.com/embed/videoseries?list=PLhcKR_tPpF9C-1A_qoqbGbmDiOG2z0AyI"
          frameborder="0"
          allowfullscreen
        ></iframe>
      </div>
    </div>

    <!-- don't forget to add origin
            http://www.youtube.com/embed/M7lc1UVf-VE?enablejsapi=1&origin=http://example.com"
    -->
  </div>
</template>

<script>
import Logo from './components/Logo.vue';
import YouTubeButton from './components/YouTubeButton.vue';
import Navigation from './components/Navigation.vue';

export default {
  components: {
    Logo,
    YouTubeButton,
    Navigation,
  },
  computed: {
    isVisible() {
      return this.$store.getters.isVisible;
    },
  },
};
</script>

<style lang="sass">
*
  box-sizing: border-box

.youtubeVideoIframe
  // width: 480px
  // height: 270px
  width: 30vw
  height: 16.6vw
  max-width: 480px
  max-height: 270px
  margin: auto
  display: block

body
  margin: 0
  padding: 0
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", "Roboto", "Oxygen", "Ubuntu", "Cantarell", "Fira Sans", "Droid Sans", "Helvetica Neue", sans-serif
  -webkit-font-smoothing: antialiased
  -moz-osx-font-smoothing: grayscale

code
  font-family: source-code-pro, Menlo, Monaco, Consolas, "Courier New", monospace

h1, h2, p
  padding: 0
  margin: 0

.container
  display: flex

.sideBar
  padding: 0 2.5vw
  width: 35vw
  max-width: 480px
  // background-color: #F2F2F2
  background-color: #54C0EB
  animation: none
  // background-image: url("https://www.transparenttextures.com/patterns/light-aluminum.png")


#app
  width: 65vw
  text-align: center
  background-color: #282c34
  min-height: 100vh
  overflow: hidden


.App-header
  background-color: #282c34
  height: 30vh
  display: flex
  flex-direction: column
  justify-content: center
  font-size: calc(10px + 2vmin)
  color: white

.main
  background-color: #282c34
  min-height: 40vh
  padding-top: 5vh
  display: flex
  font-size: calc(10px + 2vmin)
  color: white
  width: 40vw
  text-align: left
  margin: auto

.main p
  display: block
  margin: 0 auto
  width: 40vw

.App-link
  color: #61dafb

@media (max-width: 1100px)
  .container
    display: block
    height: 100%
    transition: max-height 1s

  .hideOverflow
    max-height: 100vh
    overflow-y: hidden

  #app
    width: 100%

  .wrapper
    opacity: 1
    transition: opacity 1s

  .changeOpacity
    opacity: 0

  .main
    justify-content: center
    text-align: center
    width: 45vw
    margin: auto

  .main p
    text-align: center
    display: block
    width: 100%
    margin: 0 auto 3vh

  .container
    display: block
    position: relative
    overflow-x: hidden

  .sideBar
    position: absolute
    top: 0
    left: 100vw
    width: 100vw
    height: 100vh
    min-width: 100vw
    transition: left 1s

  .visible
    left: 0

  .youtubeVideoIframe
    transition: width 1s, height 1s

  .smallIframe
    width: 96vw
    height: 54vw

</style>
