<template>
  <div>
    <v-container>
      <router-link to="/">
        <img
        class="mainLogo"
          style="width:200px; margin: auto; display: block"
          src="../assets/images/logo1.png"
          alt=""
      /></router-link>
    </v-container>
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
a {
  text-decoration: none !important;
}
.second {
  border-top: 1px solid #ddd;
  background: #f4f4f4;
  padding: 20px 0 0;
}

@media (max-width: 959px) {
  .mainLogo{
    width: 130px !important
    ;
  }
}
</style>
