<template>
  <div class="Result">
    <div class="top_title">很抱歉！</div>
    <div class="name">{{ $route.query.clientName }}</div>
    <div class="message_wrong">你暂不符合我司要求</div>
    <div class="tips">受理时间：{{ currentTime }}</div>
  </div>
</template>
<script>
import { computed, ref } from "vue";
export default {
  name: "Result",
  setup() {
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
    };
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.Result {
  padding-top: 10px;
}
.message_wrong {
  font-size: 20px;
  font-weight: 900;
  margin-top: 15px;
  color: #ef3308;
}
.name {
  font-size: 24px;
  margin-top: 15px;
}
.top_title {
  font-size: 24px;
  font-weight: 600;
  margin-top: 39px;
}
.tips {
  font-size: 14px;
  color: gray;
  margin: 15px 0;
}
</style>

