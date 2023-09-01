<template>
  <div>
    <!-- start:: Footer -->
    <footer>
      <v-container>
        <v-row>
          <v-col cols="12" lg="3" md="3" sm="12" class="item-back item-destination2">
            <div class="social">
              <a href="#" title="Facebook" name="Facebook"><i class="fa fa-facebook"></i></a>
              <a href="#" title="Twitter" name="Twitter"><i class="fa fa-twitter"></i></a>
              <a href="#" title="You Tube" name="You Tube"><i class="fa fa-youtube"></i></a>
            </div>
          </v-col>
          <v-col cols="12" lg="6" md="6" sm="7" class="item-back2">
            <p class="links item-move2">
              <a
                href="الانضمام-الى-وكلاء-مونيغرام"
                title="الانضمام إلى وكلاء مونيغرام "
                name="الانضمام إلى وكلاء مونيغرام "
                data-category="EG"
                data-label="الانضمام إلى وكلاء مونيغرام "
              >
                الانضمام إلى وكلاء مونيغرام
              </a>
              <span class="pipe">|</span>
              <a
                href="http://corporate.moneygram.com/terms-of-use-ar"
                target="_blank"
                title="شروط استخدام الموقع الالكتروني"
                name="شروط استخدام الموقع الالكتروني"
                data-category="EG"
                data-label="شروط استخدام الموقع الالكتروني"
              >
                شروط استخدام الموقع الالكتروني
              </a>
              <span class="pipe">|</span>
              <a
                href="http://global.moneygram.com/privacy-notice"
                target="_blank"
                title="سياسة الخصوصية"
                name="سياسة الخصوصية"
                data-category="EG"
                data-label="سياسة الخصوصية"
              >
                سياسة الخصوصية
              </a>
              <span class="pipe">|</span>
              <a
                href="http://corporate.moneygram.com/cookie-policy-ar"
                target="_blank"
                title="سياسة ملفات تعريف الإرتباط"
                name="سياسة ملفات تعريف الإرتباط"
                data-category="EG"
                data-label="سياسة ملفات تعريف الإرتباط"
              >
                سياسة ملفات تعريف الإرتباط
              </a>
              <span class="pipe">|</span>
              <a
                href="خريطة-الموقع"
                title="خريطة الموقع"
                name="خريطة الموقع"
                data-category="EG"
                data-label="خريطة الموقع"
              >
                خريطة الموقع
              </a>
              <span class="pipe">|</span>
              <a
                href="اتصل-بنا"
                title="تقرير الاحتيال
"
                name="تقرير الاحتيال
"
                data-category="EG"
                data-label="تقرير الاحتيال
"
              >
                تقرير الاحتيال
              </a>
            </p>
          </v-col>

          <v-col cols="12" lg="3" md="3" sm="5">
            <p class="copy"> &copy; MoneyGram 2023. </p>
          </v-col>
        </v-row>
      </v-container>
    </footer>
    <!-- end:: Footer -->
  </div>
</template>

<script>
export default {}
</script>

<style>
footer {
  background-color: #606060;
  color: #fff;
  padding: 20px 0;
}

footer a {
  color: #fff;
  text-decoration: none !important;
}
footer .social {
  text-align: center;
}
footer .social a {
  border-radius: 100px;
  color: #fff;
  display: inline-block;
  font-size: 20px;
  height: 40px;
  line-height: 40px;
  margin: 0 20px 0 0;
  text-align: center;
  width: 40px;
  border: 1px solid #fff;
}
footer .social a:hover {
  background: #fff;
  color: #606060;
  transition: 0.3s all ease-in-out;
}

footer .links {
  font-size: 14px;
  font-weight: 400;
  line-height: 19px;
  width: 83%;
  margin: auto;
  text-align: center;
}
footer .links a {
  white-space: nowrap;
  margin: 3px 0;
  display: inline-block;
}
footer span.pipe {
  margin: 0 6px;
}
footer .copy {
  text-align: center;
  font-size: 14px;
  font-family: sans-serif;
}
</style>
