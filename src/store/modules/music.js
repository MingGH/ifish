import { defineStore } from "pinia";
import { toast } from "@/utils/feedback";

export const useMusicStore = defineStore("ifishMusic", {
  state: () => {
    return {
      visible: false,
      settings: {
        playing: false,
        mute: false,
        volume: 80,
        currentTime: 0,
        mode: "listCycle", // listCycle列表循环 singleCycle单曲循环 randomPlay随机播放
      },
      musicList: [],
      activeIndex: -1,
      searchHistory: [],
    };
  },
  actions: {
    // 控制音乐控件的显隐
    toggleVisible() {
      this.visible = !this.visible
    },
    // 切换播放模式
    changeMode(mode) {
      this.settings.mode = mode;
      const modes = {
        listCycle: "列表循环",
        singleCycle: "单曲循环",
        randomPlay: "随机播放"
      }
      toast({
        content: `已切换为${modes[mode]}模式`
      })
    },
    // 切换是否静音
    toggleMute(flag) {
      this.settings.mute = !this.settings.mute;
      if (flag && this.settings.volume === 0) {
        this.settings.mute = false;
        this.settings.volume = 20;
      }
    },
    // 执行播放
    playMusic(idx) {
      this.settings.playing = true;
      this.activeIndex = idx;
    },
  },
  persist: {
    enabled: true,
    strategies: [
      {
        storage: localStorage,
      },
    ],
  },
});
