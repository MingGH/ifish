<template>
  <div class="gongde">
    <p class="num">功德：<span>{{ useAppStore.gongde }}</span></p>
    <p class="tips" ref="tipRef">功德+1</p>
    <img ref="gongdeRef" @mousedown="handleMousedown" @mouseup="handleMouseup" class="gongde-img" src="/images/apps/gongde1.png" alt="">
    <audio ref="gongdeAudioRef" src="./images/apps/gongde3.aac"></audio>
  </div>
</template>

<script setup>
import { ref } from "vue";
import useStore from "@/store";
const { useAppStore } = useStore();

const gongdeAudioRef = ref();
const gongdeRef = ref();
const tipRef = ref();
const handleMousedown = () => {
  gongdeRef.value.classList.add("zoomed");
}
const handleMouseup = () => {
  useAppStore.addGongde();
  gongdeAudioRef.value.play();
  gongdeRef.value.classList.remove("zoomed");
  tipRef.value.classList.add("active");
  setTimeout(() => {
    tipRef.value.classList.remove("active");
  }, 550)
}
</script>

<style lang="less" scoped>
.gongde {
  position: relative;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
  .num {
    color: var(--primary-color);
    font-size: 16px;
  }
  .tips {
    position: absolute;
    font-size: 12px;
    width: 50px;
    text-align: center;
    left: 50%;
    top: 80%;
    transform: translate(-50%, 0);
    opacity: 0;
    transition: transform 0.3s ease-in-out;
    pointer-events: none;
    color: var(--primary-color);
    z-index: 9;
    &.active {
      animation: up .5s linear;
    }
  }
  .gongde-img {
    pointer-events: all;
    width: 80%;
    max-width: 120px;
    transition: transform 0.1s ease-in-out;
    cursor: url(/images/apps/gongde2.png), auto;
    &.zoomed {
      transform: scale(0.88);
    }
  }
}

@keyframes up {
  0% {
    opacity: 0;
    top: 80%;
  }
  50% {
    opacity: 0.4;
    top: 50%;
  }
  100% {
    opacity: 1;
    top: 22%;
  }
}
@media screen and (max-width: 768px) {
  .gongde {
    .num {
      font-size: 14px;
    }
  }
}
</style>