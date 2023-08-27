<template>
  <RouterView />
</template>
<script>
export default {
  mounted() {
    this.$router.afterEach((to) => {
      if (to.path === '/track') {
        document.body.style.background = '#f7f6f6'
      } else {
        document.body.style.background = '#fff'
      }
    })
  }
}
</script>

<style scoped></style>
