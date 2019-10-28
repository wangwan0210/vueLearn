<template>
  <div>DeliciousFood
    <div >DeliciousFoodNext</div>
    <div>DeliciousFood</div>
  </div>
</template>
<script>
  export default {
    name: 'DeliciousFood',
    data() {
      return {
        type: '1'
      };
    },
    methods: {
      change(type) {
        this.type = type;
      }
    }
  };
</script>
<style scoped></style>
