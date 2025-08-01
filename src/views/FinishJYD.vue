<template>
  <div class="Result">
    <div class="top_title">薪享贷申请</div>
    <div class="name">{{ $route.query.clientName }}</div>
    <img class="jyd-img-icon" src="../assets/jyd_pass.png" />
    <div class="tips_money">
      <div class="money_one">恭喜你已通过预审</div>
      <div class="message_success">额度: {{ $route.query.num }}</div>
      <div class="computing_value">利率: {{ $route.query.rate }}</div>
      <van-field
        class="text-all"
        v-model="rePayTimeStatus"
        is-link
        readonly
        name="rePayTimeStatus"
        label="期限"
        placeholder="点击选择你的用款期限"
        @click="showPickerrePayTimeStatus = true"
        :rules="[{ required: true, message: '点击选择你的用款期限' }]"
      />
      <van-popup
        v-model:show="showPickerrePayTimeStatus"
        destroy-on-close
        position="bottom"
      >
        <van-picker
          :columns="columnsPayTimeStatus"
          @confirm="onConfirmRePayTimeStatus"
          @cancel="showPickerrePayTimeStatus = false"
        />
      </van-popup>
    </div>
    <div class="box-flex">
      <div class="tips">每月还款</div>
      <div class="tips_left">{{ selectValue }}</div>
    </div>

    <div class="text-left-space">还款方式：&nbsp;每月等额本息</div>
    <button round block class="bt_fpd" @click="toStart()">
      查&nbsp;看&nbsp;详&nbsp;情
    </button>
    <div class="tips_attention">
      提醒：借款资金仅用于个人消费，严禁流于房市、股市、投资、炒股、还债、赌博等非法行为，否则一经发现拒绝放款，已放款则提前终止合同回收借款！
    </div>
  </div>
</template>
<script>
import { ref } from "vue";
import { useRouter } from "vue-router";
export default {
  name: "Result",
  methods: {
    toStart() {
      this.$router.push({
        path: "/FinishJYDLater",
        query: { ...this.$router.currentRoute._rawValue.query },
      });
    },
  },
  setup() {
    const selectValue = ref("");
    const rePayTimeStatus = ref("");
    const showPickerrePayTimeStatus = ref(false);
    const columnsPayTimeStatus = ["12期", "24期", "36期", "48期", "60期"];
    const router = useRouter();
    const datePrevious = router.currentRoute._rawValue.query;
    console.log("res", datePrevious);
    const onConfirmRePayTimeStatus = (value, index) => {
      rePayTimeStatus.value = value;
      showPickerrePayTimeStatus.value = false;
      if (index === 1) {
        selectValue.value = datePrevious.content_two;
      } else if (index === 2) {
        selectValue.value = datePrevious.content_tree;
      } else if (index === 3) {
        selectValue.value = datePrevious.content_four;
      } else if (index === 4) {
        selectValue.value = datePrevious.content_five;
      } else if (index === 0) {
        selectValue.value = datePrevious.content_one;
      }
    };
    return {
      selectValue,
      datePrevious,
      rePayTimeStatus,
      showPickerrePayTimeStatus,
      columnsPayTimeStatus,
      onConfirmRePayTimeStatus,
    };
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.box-flex {
  width: 100%;
  display: flex;
  margin-left: 17px;
  justify-content: start; /* 水平居中 */
  flex-direction: row;
  align-items: center;
}
.Result {
  padding-top: 0px;
}
.jyd-img-icon {
  width: 70px;
  margin-top: 20px;
  margin-bottom: 10px;
  width: 70px;
}
.message_success {
  font-size: 20px;
  font-weight: 900;
  margin-top: 10px;
  color: #25ae0d;
}
.message_month {
  font-size: 20px;
  color: #25ae0d;
  margin-top: 0px;
}
.money_one {
  font-size: 15px;
  color: gray;
}
.img {
  width: 50px;
}
.name {
  font-size: 24px;
  margin-top: 20px;
  color: #000000;
}
.top_title {
  font-size: 24px;
  font-weight: 600;
  padding-top: 25px;
  padding-bottom: 35px;
  color: #000000;
  background-color: #b5ebab;
}
.tips_money {
  display: flex;
  flex-direction: column;
  font-size: 14px;
  color: #000000;
  margin: 10px 0 0 0;
}
.text-left-space {
  text-align: left;
  font-size: 14px;
  color: gray;
  margin: 5px 0 30px 17px;
}
.tips_long {
  font-size: 24px;
  font-weight: 600;
  margin: 5px 0;
}
.tips_left {
  font-size: 14px;
  color: gray;
  margin: 0 0 0 20px;
}
.phone {
  /* font-weight: 900; */
  margin: 5px 0 15px 0;
  font-size: 18px;
}
.computing_value {
  margin: 10px 0px 15px 0;
  font-size: 20px;
  color: #25ae0d;
}
.tips {
  font-size: 14px;
  color: gray;
  margin: 15px 0;
}
.tips_title {
  font-size: 16px;
  color: black;
  font-weight: 600;
  text-align: start;
  margin: 25px 15px 5px 15px;
}
.tips_long {
  text-align: start;
  font-size: 14px;
  color: gray;
  margin: 5px 15px 5px 15px;
}
.van-picker-column__item {
  line-height: 44px;
}
.van-radio-group {
  display: flex;
}
.van-radio {
  margin-right: 5px;
}
.van-cell--required::before {
  position: absolute;
  left: 0px;
  color: #ee0a24;
  font-size: 14px;
  content: "";
}
.van-field__label {
  position: relative;
}
.van-cell--required .van-field__label::after {
  position: absolute;
  right: 14px;
  color: #ee0a24;
  font-size: 14px;
  content: "*";
}
.money-text {
  font-size: 30px;
}
.time_select {
  margin-bottom: 15px;
}
.bt_fpd {
  width: calc(100% - 100px);
  height: 39px;
  color: white;
  margin-bottom: 5px;
  border: none;
  font-size: 16px;
  font-weight: 600;
  border-radius: 25px;
  background-color: #25ae0d;
  border-color: #25ae0d;
}
.tips_attention {
  font-size: 13px;
  color: gray;
  margin: 15px 15px 50px 15px;
}
</style>

