<template>
  <section>
    <div class="logo">logo</div>
    <hr />
    <div class="container">
      <div class="process">
        <div class="col-lg-3">تم الاستلام</div>
        <div class="col-lg-3">
          <svg
            fill="#000000"
            version="1.1"
            id="Layer_1"
            xmlns="http://www.w3.org/2000/svg"
            xmlns:xlink="http://www.w3.org/1999/xlink"
            viewBox="0 0 32 32"
            xml:space="preserve"
            width="25px"
            height="25px"
          >
            <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
            <g
              id="SVGRepo_tracerCarrier"
              stroke-linecap="round"
              stroke-linejoin="round"
            ></g>
            <g id="SVGRepo_iconCarrier">
              <path
                id="time_1_"
                d="M16,31.36C7.53,31.36,0.64,24.47,0.64,16S7.53,0.64,16,0.64S31.36,7.53,31.36,16S24.47,31.36,16,31.36z M15.64,28h0.72v2.636c7.788-0.188,14.087-6.488,14.276-14.276H28v-0.72h2.636C30.447,7.853,24.147,1.553,16.36,1.364V4h-0.72V1.364C7.853,1.553,1.553,7.853,1.364,15.64H4v0.72H1.364c0.189,7.788,6.488,14.087,14.276,14.276V28z M22.748,20.312l-7.108-4.104V6h0.72v9.792l6.748,3.896L22.748,20.312z"
              ></path>
              <rect
                id="_Transparent_Rectangle"
                style="fill: none"
                width="15"
                height="15"
              ></rect>
            </g>
          </svg>
        </div>
        <div class="col-lg-3">قيد المعالجة</div>
      </div>
      <!-- end process -->
      <div class="ready">
        <h5>جاهز للاستلام</h5>
        <p>MoneyGramأصبح المال جاهزا للاستلام من موقع ل</p>
      </div>
      <div class="steps">
        <hr />
        <h5>الخطوات التالية :</h5>
        <p>على المستلم إحضار بطاقة الهوية و رقم مرجعيا لاستلام المال</p>
        <span> ابحث عن موقع </span>

        <div class="details_proccess">
          <h5>تفاصيل العملية :</h5>
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
            <p>
              ملاحظة الإيصالات عبر الإنترنت غير متوفرة لمعاملات التجارية في
              الموقع
            </p>
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
      currentDate: "",
      showIcon: true,
      tableData: [
        { column1: "", column2: "تحويل", column3: "نوع العملية" },
        { column1: "", column2: "", column3: "تاريخ البدء" },
        { column1: "", column2: "", column3: "جاهز للاستلام" },
        {
          column1:
            '<svg fill="#000000" version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 32 32" xml:space="preserve" width="25px" height="25px"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"><path id="time_1_" d="M16,31.36C7.53,31.36,0.64,24.47,0.64,16S7.53,0.64,16,0.64S31.36,7.53,31.36,16S24.47,31.36,16,31.36z M15.64,28h0.72v2.636c7.788-0.188,14.087-6.488,14.276-14.276H28v-0.72h2.636C30.447,7.853,24.147,1.553,16.36,1.364V4h-0.72V1.364C7.853,1.553,1.553,7.853,1.364,15.64H4v0.72H1.364c0.189,7.788,6.488,14.087,14.276,14.276V28z M22.748,20.312l-7.108-4.104V6h0.72v9.792l6.748,3.896L22.748,20.312z"></path><rect id="_Transparent_Rectangle" style="fill: none" width="15" height="15"></rect></g></svg>',
          column2: "123456789",
          column3: "الرقم المرجعي",
        },
      ],
    };
  },
  mounted() {
    this.updateColumn2();
  },
  methods: {
    getCurrentDate() {
      const date = new Date();
      return date.toLocaleDateString();
    },
    updateColumn2() {
      const currentDate = this.getCurrentDate();
      this.tableData[1].column2 = currentDate;
      this.tableData[2].column2 = currentDate;
    },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" >
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
    clip-path: polygon(100% 10%, 100% 50%, 100% 100%, 0% 100%, 0% 55%, 0% 10%);
    // clip-path: polygon(100% 0, 100% 50%, 100% 100%, 0% 100%, 25% 50%, 0% 0%);
    clip-path: polygon(100% 0, 100% 50%, 100% 100%, 0% 100%, 25% 50%, 0% 0%);
    // background-color: blue;
    @media (max-width: 480px) {
      margin-left: -22px;
    }
  }
  div:last-child {
    clip-path: polygon(84% 10%, 100% 50%, 84% 100%, 0% 100%, 0 55%, 0% 10%);
    // clip-path: polygon(75% 0%, 100% 50%, 75% 100%, 0% 100%, 0 51%, 0% 0%);
    clip-path: polygon(75% 0%, 100% 50%, 75% 100%, 0% 100%, 0 49%, 0% 0%);

    // background-color: red;
    @media (max-width: 480px) {
      margin-right: -22px;
    }
  }
  div {
    clip-path: polygon(75% 0%, 100% 50%, 75% 100%, 0% 100%, 25% 50%, 0% 0%);
    clip-path: polygon(84% 10%, 100% 50%, 84% 99%, 0% 100%, 0 55%, 0% 10%);
    clip-path: polygon(75% 0%, 100% 50%, 75% 100%, 0% 100%, 25% 50%, 0% 0%);
    background-color: #009744;
    color: #969a98;
    text-align: center;
    font-weight: 700;
    margin-right: -60px;
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
  h5 {
    color: #009744;
  }
  p {
    color: #969a98;
  }
}
.steps {
  background-color: #f6f6f6;
  padding: 30px;
  margin-top: 50px;
  hr {
    background-color: #969a98;
    margin-top: 50px;
  }
  span {
    color: #4998af;
    font-weight: 700;
    margin-top: -10px;
    display: block;
  }
  .details_proccess {
    margin-top: 20px;
  }
  .notes {
    color: #969a98;
    // margin-top: 30px;
    font-size: 20px;
    @media (max-width: 480px) {
      font-size: 14px;
    }
  }
}
.table {
  border-collapse: collapse;
}
.table th,
.table td {
  padding: 8px;
  color: #969a98;
  font-size: 18px;
  // text-align: start;
}
.table tr:last-child td {
  border-bottom: none;
}
</style>
