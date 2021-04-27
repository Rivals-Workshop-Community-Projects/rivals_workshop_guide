<template>
  <ParentLayout>
    <template #page-bottom>
      <div class="footer">
        ---
        <h3>I need help making this!</h3>
        <p>Contributions or feedback?</p>
        <p><a href="https://forms.gle/Yv8qUkPknk7FB5Lw7">Brief survey, so I know what will help you.</a></p>
        <p><a href="https://discord.com">Discord</a> qazzquimby#0073</p>
        <p>Email <a target="_top" href="mailto: qazzquimby@yahoo.com">qazzquimby@yahoo.com</a></p></div>
    </template>
    <!-- Global site tag (gtag.js) - Google Analytics -->
    <script async src="https://www.googletagmanager.com/gtag/js?id=G-VW71RR0SQJ"></script>
    <script>
      window.dataLayer = window.dataLayer || [];
      function gtag(){dataLayer.push(arguments);}
      gtag('js', new Date());

      gtag('config', 'G-VW71RR0SQJ');
    </script>
  </ParentLayout>
</template>



<script>
import ParentLayout from '@parent-theme/layouts/Layout.vue'
export default {

  name: 'Layout',

  components: {
    ParentLayout
  }
}
</script>
<style lang="stylus">
.footer
  padding 2.5rem
  border-top 1px solid $borderColor
  text-align center

</style>