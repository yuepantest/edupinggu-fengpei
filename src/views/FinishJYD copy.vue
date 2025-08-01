<template>
  <div class="Result">
    <div class="top_title">薪享贷</div>
    <div class="name">{{ $route.query.clientName }}</div>
    <div class="tips_money">
      <div class="money_one">恭喜你已通过预审</div>
      <div class="message_success">额度: {{ $route.query.num }}</div>
      <div class="computing_value">利率: {{ $route.query.rate }}</div>
      <van-field name="selectTime" label="你可以选择:">
        <template #input>
          <van-radio-group v-model="selectTime" direction="horizontal">
            <van-radio class="time_select" checked-color="#25ae0d" name="0">{{
              $route.query.title_one
            }}</van-radio>
            <van-radio class="time_select" checked-color="#25ae0d" name="1">{{
              $route.query.title_two
            }}</van-radio>
            <van-radio class="time_select" checked-color="#25ae0d" name="2">{{
              $route.query.title_three
            }}</van-radio>
            <van-radio
              class="time_select"
              checked-color="#25ae0d"
              v-show="$route.query.type === '1'"
              name="3"
              >{{ $route.query.title_four }}</van-radio
            >
          </van-radio-group>
        </template>
      </van-field>
    </div>
    <div class="message_month">{{ selectValue }}</div>
    <div class="tips">还款方式：每月等额本息</div>
    <div class="tips">受理时间：{{ currentTime }}</div>
    <div class="tips">申请编号: {{ titleTop }}</div>
    <div class="tips">联系电话: {{ $route.query.phone }}</div>
    <div class="tips">身份证号: {{ $route.query.identityCardContent }}</div>
    <div class="tips">还款账号: {{ $route.query.bankIdContent }}</div>
    <button round block class="bt_fpd" @click="toStart()">
      下&nbsp;一&nbsp;步
    </button>
    <div class="tips_title">办理流程：</div>
    <div class="tips_title">（1）准备材料：</div>
    <div class="tips_long">
      ①身份证正反面复印件；②近三天的工作收入证明③联系人信息
    </div>
    <div class="tips_title">（2）审核：</div>
    <div class="tips_long">
      资料提交后三个工作日内会有审批人员受理审批，中途可能致电本人或者联系人询问情况
    </div>
    <div class="tips_title">（3）放款：</div>
    <div class="tips_long">
      审核通过后将签订借款合同并履行完后续手续流程后进行放款
    </div>
    <div class="tips_attention">
      提醒：借款资金仅用于个人消费，严禁流于房市、股市、投资、炒股、还债、赌博等非法行为，否则一经发现拒绝放款，已放款则提前终止合同回收借款！
    </div>
  </div>
</template>
<script>
import { Toast } from "vant";
import { computed, ref } from "vue";
import { useRouter } from "vue-router";
export default {
  name: "Result",
  methods: {
    toStart() {
      this.$router.push({
        path: "/FormThree",
        query: { ...this.$router.currentRoute._rawValue.query },
      });
    },
  },
  setup() {
    const router = useRouter();
    const datePrevious = router.currentRoute._rawValue.query;
    console.log("res", datePrevious);
    const selectTime = ref("0");
    const selectValue = computed(() => {
      if (selectTime.value === "1") return datePrevious.content_two;
      else if (selectTime.value === "2") return datePrevious.content_tree;
      else if (selectTime.value === "3") return datePrevious.content_four;
      else if (selectTime.value === "0") return datePrevious.content_one;
    });
    const titleTop = computed(() => {
      return datePrevious.applicationNumber;
    });
    const currentTime = computed(() => {
      let time = new Date();
      let year = time.getFullYear();
      let month =
        time.getMonth() + 1 > 9
          ? time.getMonth() + 1
          : "0" + (time.getMonth() + 1);
      let day = time.getDate();
      let hour = time.getHours();
      let m = time.getMinutes();
      let s = time.getSeconds();
      return `${year}-${month}-${day} ${hour}:${m > 9 ? m : "0" + m}:${
        s > 9 ? s : "0" + s
      }`;
    });
    return {
      currentTime,
      selectTime,
      selectValue,
      datePrevious,
      titleTop,
    };
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.Result {
  padding-top: 10px;
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
  margin-top: 15px;
  color: #000000;
}
.tips_money {
  display: flex;
  flex-direction: column;
  font-size: 14px;
  color: #000000;
  margin: 10px 0 0 0;
}
.tips_long {
  font-size: 24px;
  font-weight: 600;
  margin: 5px 0;
}
.tips_attention {
  font-size: 13px;
  color: gray;
  margin: 15px 15px 50px 15px;
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
</style>

