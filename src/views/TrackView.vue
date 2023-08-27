<template>
  <div class="track">
    <div class="header">
      <v-container>
        <img src="../assets/images/logo1.png" alt="" />
      </v-container>
    </div>

    <div class="text">
      <v-container>
        <img
          width="20"
          height="20"
          src="https://img.icons8.com/ios/50/sneakers.png"
          alt="sneakers"
        />
        <h2>تعقّب</h2>
      </v-container>
    </div>
    <div class="form">
      <v-form @submit.prevent="sendTrack">
        <v-container style="text-align: end" class="form_container">
          <v-row class="form_row">
            <v-col cols="12" lg="6" md="6" sm="12" class="for_text">
              <div class="form_text">
                <span>إبحث عن تحويل أو دفع:</span>
                <p>إبحث عن وضعية أي عملية عبر إدخال رقم التحويل أو الرقم المرجعي و شهرتك.</p>
              </div>
            </v-col>
            <v-col cols="12" lg="6" md="6" sm="12">
              <div class="inputs">
                <label for="number" class="text-float-label text-float-label-off"
                  >رقم التحويل أو الرقم المرجعي</label
                >
                <input
                  class=""
                  v-model="track_number"
                  type="text"
                  required
                  inputmode="numeric"
                  pattern="[0-9]*"
                  placeholder="رقم التحويل أو الرقم المرجعي"
                  float-label="رقم التخويل أو الرقم المرجعي"
                />
                <label for="name" class="text-float-label text-float-label-off">شهرتك</label>
                <input type="text" required placeholder="شهرتك" v-model="name" />
              </div>
            </v-col>
          </v-row>
        </v-container>
        <v-container> <button type="submit" style="margin-top: 30px">تعقّب</button></v-container>
      </v-form>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      track_number: '',
      nmae: ''
    }
  },
  methods:{
    sendTrack(){
      this.$router.push('/recieve')
    }
  }
}
</script>

<style>
.track {
  min-height: 100%;
  background: #f7f6f6;
}
.track .header {
  background: #fff;
  border-bottom: 3px solid #e41b13;
}
.track .header img {
  max-width: 200px;
  cursor: pointer;
}
.form_row {
  flex-direction: row-reverse;
}
.track .text .v-container {
  display: flex;
  align-items: center;
  justify-items: center;
  column-gap: 5px;
}

.track .text h2 {
  display: inline-block;
}
.track .text img {
  margin-bottom: 5px;
  display: inline-block;
}

.track .form {
  background: #fff;
}
.form_text {
  font-family: 'Roboto' !important;
  background: #fff;
}
.form_text span {
  font-weight: 500;
  font-size: 18px;
  line-height: 20px;
  color: #333333;
  font-family: 'Roboto' !important;
}
.form_text p {
  color: #7e7874;
  font-weight: 300;
  font-size: 14px;
  line-height: 20px;
  font-family: 'Roboto' !important;
  margin-top: 7px;
}
.inputs {
  background: #fff !important;
}
.inputs input {
  display: block;
  text-align: end;
  width: 100%;
  padding: 5px 10px;
  height: 58px;
  color: #333333;
  font-size: 16px;
  line-height: 23px;
  margin-bottom: 10px;
  font-family: Arial, Helvetica, sans-serif;
  border: 1px solid #dfdddc;
  box-shadow: inset 0 1px 1px rgba(0, 0, 0, 0.075);

  transition:
    border-color ease-in-out 0.15s,
    box-shadow ease-in-out 0.15s;
}
.inputs input::placeholder {
  color: #888888;
}
input:focus {
  border-color: #66afe9;
  outline: 0;
  box-shadow:
    inset 0 1px 1px rgba(183, 165, 165, 0.075),
    0 0 8px rgba(102, 175, 233, 0.6);
}
.inputs .text-float-label-target {
  position: relative;
  padding-top: 20px;
}
.inputs .text-float-label-off {
  display: inline-block;
  transform: translate(0, 5px);
  transition:
    transform 100ms,
    opacity 200ms;
  opacity: 0;
}
input:focus label {
  transform: translate(0, -3px);
  opacity: 1 !important;
}

button {
  font-size: 16px;
  padding: 8px;
  float: right;
  background-color: #009cde;
  border-color: #009cde;

  margin-bottom: 0;
  font-weight: 600;
  text-align: center;
  vertical-align: middle;
  cursor: pointer;
  background-image: none;
  border: 1px solid transparent;
  transition: 0.3s;
  line-height: 1.42857143;
  border-radius: 30px;
  width: 350px;
  color: #fff !important;
}
@media (max-width: 959px) {
  .form_container {
    padding-top: 0 !important;
  }
  .form .v-col-12 {
    padding: 0;
  }
  .form_row {
    flex-direction: row;
  }
  .v-form {
    background: #f7f6f6;
  }
  .inputs input {
    border-left: none !important;
    border-top: none !important;
    border-right: none !important;
    box-shadow: none !important;
  }
  .form .for_text {
    background: #f7f6f6 !important;
    padding: 12px !important;
    border-bottom: 1px solid #ccc;
  }
  .form .form_text {
    background: #f7f6f6 !important;
  }
  .track .header {
    border-top: 2px solid #ccc !important;
    border-bottom: 2px solid #ccc !important;
    margin-top: 10px;
  }
  .track .header img {
    margin: auto !important;
    display: block !important;
  }

  .track .text .v-container {
    margin-bottom: 17px !important;

    border-bottom: 1px solid #ccc !important;
  }
}
</style>
