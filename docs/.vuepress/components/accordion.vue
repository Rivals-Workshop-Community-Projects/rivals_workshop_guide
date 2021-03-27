<template>
  <div class="wrapper">
    <div class="accordion" @click="toggle">
      <h2 class="title">
        <slot name="title"></slot>
      </h2>
    </div>
    <div v-show="show" class="content">
      <slot name="content"></slot>
    </div>
  </div>
</template>

<script>
  export default {
    components: {},
    data() {
      return {
        show: false,
      };
    },
    methods: {
      toggle() {
        this.show = !this.show;
      },
    }
  }
</script>

<style lang="stylus">

</style>