<template>
  <div class="images">
    <v-container>
      <v-row>
        <v-col cols="12" lg="6" md="6" sm="12" style="padding: 0"
          ><div class="image last">
            <h2>تقرّبك أكثر</h2>
            <span>تقرّبك أكثر</span>
          </div></v-col
        >
        <v-col cols="12" lg="6" md="6" sm="12" style="padding: 0"
          ><div class="image first">
            <h2>موثوق إرسال واستقبال الأموال حول العالم</h2>
            <span style="width: 65%; display: block">
              تتكون شبكتنا العالمية من مجوعة مختارة من المجال و الشركات المرموقة في أكثر من 200 بلد
              و إقليم
            </span>
          </div></v-col
        >
      </v-row>
    </v-container>
  </div>
</template>

<script>
export default {}
</script>

<style>
.images .image {
  background-position: 50% 50%;
  background-size: cover;
  height: 245px;
  background-repeat: no-repeat;
  color: #fff;
  padding: 35px 40px 40px 40px;
}
.images .first {
  background-image: url('../assets/images/world.jpg');
}
.images .last {
  background-image: url('../assets/images/people.jpg');
}
.images h2 {
  font-size: 24px;
  margin: 0 0 20px;

  font-weight: 300;
}
.images span {
  font-weight: 400;
  font-size: 18px;
  line-height: 25px;
}

@media (max-width: 959px) {
  .images {
    text-align: center !important;
  }
  .images .first span {
    width: 100% !important;
  }
  .images .image {
    margin: 25px !important;
  }

  .images .last{
    margin-bottom: 0 !important;
  }
}
</style>
