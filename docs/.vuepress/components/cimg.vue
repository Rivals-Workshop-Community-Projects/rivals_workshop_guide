<template>
  <figure align='center' style="display: inline-block; margin: 0; ">
    <img :src="imagesrc" :height="height" alt=caption/>
    <figcaption><i><small>{{ caption }}</small></i></figcaption>
  </figure>
</template>

<script>
export default {
  props: ['src', 'caption', 'height'],
  computed: {
    imagesrc () {
      return  this.src
    }
  }
}
</script>