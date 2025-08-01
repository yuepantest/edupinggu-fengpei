<template>
  <div class="name">{{$route.query.clientName}}</div>
  <img class="text-img-img" src="../assets/jyd_success.png" />
  <div class="success">提交成功</div>
  <div class="tips">请耐心等待审核...</div>
</template>

<script>
import { ref, computed } from "vue";
import { useRouter } from "vue-router";
export default {
  setup() {
    const router = useRouter();
    const datePrevious = router.currentRoute._rawValue.query;
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
    return { currentTime, datePrevious };
  },
};
</script>

<style scoped>
.name {
  font-size: 24px;
  margin-top: 100px;
  color: #2b2927;
}
.mumber {
  font-size: 20px;
  margin-top: 10px;
  color: #2b2927;
}
.success {
  font-size: 30px;
  margin-bottom: 15px;
  margin-top: 15px;
  color: #f39436;
}
.content {
  font-size: 15px;
  margin-top: 5px;
}
.text-img-img {
  margin-top: 100px;
  width: 60px;
}
.tips {
  font-size: 14px;
  color: gray;
  margin: 15px 0;
}
</style>