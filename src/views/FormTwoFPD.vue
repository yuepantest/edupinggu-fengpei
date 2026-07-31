<template>
  <div>
    <div class="loading" v-if="loadFlag">
      <img class="loading-img" src="../assets/id_card_gxd.png" />
      <div class="progress_title">
        {{ $route.query.clientName }}
      </div>
      <div class="progress_title">正在对你的资信评估...</div>
      <div class="progress_title" v-if="loadBlackList">该用户在黑名单中，审核结束</div>
      <div>
        <div v-for="item in list" :key="item.id">
          {{ item.title }}
        </div>
      </div>
      <div v-if="loadProcess">
        <van-loading class="progress_content" color="#f88724" text-color="#f88724" text-size="15px" type="spinner"
          size="50px" vertical></van-loading>
        <div class="progress_bottom">大概需用时5分钟...</div>
      </div>
    </div>
  </div>
  <div v-if="!loadFlag">
    <div class="top_back">
      <div class="text-img-text">优享贷</div>
      <img class="text-img-img" src="../assets/persion.png" />
    </div>
    <van-form @submit="onSubmit">
      <van-cell-group inset>
        <van-field class="text-all" v-model="annualIncome" name="annualIncome" type="number" required label="月收入"
          placeholder="请输入你的月收入" :rules="[
            { required: true, message: '请输入你的月收入' },
            { validator: annualIncomeRule, message: '请输入正确的月收入' },
          ]" />
        <van-field class="text-all" v-model="socialSecurity" type="number" name="socialSecurity" label="社保"
          placeholder="请输入你缴纳社保的月数" :rules="[
            { required: false, message: '请输入你缴纳社保的月数' },
            {
              validator: socialSecurityRule,
              message: '请输入正确的社保月数',
            },
          ]" />
        <van-field class="text-all" v-model="accumulationFund" type="number" name="accumulationFund" label="公积金"
          placeholder="请输入你缴纳公积金的月数" :rules="[
            { required: false, message: '请输入你缴纳公积金的月数' },
            {
              validator: accumulationFundRule,
              message: '请输入正确的公积金月数',
            },
          ]" />
        <van-field class="text-all" v-model="estateValue" type="number" name="estateValue" required label="资产价值"
          placeholder="请输入你的资产价值单位W" :rules="[
            { required: true, message: '请输入你的资产价值单位W' },
            { validator: estateValueRule, message: '请输入正确的资产价值' },
          ]" />
        <van-field class="text-all" v-model="antPoints" required name="antPoints" type="number" label="芝麻信用"
          placeholder="请输入芝麻信用分" :rules="[
            { required: true, message: '请输入芝麻信用分' },
            { validator: validatorPoints, message: '请输入正确的分数' },
          ]" />
        <van-field name="creditQuery" required class="text-creditQuery" label="征信状况">
          <template #input>
            <van-radio-group v-model="creditQuery" direction="horizontal" class="text-all">
              <van-radio class="radio_creditQuery" checked-color="#f88724" name="0">无逾期</van-radio>
              <van-radio class="radio_creditQuery" checked-color="#f88724" name="1">半年逾期少于3次</van-radio>
              <van-radio class="radio_creditQuery" checked-color="#f88724" name="2">半年逾期3次以上</van-radio>
              <van-radio class="radio_creditQuery" checked-color="#f88724" name="3">当前逾期</van-radio>
            </van-radio-group>
          </template>
        </van-field>
      </van-cell-group>
      <van-field class="text-all" v-model="bankId" type="number" required name="bankId" label="还款账号"
        placeholder="请输入你还款的银行卡号" :rules="[
          { required: true, message: '请输入你还款的银行卡号' },
          { pattern: patternbankId, message: '请输入正确的银行卡号' },
        ]" />
      <div style="margin: 16px">
        <van-button round block type="primary" native-type="submit" class="bt">
          提&nbsp;&nbsp;交
        </van-button>
      </div>
    </van-form>
  </div>
</template>

<script>
import { ref } from "vue";
import { useRouter } from "vue-router";
import axios from "axios";
import { Toast } from "vant";
export default {
  name: "FormTwoFPD",

  setup() {
    const list = ref([]);
    const router = useRouter();
    //个人收入
    const annualIncome = ref("");
    //社保
    const socialSecurity = ref("");
    //公积金
    const accumulationFund = ref("");
    //房产价值
    const estateValue = ref("");
    //芝麻信用分
    const antPoints = ref("");
    //还款账号
    const bankId = ref("");
    const isButtonDisabled = ref(false);
    function getTypeName(type) {
      switch (type) {
        case 1:
          return "你已经申请过薪享贷了";
        case 2:
          return "你已经申请过优享贷了";
        case 3:
          return "你已经申请过小微快贷了";
        default:
          return "你已经申请过快享贷了";
      }
    }
    const validatorPoints = (val) => {
      return val > 350 && val < 950;
    };
    const annualIncomeRule = (val) => {
      return val < 1000000 && val > 999;
    };
    const socialSecurityRule = (val) => {
      if (!socialSecurity) {
        return val < 720;
      }
    };
    const accumulationFundRule = (val) => {
      if (!accumulationFund) {
        return val < 720;
      }
    };
    const estateValueRule = (val) => {
      return val < 10000 && val > 9;
    };
    //近半年内征信查询次数
    const creditQuery = ref("0");
    const loadFlag = ref(false);
    const loadBlackList = ref(false);
    const loadProcess = ref(true);
    //提交

    const onSubmit = (values) => {
      if (!isButtonDisabled.value) {
        isButtonDisabled.value = true;
        // 执行你的逻辑
        let obj = {
          ...values,
          type: "2",
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
        const instance = axios.create();
        loadFlag.value = true;
        instance
          .post("http://47.109.33.172:8081/checkBlacklist", { identityCard: obj.identityCard })
          .then((res) => {
            console.log("接口1返回", res);
            // 判断接口1是否成功
            if (res.data.code === 1) {
              //该用户在黑名单里
              setTimeout(() => {
                loadBlackList.value = true;
                loadProcess.value = false;
              }, 3000);
              return Promise.reject("blacklist");
            } else if (res.data.code === 0) {
              //该用户不在在黑名单里面调用接口2
              console.log("identityCard", obj.identityCard);
              return instance.post("http://47.109.33.172:8081/getClientByIdentityCard", { identityCard: obj.identityCard });
            } else {
              //接口异常
               Toast("请求异常，请推出重新申请");
            }
          })
          .then((res) => {
            console.log("接口2返回", res);
            // 判断接口2成功
            if (res.data.code === 1) {
              // 查出该用户以往的申请经历
                list.value = res.data.data.map(item => {
                  return {
                    ...item,
                    title: getTypeName(item.type)
                  }
                });
              return instance.post("http://47.109.33.172:8081/calculating", formData);
            } else {
               //接口异常
               Toast("请求异常，请推出重新申请");
            }
          })
          .then((res) => {
            console.log("接口3返回", res);
            setTimeout(() => {
              if (res.data.code === 1) {
                //录取数据成功
                Toast("申请成功");
                loadFlag.value = false;
              } else if (res.data.code === 0) {
                Toast(res.data.msg);
                loadProcess.value = false
              } 
            }, 6000);
          })
        setTimeout(() => {
          isButtonDisabled.value = false; // 可以在这里设置按钮重新启用
        }, 2000); // 比如1秒后重新启用按钮
      } else {
        Toast("请不要频繁点击");
      }
    };

    return {
      antPoints,
      annualIncome,
      socialSecurity,
      accumulationFund,
      estateValue,
      loadFlag,
      loadBlackList,
      loadProcess,
      list,
      creditQuery,
      validatorPoints,
      annualIncomeRule,
      socialSecurityRule,
      accumulationFundRule,
      estateValueRule,
      onSubmit,
      isButtonDisabled,
      bankId,
      patternbankId: /^[0-9]{16,19}$/,
    };
  },
};
</script>
<style scoped>
.progress_title {
  margin-top: 15px;
  margin-bottom: 150px;
}

.loading {
  align-items: center;
  justify-content: center;
  /* 水平居中 */
  margin-top: 30%;
  margin-left: 50px;
  margin-right: 50px;
}

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

.text-checkbox>>>.van-field__label {
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

.text-creditQuery>>>.van-field__label {
  padding-right: 25px;
  padding-top: 15px;
}

.text-creditQuery>>>.text-all {
  padding-top: 6px;
}

.text-creditQuery>>>.radio_creditQuery {
  margin: 5px 3px 5px 3px;
}

.title_creditHistory>>>.van-field__label {
  margin-top: 35px;
}

.title_creditHistory>>>.text-all {
  padding-top: 0px;
}

.text-checkbox>>>.van-field__value {
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
  background-color: #f88724;
}

.text-img-text {
  color: white;
  font-size: 27px;
}

.text-img-img {
  margin-left: 15px;
  width: 60px;
}

.loading-img {
  width: 60px;
}

.loading {
  align-items: center;
  justify-content: center;
  /* 水平居中 */
  margin-top: 30%;
  margin-left: 50px;
  margin-right: 50px;
}

.progress_title {
  margin-top: 15px;
  margin-bottom: 15px;
}

.progress_content {
  margin-top: 150px;
}

.progress_bottom {
  margin-top: 15px;
  font-size: 12px;
}

.bt {
  font-size: 21px;
  font-weight: 600;
  background-color: #f88724;
  border-color: #f88724;
}
</style>
