<template>
  <ParentLayout>
    <template #page-bottom>
      <div class="footer">
        ---
        <h3>I need help making this!</h3>
        <p>Contributions or feedback?</p>
        <p><a href="https://discord.com">discord</a> qazzquimby#0073</p>
        <p>email <a target="_top" href="mailto: qazzquimby@yahoo.com">qazzquimby@yahoo.com</a></p></div>
    </template>
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