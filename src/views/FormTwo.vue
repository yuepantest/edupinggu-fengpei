<template>
  <div>
    <van-loading
      color="#25ae0d"
      text-color="#OOOOO"
      text-size="24px"
      class="loading"
      v-if="loadFlag"
      size="90px"
      vertical
      >评估中...</van-loading
    >
    <div v-if="!loadFlag">
      <div class="top_back">
        <div class="text-img-text">个人资产信息</div>
      </div>
      <van-form @submit="onSubmit">
        <van-cell-group inset>
          <van-field
            class="text-all"
            v-model="annualIncome"
            name="annualIncome"
            type="number"
            label="月收入"
            placeholder="请输入你的月收入"
            :rules="[{ required: true, message: '请输入你的月收入' },
              { validator: annualIncomeRule, message: '请输入正确的月收入' },
            ]"
          />
          <van-field
            class="text-all"
            v-model="socialSecurity"
            type="number"
            name="socialSecurity"
            label="社保"
            placeholder="请输入你缴纳社保的月数"
            :rules="[{ required: true, message: '请输入你缴纳社保的月数'},
              { validator: socialSecurityRule, message: '请输入正确的社保月数' },
            ]"
          />
          <van-field
            class="text-all"
            v-model="accumulationFund"
            type="number"
            name="accumulationFund"
            label="公积金"
            placeholder="请输入你缴纳公积金的月数"
            :rules="[{ required: true, message: '请输入你缴纳公积金的月数'},
              { validator: accumulationFundRule, message: '请输入正确的公积金月数' },
            ]"
          />
          <van-field
            class="text-all"
            v-model="estateValue"
            type="number"
            name="estateValue"
            label="房产价值"
            placeholder="请输入你的房产价值单位W"
            :rules="[{ required: true, message: '请输入你的房产价值单位W' },
              { validator: estateValueRule, message: '请输入正确的房产价值' },
            ]"
          />
          <van-field
            name="creditQuery"
            class="text-creditQuery"
            label="征信状况"
          >
            <template #input>
              <van-radio-group
                v-model="creditQuery"
                direction="horizontal"
                class="text-all"
              >
                <van-radio class="radio_creditQuery" name="0">无逾期</van-radio>
                <van-radio class="radio_creditQuery" name="1">半年预期少于3次</van-radio>
                <van-radio class="radio_creditQuery" name="2"
                  >半年预期3次以上</van-radio
                >
                <van-radio class="radio_creditQuery" name="3"
                  >当前逾期</van-radio
                >
              </van-radio-group>
            </template>
          </van-field>
        </van-cell-group>
        <div style="margin: 16px">
          <van-button
            round
            block
            type="primary"
            native-type="submit"
            class="bt"
          >
            提&nbsp;&nbsp;交
          </van-button>
        </div>
      </van-form>
    </div>
  </div>
</template>

<script>
import { ref } from "vue";
import { useRouter } from "vue-router";
import axios from "axios";
import { Toast } from "vant";
export default {
  name: "FormTwo",
  setup() {
    const router = useRouter();
    //个人收入
    const annualIncome = ref("");
     //社保
    const socialSecurity = ref("");
     //公积金
    const accumulationFund = ref("");
     //房产价值
    const estateValue = ref("");

    const annualIncomeRule = (val) => {
      return val < 1000000 && val > 999;
    };
    const socialSecurityRule = (val) => {
      return val < 720 && val > 0;
    };
    const accumulationFundRule = (val) => {
      return val < 720 && val > 0;
    };
    const estateValueRule = (val) => {
      return val < 10000 && val > 9;
    };
    //近半年内征信查询次数
    const creditQuery = ref("0");
    const loadFlag = ref(false);
    //提交
    const onSubmit = (values) => {
      let obj = {
        ...values,
        ...router.currentRoute._rawValue.query,
      };
      //设置资产情况

      let annualIncome = 0;
      let socialSecurity = 0;
      let estateValue = 0;
      let accumulationFund = 0;

      console.log(obj);
      const formData = new FormData();
      for (let key in obj) {
        formData.append(key, obj[key]);
      }
      // const instance = axios.create({
      //   headers: { requestKey: "" },
      // });
      // instance
      //   .post("http://fengpei.xyz/add", obj)
      //   .then((res) => {
      //     console.log("res", res);
      //     if (res.data.code === 0 && res.data.data !== 0) {

      //     } else if (res.data.code === 0 && res.data.data === 0) {

      //     } else {
      //       //失败
      //       Toast(res.data.msg);
      //     }
      //   })
      //   .catch((err) => {
      //     Toast("请求异常，请退出重试");
      //     console.log("err", err);
      //   });
    };

    return {
    annualIncome,
    socialSecurity,
    accumulationFund,
    estateValue,
    loadFlag,
    creditQuery,
    annualIncomeRule,
    socialSecurityRule,
    accumulationFundRule,
    estateValueRule,
    onSubmit,
    };
  },
};
</script>
<style scoped>
.checkbox-magin {
  margin: 0 0 0 0;
  padding: 15px 6px 0 0;
}
.title_creditHistory {
  padding-top: 10px;
  font-size: 18px;
}
.title_creditQuery {
  padding-top: 10px;
  font-size: 18px;
}
.radio_creditHistory {
  padding: 5px 0 5px 0;
}
.radio_creditQuery {
  margin: 10px 3px 10px 3px;
}
.title {
  text-align: left;
  margin: 10px 0 10px 15px;
  font-size: 18px;
  font-weight: 600;
}
.text-all {
  padding-top: 10px;
  font-size: 18px;
}
.text-checkbox {
  padding-top: 10px;
}

.text-checkbox >>> .van-field__label {
  margin-right: 0px !important;
  width: 100px;
  margin-top: 25px;
  font-size: 18px;
}
.checkbox-magin {
  padding-top: 10px;
  padding-bottom: 10px;
}
.text-creditQuery {
  padding-top: 0px;
  font-size: 18px;
}
.text-creditQuery >>> .van-field__label {
  padding-right: 25px;
  padding-top: 15px;
}
.text-creditQuery >>> .text-all {
  padding-top: 6px;
}
.text-creditQuery >>> .radio_creditQuery {
  margin: 5px 3px 5px 3px;
}
.title_creditHistory >>> .van-field__label {
  margin-top: 35px;
}
.title_creditHistory >>> .text-all {
  padding-top: 0px;
}
.text-checkbox >>> .van-field__value {
  margin: 0px 0px 0px 0px !important;
  width: 100px;
  font-size: 18px;
}
.van-cell-group--inset {
  margin-left: 0px !important;
}

.top_back {
  width: 100%;
  height: 120px;
  align-items: center;
  justify-content: center;
  display: flex;
  background-color: #25ae0d;
}
.text-img-text {
  color: white;
  font-size: 27px;
}
.text-img-img {
  margin-left: 15px;
  width: 60px;
}
.loading {
  position: fixed;
  left: 50%;
  top: 50%;
  margin-left: -45px;
  margin-top: -80px;
  z-index: 1000;
}
.bt {
  font-size: 21px;
  font-weight: 600;
  background-color: #25ae0d;
}
</style>
