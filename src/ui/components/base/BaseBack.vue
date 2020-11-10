<template>
  <span class="back" @click="handleGoBack">🔙</span>
</template>
<script>
export default {
  props: {
    go: {
      type: String,
      default: '',
    },
  },
  methods: {
    handleGoBack() {
      if (this.go) {
        this.$router.push(this.go);
      } else {
        this.$router.go(-1);
      }
    },
  },
}
</script>
<style lang="scss" scoped>
.back {
  font-size: 1.5rem;
  padding: $gutter;
  cursor: pointer;
}
</style>
