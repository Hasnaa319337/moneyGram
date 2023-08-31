<template>
  <section style="background: #fff;">
    <div class="logo">
      <router-link to="/">
        <img
        src="@/assets/images/logo1.png"
        style="
          width: 150px;

          margin-top: 11px;
        "
        alt=""
      /></router-link>
    </div>
    <hr />
    <div class="container" style="text-align: end">
      <div class="process">
        <div class="col-lg-3">تم الاستلام</div>
        <div
          class="col-lg-3"
          style="isplay: flex; justify-content: center; align-items: center; justify-items: center"
        >
          <img
            style="margin-left: 18px"
            width="30"
            height="30"
            src="https://img.icons8.com/fluency/48/clock--v1.png"
            alt="clock--v1"
          />
        </div>
        <div class="col-lg-3">قيد المعالجة</div>
      </div>
      <!-- end process -->
      <div class="ready">
        <h5>جاهز للاستلام</h5>
        <p>MoneyGram أصبح المال جاهزا للاستلام من موقع ل</p>
      </div>
      <div class="steps">
        <hr />
        <div class="content">
          <h5 style="display: inline-block">:الخطوات التالية</h5>
          <img
            style="transform: rotate(45deg); margin-bottom: 10px"
            width="20"
            height="20"
            src="https://img.icons8.com/emoji/48/fork-and-knife-emoji.png"
            alt="fork-and-knife-emoji"
          />
          <p>على المستلم إحضار بطاقة الهوية و رقم مرجعيا لاستلام المال</p>
          <span> ابحث عن موقع </span>
        </div>

        <div class="details_proccess">
          <h5>:تفاصيل العملية</h5>
          <table class="table">
            <tbody>
              <tr v-for="(item, index) in tableData" :key="index">
                <td v-html="item.column1"></td>
                <td>{{ item.column2 }}</td>
                <td>{{ item.column3 }}</td>
              </tr>
            </tbody>
          </table>
          <!-- end table -->
          <div class="notes">
            <p>ملاحظة الإيصالات عبر الإنترنت غير متوفرة لمعاملات التجارية في الموقع</p>
          </div>
        </div>
        <!-- end details_proccess -->
      </div>
      <!-- end steps -->
    </div>
  </section>
</template>

<script>
export default {
  data() {
    return {
      currentDate: '',
      showIcon: true,
      tableData: [
        { column1: '', column2: 'تحويل', column3: ': نوع العملية' },

        {
          column1:
            ' <img   width="30px" height="30px"  src="https://img.icons8.com/fluency/48/clock--v1.png"   alt="clock--v1"     />            ',
          column2: localStorage.getItem('track_number'),
          column3: ': الرقم المرجعي'
        }
      ]
    }
  },
  mounted() {
    this.updateColumn2()
  },
  methods: {
    getCurrentDate() {
      const date = new Date()
      return date.toLocaleDateString()
    },
    updateColumn2() {
      const currentDate = this.getCurrentDate()
      this.tableData[1].column2 = currentDate
      this.tableData[2].column2 = currentDate
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss">
.logo {
  margin: auto;
  text-align: center;
  padding: 10px;
}
.process {
  display: flex;
  flex-direction: row;
  justify-content: center;
  margin-top: 30px;
  div:first-child,
  div:last-child {
    background-color: #f6f6f6;
  }
  div:first-child {
    clip-path: polygon(100% 0, 100% 50%, 100% 100%, 0% 100%, 11% 50%, 0% 0%);
    margin-left: -20px;
    @media (max-width: 480px) {
      margin-left: 1px;
    }
  }
  div:last-child {
    clip-path: polygon(90% 0%, 100% 50%, 90% 100%, 0% 100%, 0% 55%, 0% 0%);
    margin-right: -50px;
    // background-color: red;
    @media (max-width: 480px) {
      margin-right: -10px;
    }
  }
  div {
    clip-path: polygon(90% 0%, 100% 50%, 90% 100%, 10% 100%, 22% 50%, 10% 0%);
    background-color: #009744;
    color: #a2a2a2;
    text-align: center;
    font-weight: 700;
    height: 80px;
    width: 300px;
    line-height: 80px;
    @media (max-width: 480px) {
      margin-right: -10px;
      margin-left: -10px;
      height: 50px;
      line-height: 50px;
    }
  }
}
.ready {
  margin: 50px;
  text-align: center;
  display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    margin-bottom: 0 !important;
 
  h5 {
    color: #009744;
  }
  p {
    color: #a2a2a2;
  }
}
.steps {
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  width: 100%;
  background-color: #f6f6f6;
  margin-top: 30px;
  padding: 30px 0;
  hr {
    background-color: #a2a2a2;
    margin-top: 50px;
    width: 100%;
  }
  .content {
    padding: 0px 30px;
    p {
      @media (max-width: 480px) {
        font-size: 15px;
      }
    }
  }
  span {
    color: #3b9dcc;
    font-weight: 700;
    margin-top: -10px;
    display: block;
  }
  .details_proccess {
    margin-top: 20px;
    padding: 0px 30px;
  }
  .notes {
    color: #a2a2a2;
    font-size: 20px;
    @media (max-width: 480px) {
      font-size: 12px;
    }
  }
}
.table {
  border-collapse: collapse;
  --bs-table-bg: #f6f6f6 !important;
}
.table th,
.table td {
  padding: 8px;
  color: #a2a2a2;
  font-size: 18px;
  font-size: 20px;
  @media (max-width: 480px) {
    font-size: 16px;
  }
}
.table tr:last-child td {
  border-bottom: none;
}
</style>
