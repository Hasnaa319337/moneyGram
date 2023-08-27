<template>
  <div class="services">
    <v-container>
      <h1 class="main_head">خدماتنا</h1>
      <v-row>
        <v-col cols="12" lg="6" md="6" sm="12">
          <div class="send">
            <h3 class="second_head">الإرسال النقدي</h3>
            <div class="image">
              <img src="@/assets/images/cash.svg" alt="" />
            </div>
            <p>
              مع توفر حوالى 350,000 فرع لوكلائنا حول أرجاء العالم، تصبح عملية إرسال و إستلام الأموال
              نقداً في غاية السهولة.
            </p>
            <div class="link">
              <svg xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 320 512">
                <path
                  d="M278.6 233.4c12.5 12.5 12.5 32.8 0 45.3l-160 160c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3L210.7 256 73.4 118.6c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0l160 160z"
                />
              </svg>
              <a href="#">للمزيد </a>
            </div>
          </div>
        </v-col>
        <v-col cols="12" lg="6" md="6" sm="12">
          <div class="receive">
            <h3 class="second_head">إستقبل أموالك نقداً</h3>
            <div class="image">
              <img src="@/assets/images/receive-money.svg" alt="" />
            </div>
            <p>
              بإمكانك إرسال و إستقبال الأموال بسهولة و يسر من خلال أكثر من 350,000 فرع و موقع حول
              العالم
            </p>
            <div class="link">
              <svg xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 320 512">
                <path
                  d="M278.6 233.4c12.5 12.5 12.5 32.8 0 45.3l-160 160c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3L210.7 256 73.4 118.6c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0l160 160z"
                />
              </svg>
              <a href="#">للمزيد </a>
            </div>
          </div>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<script>
export default {}
</script>

<style>
.main_head {
  color: #da291c;
  text-align: center;
  font-weight: 100;
  font-size: 40px;
  line-height: 55px;
}
.second_head {
  color: #606060;
  font-weight: 400;
  font-size: 24px;
  line-height: 33px;
  text-align: center;
  font-size: 24px;

  margin-bottom: 0;
  margin-top: 20px;
  min-height: 70px;
}
.services .image {
  width: 160px;
  height: 160px;
  margin: auto;
}
.services .image img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  vertical-align: middle;
}
.services p {
  width: 70%;
  font-size: 18px;
  line-height: 25px;
  font-weight: 400;
  text-align: center;
  margin: 30px auto 5px !important;
  color: #606060;
}
.services a {
  text-align: center;
  text-decoration: none;
  font-size: 18px;
  color: #2f99c7;
  line-height: 25px;
  font-weight: 400;
  display: inline-block;
  margin: 0 9px;
}
.services svg {
  fill: #2f99c7;
  width: 8px;
}
.services .link {
  display: flex;
  justify-content: center;
  align-items: center;
  justify-items: center;
}
</style>
