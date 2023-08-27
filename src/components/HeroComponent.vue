<template>
  <!-- Start:: For Big Width -->
  <div class="hero">
    <v-container>
      <h1>سريع. سهل. موثوق. MoneyGram</h1>
    </v-container>
    <div class="foot">
      <v-container style="padding: 7px">
        <v-row>
          <v-col cols="12" lg="6" md="6" sm="6" xs="6">
            <router-link to="/track">
              <img src="@/assets/images/trackatransfer.svg" alt="" />
              <span>تعقب نقل</span>
            </router-link></v-col
          >
          <v-col cols="12" lg="6" md="6" sm="6" xs="6">
            <router-link to="/">
              <img src="@/assets/images/locations-button.svg" alt="" />
              <span> أقرب فرع</span>
            </router-link></v-col
          >
        </v-row>
      </v-container>
    </div>
  </div>
  <!-- End:: For Big Width -->

  <!-- Start:: For Small Width -->
  <div class="small_hero">
    <div class="image"></div>
    <v-container>
      <h1>سريع. سهل. موثوق. <span>MoneyGram</span></h1>
    </v-container>
    <div class="buttons">
      <v-container>
        <v-row>
          <v-col cols="12" lg="6" md="6" sm="6" xs="6">
            <router-link to="/">
              <img src="@/assets/images/trackatransfer.svg" alt="" />
              <span>تعقب نقل</span>
            </router-link></v-col
          >
          <v-col cols="12" lg="6" md="6" sm="6" xs="6">
            <router-link to="/">
              <img src="@/assets/images/locations-button.svg" alt="" />
              <span> أقرب فرع</span>
            </router-link></v-col
          >
        </v-row>
      </v-container>
    </div>
  </div>
  <!-- End:: For Small Width -->
</template>

<script>
export default {}
</script>

<style>
.hero,
.small_hero .image {
  background-position: 50% 50%;
  background-color: #606060;
  background-size: cover;
  background-position-x: 33%;
  height: 680px;
  background-repeat: no-repeat;
  color: #fff;
  background-image: url('@/assets/images/hero.jpg');
  padding-top: 10%;
  position: relative;
}
.small_hero {
  display: none;
}
.small_hero .image {
  max-width: 100%;
  height: 200px;
}
.hero h1,
.small_hero h1 {
  font-family: sans-serif;
  color: #fff;
  margin: 30px 0;
  text-align: center;
  font-size: 50px;
  font-weight: 100;
  line-height: 50px;
}
.small_hero h1 {
  color: #000 !important;
  line-height: 65px;
}
.small_hero h1 span {
  font-family: inherit;
  font-weight: lighter;
  font-size: 45px;
  color: #000000db;
}
.small_hero .buttons a {
  flex-direction: column;
}
.hero .foot {
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  background: rgba(0, 0, 0, 0.4);
  padding: 20px;
  text-align: center;
  color: #fff;
  width: 100%;
}
.small_hero .buttons {
  padding: 20px;
  text-align: center;
  color: #fff;
  width: 100%;
  background: #888;
}

.hero .foot a,
.small_hero .buttons a {
  text-decoration: none;
  color: #fff;
  display: flex;
  justify-content: center;
  align-items: center;
  justify-items: center;
  gap: 25px;
}

.hero .foot img,
.small_hero .buttons img {
  width: 100px;
  height: 100px;
}
.hero .foot a span,
.small_hero .buttons a span {
  font-size: 26px;
  font-weight: 300;
  line-height: 36px;
}

@media (max-width: 959px) {
  .hero {
    display: none !important;
  }
  .small_hero {
    display: block !important;
  }
  .small_hero .buttons a {
    flex-direction: column !important;
  }
  .small_hero .buttons .v-col-12{
    flex: 0 0 50% !important;
    max-width: 50% !important;
  }
}
</style>
