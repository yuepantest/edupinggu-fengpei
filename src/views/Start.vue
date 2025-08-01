<template>
  <div>
    <div class="top_back">
      <div class="text-img">
        <div class="text-img-text">客户资信评估</div>
        <img class="text-img-img" src="../assets/icon.png" />
      </div>
      <div class="top_text_final">请开始你的额度评估吧！</div>
    </div>
    <div class="center-text">
      <button round block class="bt_work" @click="toStartGXD()">
        快&nbsp;享&nbsp;贷&nbsp;
      </button>
      <div>（工作6个月以上，收入良好，额度1-15万</div>
    </div>
    <div class="center-text">
      <button round block class="bt_ace" @click="toStartJYD()">
        薪&nbsp;享&nbsp;贷
      </button>
      <div>
        有稳定工作收入，有社保/公积金或者有房产可申请，利息低，额度2-20万
      </div>
    </div>
    <div class="center-text">
      <button round block class="bt_fpd" @click="toStartFPD()">
        优&nbsp;享&nbsp;贷
      </button>
      <div>有房产，有稳定工作，先息后本，利率低</div>
    </div>
    <div class="center-text">
      <button round block class="bt" @click="toStartXWKD()">
        小&nbsp;微&nbsp;快&nbsp;贷
      </button>
      <div>有营业执照6个月以上，公司有正常经营</div>
    </div>
  </div>
  <div class="buttom-text">
    消费信贷主要是针对有稳定收入，还款能力良好的年轻用户，办理简单，容易通过
  </div>
</template>

<script>
import { Toast } from "vant";
export default {
  name: "Start",
  methods: {
    toStart() {
      this.$router.push({
        path: "/FormOne",
        query: {},
      });
    },
    toStartGXD() {
      this.$router.push({
        path: "/FormOneGXD",
        query: {},
      });
    },
    toStartJYD() {
      this.$router.push({
        path: "/FormOneJYD",
        query: {},
      });
    },
    toStartFPD() {
      this.$router.push({
        path: "/FormOneFPD",
        query: {},
      });
    },
    toStartXWKD() {
      Toast("此功能还在开发中...");
      // this.$router.push({
      //   path: "/FormThreeCopy",
      //   query: {},
      // });
    },
  },
};
</script>
<style scoped>
.buttom-text {
  margin: 30px 30px 0px 30px;
  font-size: 12px;
  font-weight: 550;
}
.bt {
  width: calc(100% - 100px);
  height: 39px;
  color: white;
  margin-bottom: 5px;
  border: none;
  font-size: 16px;
  font-weight: 600;
  border-radius: 25px;
  background: #25ae0d;
}
.bt_work {
  width: calc(100% - 100px);
  height: 39px;
  color: white;
  margin-bottom: 5px;
  border: none;
  font-size: 16px;
  font-weight: 600;
  border-radius: 25px;
  background-color: #0fa6f7;
  border-color: #0fa6f7;
}
.bt_ace {
  width: calc(100% - 100px);
  height: 39px;
  color: white;
  margin-bottom: 5px;
  border: none;
  font-size: 16px;
  font-weight: 600;
  border-radius: 25px;
  background-color: #d4237a;
  border-color: #d4237a;
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
  background-color: #f88724;
  border-color: #f88724;
}
.center-text {
  display: flex;
  margin: 30px 0px 0px 0px;
  font-size: 12px;
  color: #25ae0d;
  align-items: center;
  flex-direction: column;
  justify-content: space-around;
}
.top_text {
  padding: 20px 0px 0px 30px;
  text-align: left;
  color: white;
  font-size: 26px;
}
.top_text_final {
  margin-top: 38px;
  padding: 0px 0px 0px 30px;
  text-align: start;
  color: white;
  font-size: 18px;
}
.text-img-text {
  color: white;
  font-size: 32px;
}
.text-img-img {
  margin-left: 15px;
  width: 60px;
}
.text-img {
  flex-direction: row;
  padding: 30px 0px 0px 30px;
  justify-content: center;
  align-items: center;
  display: flex;
}
.top_back {
  width: 100%;
  height: 180px;
  background-color: #25ae0d;
}
</style>
