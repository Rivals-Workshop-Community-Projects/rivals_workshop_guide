<template>
  <figure align='center'>
    <img :src="imagesrc" :height="height" alt=""/>
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