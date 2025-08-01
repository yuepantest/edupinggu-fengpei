<template>
  <div v-if="!loadFlag">
    <van-form @submit="onSubmit">
      <van-cell-group inset>
        <div class="titleHeadstyle">补充资料填写</div>
        <div class="titlestyle">个人信息</div>
        <van-field
          class="text-all"
          v-model="educationBackground"
          is-link
          readonly
          name="educationBackground"
          label="学历"
          placeholder="点击选择你的学历"
          @click="showPickerEducationBackground = true"
        />
        <van-popup
          v-model:show="showPickerEducationBackground"
          destroy-on-close
          position="bottom"
        >
          <van-picker
            :columns="columnsEducationBackground"
            @confirm="onConfirmEducationBackground"
            @cancel="showPickerEducationBackground = false"
          />
        </van-popup>
        <van-field
          class="text-all"
          v-model="maritalStatus"
          is-link
          readonly
          name="maritalStatus"
          label="婚姻状况"
          placeholder="点击选择你的婚姻状况"
          @click="showPickerMaritalStatus = true"
        />
        <van-popup
          v-model:show="showPickerMaritalStatus"
          destroy-on-close
          position="bottom"
        >
          <van-picker
            :columns="columnsMaritalStatus"
            @confirm="onConfirmMaritalStatus"
            @cancel="showPickerMaritalStatus = false"
          />
        </van-popup>
        <van-field
          class="text-all"
          v-model="debt"
          name="debt"
          label="总负债/月还款额"
          placeholder="请填写你的总负债/月还款额"
        />
        <van-field
          class="text-all"
          v-model="presentAddress"
          is-link
          readonly
          name="presentAddress"
          label="你的现居地址"
          placeholder="请选择你的现居城市"
          @click="showArea = true"
        />
        <van-popup v-model:show="showArea" position="bottom">
          <van-area
            :area-list="areaList"
            :columns-num="2"
            value="510100"
            @confirm="onConfirmArea"
            @cancel="showArea = false"
          />
        </van-popup>
        <van-field
          class="text-all"
          v-model="detailAddress"
          name="detailAddress"
          label="详细地址"
          placeholder="请填写你的详细地址"
        />
        <van-field
          class="text-all"
          v-model="livingModel"
          is-link
          readonly
          name="livingModel"
          label="居住方式"
          placeholder="点击选择你的居住方式"
          @click="showPickerlivingModel = true"
        />
        <van-popup
          v-model:show="showPickerlivingModel"
          destroy-on-close
          position="bottom"
        >
          <van-picker
            :columns="columnslivingModel"
            @confirm="onConfirmlivingModel"
            @cancel="showPickerlivingModel = false"
          />
        </van-popup>
        <van-field
          class="text-all"
          v-model="livingSpend"
          name="livingSpend"
          label="住房开支"
          type="number"
          placeholder="请填写你的住房开支"
        />
        <van-field
          class="text-all"
          v-model="childrenNumber"
          is-link
          readonly
          name="childrenNumber"
          label="未成年子女数"
          placeholder="点击选择你的未成年子女数"
          @click="showPickerchildrenNumber = true"
        />
        <van-popup
          v-model:show="showPickerchildrenNumber"
          destroy-on-close
          position="bottom"
        >
          <van-picker
            :columns="columnschildrenNumber"
            @confirm="onConfirmchildrenNumber"
            @cancel="showPickerchildrenNumber = false"
          />
        </van-popup>
        <div class="titlestyle">联系人信息</div>
        <div class="intermidiate-title">亲属1</div>
        <van-field
          class="text-all"
          v-model="relativeOneName"
          name="relativeOneName"
          label="姓名"
          placeholder="请填写你的亲属姓名"
        />
        <van-field
          class="text-all"
          v-model="relativeOneBetween"
          name="relativeOneBetween"
          label="关系"
          placeholder="请填写你和你亲属的关系"
        />
        <van-field
          class="text-all"
          v-model="relativeOnePhone"
          name="relativeOnePhone"
          type="number"
          label="手机号"
          placeholder="请填写你亲属的手机号"
        />
        <div class="intermidiate-title">亲属2</div>
        <van-field
          class="text-all"
          v-model="relativeTwoName"
          name="relativeTwoName"
          label="姓名"
          placeholder="请填写你的亲属姓名"
        />
        <van-field
          class="text-all"
          v-model="relativeTwoBetween"
          name="relativeTwoBetween"
          label="关系"
          placeholder="请填写你和你亲属的关系"
        />
        <van-field
          class="text-all"
          v-model="relativeTwoPhone"
          name="relativeTwoPhone"
          label="手机号"
          type="number"
          placeholder="请填写你亲属的手机号"
        />
        <div class="intermidiate-title">同事1</div>
        <van-field
          class="text-all"
          v-model="colleagueOneName"
          name="colleagueOneName"
          label="姓名"
          placeholder="请填写你的同事姓名"
        />

        <van-field
          class="text-all"
          v-model="colleagueOnePhone"
          name="colleagueOnePhone"
          label="手机号"
          placeholder="请填写你同事的手机号"
          type="number"
        />
        <div class="intermidiate-title">同事2</div>
        <van-field
          class="text-all"
          v-model="colleagueTwoName"
          name="colleagueTwoName"
          label="姓名"
          placeholder="请填写你的同事姓名"
        />
        <van-field
          class="text-all"
          v-model="colleagueTwoPhone"
          name="colleagueTwoPhone"
          label="手机号"
          type="number"
          placeholder="请填写你同事的手机号"
        />
        <div class="titlestyle">工作信息</div>
        <van-field
          class="text-all"
          v-model="companyname"
          name="companyname"
          label="工作单位"
          placeholder="请填写你的工作单位"
        />
        <van-field
          class="text-all"
          v-model="companytype"
          name="companytype"
          label="行业类别"
          placeholder="请填写你的行业类别"
        />
        <van-field
          class="text-all"
          v-model="companysector"
          name="companysector"
          label="部门"
          placeholder="请填写你所在的部门"
        />
        <van-field
          class="text-all"
          v-model="companyposition"
          name="companyposition"
          label="职位"
          placeholder="请填写你的职位"
        />
        <van-field
          class="text-all"
          is-link
          readonly
          @click="showPopupCompanytime"
          v-model="companytime"
          name="companytime"
          label="入职时间"
          placeholder="选择你的入职时间"
        />
        <van-popup
          v-model:show="showCompanyTimePicker"
          destroy-on-close
          position="bottom"
        >
          <van-datetime-picker
            @confirm="onConfirmCompanyTimePicker"
            @cancel="showCompanyTimePicker = false"
            v-model="currentDate"
            type="date"
            format="yyyy-MM-dd"
            title="选择年月日"
            :min-date="minDate"
            :max-date="maxDate"
            :formatter="formatterCompanyTimePicker"
        /></van-popup>
        <van-field
          class="text-all"
          v-model="leaderName"
          name="leaderName"
          label="老板/领导姓名"
          placeholder="请填写你的老板/领导姓名"
        />
        <van-field
          class="text-all"
          v-model="companyScale"
          name="companyScale"
          @click="showPickercompanyScale = true"
          is-link
          readonly
          label="公司规模"
          placeholder="请选择你的公司规模"
        />
        <van-popup
          v-model:show="showPickercompanyScale"
          destroy-on-close
          position="bottom"
        >
          <van-picker
            :columns="columnscompanyScale"
            @confirm="onConfirmcompanyScale"
            @cancel="showPickercompanyScale = false"
          />
        </van-popup>
        <van-field
          class="text-all"
          v-model="monthSalary"
          name="monthSalary"
          label="月薪"
          type="number"
          placeholder="请填写你的月薪"
        />
        <van-field
          class="text-all"
          v-model="acquairSalaryType"
          name="acquairSalaryType"
          @click="showPickeracquairSalaryType = true"
          is-link
          readonly
          label="发薪形式"
          placeholder="请选择你的发薪形式"
        />
        <van-popup
          v-model:show="showPickeracquairSalaryType"
          destroy-on-close
          position="bottom"
        >
          <van-picker
            :columns="columnsacquairSalaryType"
            @confirm="onConfirmacquairSalaryType"
            @cancel="showPickeracquairSalaryType = false"
          />
        </van-popup>
        <van-field
          class="text-all"
          v-model="acquairSalaryDate"
          name="acquairSalaryDate"
          @click="showPickeracquairSalaryDate = true"
          is-link
          readonly
          label="发薪日"
          placeholder="请选择你的发薪日"
        />
        <van-popup
          v-model:show="showPickeracquairSalaryDate"
          destroy-on-close
          position="bottom"
        >
          <van-picker
            :columns="columnsacquairSalaryDate"
            @confirm="onConfirmacquairSalaryDate"
            @cancel="showPickeracquairSalaryDate = false"
          />
        </van-popup>
        <van-field
          class="text-all"
          v-model="companyAdress"
          name="companyAdress"
          label="公司地址"
          placeholder="请填写你公司的地址"
        />
        <van-field
          class="text-all"
          v-model="companyPhoneNumber"
          name="companyPhoneNumber"
          label="单位座机"
          placeholder="请填写你公司的座机号码"
        />
        <van-field
          class="text-all"
          v-model="commuteTime"
          name="commuteTime"
          label="上下班时间"
          placeholder="请填写你的上下班时间"
        />
        <van-field
          v-model="remark"
          name="remark"
          autosize
          class="text-all"
          maxlength="1000"
          label="备注"
          type="textarea"
          placeholder="请输入备注"
          show-word-limit
        />
      </van-cell-group>
      <div style="margin: 30px">
        <van-button round block type="primary" native-type="submit" class="bt">
          下&nbsp;一&nbsp;步
        </van-button>
      </div>
    </van-form>
  </div>
  <div v-if="loadFlag" class="loading">
    <van-loading
      color="#25ae0d"
      text-color="#OOOOO"
      text-size="24px"
      class="loading"
      size="90px"
      vertical
      >提交中...</van-loading
    >
  </div>
</template>
<script>
import { ref, computed } from "vue";
import { useRouter } from "vue-router";
import axios from "axios";
import { Toast } from "vant";
const areaList = require("../assets/area.json");
export default {
  setup() {
    const router = useRouter();
    const datePrevious = router.currentRoute._rawValue.query;
    const loadFlag = ref(false);
    const isButtonDisabled = ref(false);
    const onSubmit = (values) => {
      router.push({
        name: "FormFour",
        query: {
          clientName: "岳攀",
          num: "12000",
        },
      });
    };
    const educationBackground = ref("");
    const showPickerEducationBackground = ref(false);
    const columnsEducationBackground = [
      "全日制硕士及以上",
      "本科",
      "大专",
      "高中",
      "中专/初中及以下",
    ];
    const onConfirmEducationBackground = (value) => {
      educationBackground.value = value;
      showPickerEducationBackground.value = false;
    };
    const maritalStatus = ref("");
    const showPickerMaritalStatus = ref(false);
    const columnsMaritalStatus = ["未婚", "已婚", "离异", "丧偶"];
    const onConfirmMaritalStatus = (value) => {
      maritalStatus.value = value;
      showPickerMaritalStatus.value = false;
    };
    const debt = ref("");
    //城市
    const presentAddress = ref("");
    const showArea = ref(false);
    const onConfirmArea = (areaValues) => {
      showArea.value = false;
      if (areaValues[0].name === areaValues[1].name) {
        presentAddress.value = areaValues[1].name;
      } else {
        presentAddress.value = areaValues[0].name + areaValues[1].name;
      }
    };
    const detailAddress = ref("");
    const livingModel = ref("");
    const showPickerlivingModel = ref(false);
    const columnslivingModel = ["自购无贷款", "自购有贷款", "租房", "寄居"];
    const onConfirmlivingModel = (value) => {
      livingModel.value = value;
      showPickerlivingModel.value = false;
    };
    const livingSpend = ref("");
    const childrenNumber = ref("");
    const showPickerchildrenNumber = ref(false);
    const columnschildrenNumber = ["暂无", "一个", "两个", "三个以上"];
    const onConfirmchildrenNumber = (value) => {
      childrenNumber.value = value;
      showPickerchildrenNumber.value = false;
    };
    const relativeOneName = ref("");
    const relativeOneBetween = ref("");
    const relativeOnePhone = ref("");
    const relativeTwoName = ref("");
    const relativeTwoBetween = ref("");
    const relativeTwoPhone = ref("");
    const colleagueOneName = ref("");
    const colleagueOnePhone = ref("");
    const colleagueTwoName = ref("");
    const colleagueTwoPhone = ref("");
    const companyname = ref("");
    const companytype = ref("");
    const companysector = ref("");
    const companyposition = ref("");
    const companytime = ref("");
    const currentDate = ref(new Date(2024, 0, 1));
    const showCompanyTimePicker = ref(false);
    const showPopupCompanytime = () => {
      showCompanyTimePicker.value = true;
    };
    const onConfirmCompanyTimePicker = (value) => {
      const formattedDate = formatDate(value); // 格式化日期
      companytime.value = formattedDate;
      showCompanyTimePicker.value = false;
    };
    // 格式化日期的函数
    const formatDate = (date) => {
      const year = date.getFullYear();
      const month = String(date.getMonth() + 1).padStart(2, "0"); // 月份是从0开始的，所以+1
      const day = String(date.getDate()).padStart(2, "0");
      return `${year}年${month}月${day}日`; // 返回格式化的日期字符串，例如 "2023-04-01"
    };
    const formatterCompanyTimePicker = (type, value) => {
      if (type === "year") {
        return value + "年";
      }
      if (type === "month") {
        return value + "月";
      }
      if (type === "day") {
        return value + "日";
      }
      return value;
    };
    const companyScale = ref("");
    const leaderName = ref("");
    const showPickercompanyScale = ref(false);
    const columnscompanyScale = ["0-20人", "20-50人", "50-100人", "100人以上"];
    const onConfirmcompanyScale = (value) => {
      companyScale.value = value;
      showPickercompanyScale.value = false;
    };
    const monthSalary = ref("");
    const acquairSalaryType = ref("");
    const showPickeracquairSalaryType = ref(false);
    const columnsacquairSalaryType = ["打卡", "转账", "微信/支付宝", "其他"];
    const onConfirmacquairSalaryType = (value) => {
      acquairSalaryType.value = value;
      showPickeracquairSalaryType.value = false;
    };
    const acquairSalaryDate = ref("");
    const showPickeracquairSalaryDate = ref(false);
    const columnsacquairSalaryDate = Array.from(
      { length: 31 },
      (_, index) => index + 1
    );
    const onConfirmacquairSalaryDate = (value) => {
      acquairSalaryDate.value = value;
      showPickeracquairSalaryDate.value = false;
    };
    const companyAdress = ref("");
    const companyPhoneNumber = ref("");
    const commuteTime = ref("");
    const remark = ref("");
    return {
      loadFlag,
      onSubmit,
      educationBackground,
      columnsEducationBackground,
      onConfirmEducationBackground,
      showPickerEducationBackground,
      maritalStatus,
      columnsMaritalStatus,
      onConfirmMaritalStatus,
      showPickerMaritalStatus,
      debt,
      showArea,
      onConfirmArea,
      presentAddress,
      areaList,
      detailAddress,
      livingModel,
      columnslivingModel,
      onConfirmlivingModel,
      showPickerlivingModel,
      livingSpend,
      childrenNumber,
      columnschildrenNumber,
      onConfirmchildrenNumber,
      showPickerchildrenNumber,
      relativeOneName,
      relativeOneBetween,
      relativeOnePhone,
      relativeTwoBetween,
      relativeTwoName,
      relativeTwoPhone,
      colleagueOneName,
      colleagueOnePhone,
      colleagueTwoName,
      colleagueTwoPhone,
      companyname,
      companytype,
      companysector,
      companyposition,
      formatterCompanyTimePicker,
      companytime,
      minDate: new Date(2000, 0, 1),
      maxDate: new Date(2025, 10, 1),
      currentDate,
      showCompanyTimePicker,
      showPopupCompanytime,
      onConfirmCompanyTimePicker,
      companyScale,
      leaderName,
      showPickercompanyScale,
      columnscompanyScale,
      onConfirmcompanyScale,
      monthSalary,
      acquairSalaryType,
      showPickeracquairSalaryType,
      columnsacquairSalaryType,
      onConfirmacquairSalaryType,
      acquairSalaryDate,
      showPickeracquairSalaryDate,
      columnsacquairSalaryDate,
      onConfirmacquairSalaryDate,
      companyAdress,
      companyPhoneNumber,
      commuteTime,
      remark,
      datePrevious,
      isButtonDisabled,
    };
  },
};
</script>
<style scoped>
.titleHeadstyle {
  font-size: 20px;
  font-weight: 600;
  margin-top: 30px;
}
.text-all {
  padding-top: 10px;
  font-size: 18px;
}
.loading {
  margin-top: 200px;
}
.titlestyle {
  font-size: 20px;
  margin-top: 30px;
  margin-bottom: 15px;
}
.intermidiate-title {
  font-size: 14px;
  margin-left: 15px;
  text-align: left;
  font-weight: 600;
  margin-bottom: 10px;
  margin-top: 20px;
}
.bt {
  font-size: 21px;
  font-weight: 600;
  background-color: #25ae0d;
  border-color: #25ae0d;
}
.loading {
  position: fixed;
  left: 50%;
  top: 50%;
  margin-left: -45px;
  margin-top: -80px;
  z-index: 1000;
}
</style>