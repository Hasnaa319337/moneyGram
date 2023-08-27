<template>
  <div class="services how">
    <v-container>
      <v-row>
        <v-col cols="12" lg="6" md="6" sm="12">
          <div class="receive">
            <h3 class="main_head">كيفية إرسال المال</h3>
            <div class="image">
              <img src="@/assets/images/send-money.svg" alt="" />
            </div>
            <p>
              توفّر موني جرام خدمة سريعة وموثوقة لإرسال أموالك: بإمكانك تحويل أموالك نقداً، إلى حساب
              مصرفي أو إلى محفظة جوالة. المزيد
            </p>
            <div class="link">
              <svg xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 320 512">
                <path
                  d="M278.6 233.4c12.5 12.5 12.5 32.8 0 45.3l-160 160c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3L210.7 256 73.4 118.6c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0l160 160z"
                />
              </svg>
              <a href="#">أعرف أكثر </a>
            </div>
          </div>
        </v-col>
        <v-col cols="12" lg="6" md="6" sm="12">
          <div class="send">
            <h3 class="main_head">كيفية استلام المال</h3>
            <div class="image">
              <img src="@/assets/images/receive-money.svg" alt="" />
            </div>
            <p>
              إمكانك إستلام حوالتك بسهولة و يُسر من خلال شبكتنا العالمية في أكثر من 200 بلد و إقليم.
              المزيد
            </p>
            <div class="link">
              <svg xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 320 512">
                <path
                  d="M278.6 233.4c12.5 12.5 12.5 32.8 0 45.3l-160 160c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3L210.7 256 73.4 118.6c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0l160 160z"
                />
              </svg>
              <a href="#">أعرف أكثر </a>
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
.how .main_head {
  line-height: 40px;
  padding: 10px 0;
  margin-bottom: 45px;
}
.how .image {
  margin: 20px auto;
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
