<template>
  <main class="main feedback">
    <p>
      Awesome
      <br>Share your opinion about Ракета
    </p>
    <div class="comments">
      <vue-disqus
        shortname="raketa-spb-ru"
        :identifier="feedback"
        url="https://raketa.spb.ru/feedback"
        class="disqus"
      ></vue-disqus>
    </div>
  </main>
</template>

<script>
export default {};
</script>

<style lang='sass'>
.feedback
  display: block

.feedback p
  margin-bottom: 3vh
  display: block

.comments
  width: 100%
  visibility: visible
  background-color: #F8B64C
  margin: auto
  padding: 2rem
  margin-bottom: 3vh

@media (min-width: 600px) and (max-width: 1100px)
  .comments
    width: 65vw
    max-width: 480px
</style>
