<template>
  <div>
    <hero-component />
    <div class="second">
      <how-component />
      <images-component />
      <services-component />
      <FooterComponent />
    </div>
  </div>
</template>

<script>
import HeroComponent from '@/components/HeroComponent.vue'
import HowComponent from '@/components/HowComponent.vue'
import ImagesComponent from '@/components/ImagesComponent.vue'
import ServicesComponent from '@/components/ServicesComponent.vue'
import FooterComponent from '@/components/FooterComponent.vue'

export default {
  components: { ImagesComponent, ServicesComponent, FooterComponent, HowComponent, HeroComponent }
}
</script>

<style scoped>
.second {
  border-top: 1px solid #ddd;
  background: #f4f4f4;
  padding: 20px 0 0 ;
}
</style>
