<template>
  <div class="fake-box">
    <div class="inner">
      <img
        class="image_block"
        src="https://hellokit.com.cn/fakeupdate/assets/img/hPIlmru.png"
      />
      <div class="font">
        <p>
          Installing Windows Updates...<span>{{ percent }}%</span>
        </p>
        <p>Do not turn off or unplug your computer.</p>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, watch } from "vue";

const props = defineProps({
  visible: {
    type: Boolean,
    default: false,
  },
});

const percent = ref(0);
let timer = null;
let interval = 5000;

const doInterval = () => {
  timer = setInterval(() => {
    percent.value++;
    if (percent.value >= 99) {
      percent.value = 0;
    }
  }, interval);
};

const clear = () => {
  percent.value = 0;
  timer && clearInterval(timer);
};

watch(
  () => props.visible,
  (newVal) => {
    if (newVal) {
      clear();
      doInterval();
    } else {
      clear();
    }
  },
  {
    immediate: true,
    deep: true,
  }
);
</script>

<style lang="less" scoped>
.fake-box {
  position: fixed;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  z-index: 999999;
  cursor: url(https://hellokit.com.cn/fakeupdate/assets/img/gQyFbtU.png), auto;
  background: url("https://hellokit.com.cn/fakeupdate/assets/img/N9nbgDY.jpg") #5a7edc
    no-repeat 100% center / cover fixed;
  .inner {
    position: absolute;
    top: 55%;
    left: 50%;
    height: 70px;
    width: 520px;
    font-family: Tahoma, Arial;
    font-size: 20px;
    color: #fff;
    text-align: right;
    display: flex;
    flex-direction: column;
    align-items: end;
    justify-content: flex-end;
    .image_block {
      position: relative;
      left: 20px;
      width: 400px;
    }
    .font {
      line-height: 1.4;
      span {
        margin-left: 6px;
      }
    }
  }
}
</style>
