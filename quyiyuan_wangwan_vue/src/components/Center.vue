<template>
  <div class="fff">
    <h1>{{ msgd }}</h1>
  </div>
</template>

<script>
    export default {
      name: 'Center',
      data() {
        return {
          msgd: this.$route.params.id
        };
      }
    };
</script>

<style scoped>

</style>
