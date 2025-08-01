<template>
  <div>
    <div class="top_back">
      <div class="text-img-text">个人基本信息</div>
    </div>
    <van-form @submit="onSubmit">
      <van-cell-group inset>
        <div class="top-line">
          <van-field
            class="text-all top_input"
            v-model="clientName"
            name="clientName"
            label="姓名"
            label-width="5em"
            required
            placeholder="请输入姓名"
            :rules="[
              { required: true, message: '请输入姓名' },
              { validator: validatorNameOne, message: '姓名必须为汉字' },
              { validator: validatorNameTwo, message: '不能超过两个字' },
            ]"
          ></van-field> 
        </div>
  
        <van-field
          class="text-all"
          v-model="city"
          is-link
          readonly
          label-width="5em"
          required
          name="city"
          label="城市"
          placeholder="请选择城市（成都市）"
          @click="showArea = true"
          :rules="[{ required: true, message: '请选择城市' }]"
        />
        <van-popup v-model:show="showArea" position="bottom" class="text-all">
          <van-area
            :area-list="areaList"
            :columns-num="2"
            value="510100"
            required
            @confirm="onConfirm"
            @cancel="showArea = false"
          />
        </van-popup>
        <van-field
          class="text-all"
          v-model="phone"
          type="number"
          name="phone"
          label-width="5em"
          required
          label="手机号"
          placeholder="手机号"
          :rules="[
            { required: true, message: '请填写手机号' },
            { pattern:patternPhone, message: '请输入正确手机号' },
          ]"
        />
        <van-field
          class="text-all"
          v-model="identityCard"
          type="number"
          name="identityCard"
          label-width="5em"
          required
          label="身份证号"
          placeholder="身份号码"
          :rules="[
            { required: true, message: '请填写身份号码' },
            { pattern:patternIdentity, message: '请输入正确身份号码' },
          ]"
        />
        <van-field
          class="text-all"
          v-model="loanAmount"
          type="number"
          name="loanAmount"
          required
          label-width="5em"
          label="额度需求"
          placeholder="额度需求"
          :rules="[
            { required: true, message: '请填写额度需求' },
            { validator: validatorMount, message: '额度应大于5000，小于500万' },
          ]"
        />
      </van-cell-group>
      <div style="margin: 30px">
        <van-button round block type="primary" native-type="submit" class="bt">
          下&nbsp;一&nbsp;步
        </van-button>
      </div>
    </van-form>
    <div class="buttom-title">
      声明：本平台只根据用户提交的信息进行额度评估，不会涉及到用户隐私和征信查询，请放心使用。
    </div>
  </div>
</template>

<script>
const areaList = require("../assets/area.json");
import { ref } from "vue";
import { useRouter } from "vue-router";
export default {
  name: "FormOne",
  setup() {
    const validatorNameOne = (val) => {
      var reg = /^[\u4e00-\u9fa5]+$/gi;
      return reg.test(val);
    };
    const validatorNameTwo = (val) => {
      return val.length < 3;
    };
    const validatorMount = (val) => {
      return val >= 5000 && val <= 5000000;
    };
    //姓名
    const clientName = ref("");
    //城市
    const city = ref("");
    const showArea = ref(false);
    const onConfirm = (areaValues) => {
      showArea.value = false;
      city.value = areaValues[1].name;
    };
    //手机号
    const phone = ref("");
    //身份证号
    const identityCard = ref("");
    //额度
    const loanAmount = ref("");
    //提交
    const router = useRouter();
    const onSubmit = (values) => {
      router.push({
        name: "FormTwo",
        query: {
          ...values,
        },
      });
    };
    return {
      clientName,
      city,
      areaList,
      showArea,
      phone,
      identityCard,
      loanAmount,
      onConfirm,
      onSubmit,
      validatorNameOne,
      validatorNameTwo,
      patternPhone: /^[1][3,4,5,7,8,9][0-9]{9}$/,
      patternIdentity: /^(([1-9][0-9]{5}(19|20)[0-9]{2}((0[1-9])|(1[0-2]))([0-2][1-9]|10|20|30|31)[0-9]{3}([0-9]|X|x))|([1-9][0-9]{5}[0-9]{2}((0[1-9])|(1[0-2]))([0-2][1-9]|10|20|30|31)[0-9]{3}))$/,
      validatorMount,
    };
  },
};
</script>
<style scoped>

.radio-sex-left {
  margin: 20px 0 0 0;
} 
.radio-sex-right {
  margin: 20px 0 0 5px;
}
.top_input {
  width: 68%;
}
.top-line {
  align-items: flex-start;
  display: flex;
}
.text-all {
  margin-top: 9px;
  font-size: 18px;
}
.top_back {
  width: 100%;
  height: 120px;
  align-items: center;
  justify-content: center;
  display: flex;
  background-color: #25ae0d;
}
.van-cell-group--inset {
  margin-left: 0px !important;
}
.text-img-text {
  color: white;
  font-size: 27px;
}
.text-img-img {
  margin-left: 15px;
  width: 60px;
}
.buttom-title {
  margin: 0 30px;
  font-size: 12px;
}
.buttom-title-final {
  margin: 15px 0 0 0;
  font-size: 12px;
}
.bt {
  font-size: 21px;
  font-weight: 600;
   background-color: #25ae0d;
}
.text-all {
  margin: 4px 0px 4px 0px;
}
</style>
