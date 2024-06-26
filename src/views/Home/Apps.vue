<template>
  <Draggable
    :list="apps"
    :animation="100"
    item-key="id"
    class="list-group apps"
    :forceFallback="true"
    ghost-class="ghost"
    :fallback-tolerance="8"
    :delay="10"
    :move="onMove"
  >
    <template #item="{ element }">
      <div
        class="app"
        :class="[`column${element.gridSize[1]}-row${element.gridSize[0]}`]"
      >
        <div
          class="dataset"
          :style="{
            borderRadius: `${useSystemStore.settings.appRadius}${
              element.gridSize[0] === element.gridSize[1] ? '%' : 'px'
            }`,
          }"
        >
          <div
            class="bookmark"
            v-if="element.type === 'bookmark'"
            @click="handleAppClick(element)"
            @contextmenu.stop="(e) => handleAppContextMenu(e, element)"
          >
            <img class="logo" v-lazyload="element.icon" alt="" />
            <div
              class="description"
              v-if="element.gridSize[1] == 2 && element.gridSize[0] == 1"
            >
              <p>{{ element.title }}</p>
              <span>{{ element.description }}</span>
            </div>
          </div>
          <div
            class="comp"
            v-else
            @contextmenu.stop="(e) => handleAppContextMenu(e, element)"
          >
            <component :is="components[element.component]" :app="element" />
          </div>
        </div>
        <p class="title">{{ element.title }}</p>
      </div>
    </template>
  </Draggable>

  <!-- 首页书签弹框 -->
  <AppDialog />
</template>

<script setup>
import { ref, defineAsyncComponent, watch } from "vue";
import Draggable from "vuedraggable";
import useStore from "@/store";
const { useAppStore, useContextMenuStore, useSystemStore } = useStore();
const AppDialog = defineAsyncComponent(() =>
  import("@/components/common/AppDialog/Index.vue")
);
const ChatGpt = defineAsyncComponent(() =>
  import("@/components/common/Apps/ChatGpt.vue")
);
const ReadWorld = defineAsyncComponent(() =>
  import("@/components/common/Apps/ReadWorld.vue")
);
const ImgPreview = defineAsyncComponent(() =>
  import("@/components/common/Apps/ImgPreview.vue")
);
const Tiangou = defineAsyncComponent(() =>
  import("@/components/common/Apps/Tiangou.vue")
);
const Zhibuzhi = defineAsyncComponent(() =>
  import("@/components/common/Apps/Zhibuzhi.vue")
);
const Gongde = defineAsyncComponent(() => import("@/components/common/Apps/Gongde.vue"));
const Music = defineAsyncComponent(() => import("@/components/common/Apps/Music.vue"));
const WordGames = defineAsyncComponent(() =>
  import("@/components/common/Apps/WordGames.vue")
);
const FakeUpdate = defineAsyncComponent(() =>
  import("@/components/common/Apps/FakeUpdate/Index.vue")
);
const OnlineMiniGames = defineAsyncComponent(() =>
  import("@/components/common/Apps/OnlineMiniGames.vue")
);
const OffWorkCountdown = defineAsyncComponent(() =>
  import("@/components/common/Apps/OffWorkCountdown.vue")
);

const components = {
  chatGpt: ChatGpt,
  imgpreview: ImgPreview,
  readWorld: ReadWorld,
  tiangou: Tiangou,
  zhibuzhi: Zhibuzhi,
  gongde: Gongde,
  music: Music,
  wordGames: WordGames,
  fakeUpdate: FakeUpdate,
  onlineMiniGames: OnlineMiniGames,
  offWorkCountdown: OffWorkCountdown,
};

const apps = ref([]);

watch(
  () => useAppStore.lists,
  (newVal) => {
    apps.value = newVal;
  },
  {
    immediate: true,
    deep: true,
  }
);

const onMove = (val) => {
  useAppStore.lists = apps.value;
};

const handleAppContextMenu = (e, app) => {
  e.preventDefault();
  useContextMenuStore.showContextMenu(e.clientX, e.clientY);
  useContextMenuStore.activeApp = app;
};

const handleAppClick = (app) => {
  if (app.type === "bookmark") {
    window.open(app.url, "_blank");
  }
};
</script>

<style lang="less">
:root {
  --max-page-width: 1360px;
  --grid-size: 5.5rem;
  --border-radius: 8px;
  --icon-fit: contain;
}
.apps {
  padding: 40px 0 0;
  max-width: var(--max-page-width);
  margin: auto;
  display: grid;
  grid-template-columns: repeat(auto-fill, var(--grid-size));
  grid-template-rows: repeat(auto-fill, var(--grid-size));
  grid-auto-flow: dense;
  grid-auto-rows: var(--grid-size);
  justify-content: center;
  .app {
    position: relative;
    padding: 0 calc(var(--grid-size) / 6) calc(var(--grid-size) / 3);
    .dataset {
      width: 100%;
      height: 100%;
      border-radius: var(--border-radius);
      overflow: hidden;
      display: flex;
      transition: box-shadow 0.2s ease 0s;
      font-size: calc(var(--grid-size) / 6);
      cursor: pointer;
      .bookmark {
        flex: 1;
        display: flex;
        background-color: rgba(255, 255, 255, 0.9);
        .logo {
          height: 100%;
          object-fit: cover;
        }
        .description {
          flex: 1;
          display: flex;
          flex-direction: column;
          justify-content: center;
          padding: 3px 6px;
          p {
            text-align: left;
            color: rgb(51, 51, 51);
            font-size: 0.95em;
            font-weight: 500;
            line-height: 1.3;
            overflow: hidden;
            text-overflow: ellipsis;
            white-space: nowrap;
          }
          span {
            overflow: hidden;
            text-overflow: ellipsis;
            display: -webkit-box;
            -webkit-line-clamp: 2;
            -webkit-box-orient: vertical;
            font-size: 0.6em;
            margin-top: 0.3em;
            color: rgb(102, 102, 102);
            line-height: 1.3;
            word-break: break-all;
          }
        }
      }
      .comp {
        flex: 1;
        height: 100%;
        display: flex;
        align-items: center;
        justify-content: center;
        background-color: var(--theme-bg-color-a8);
      }
    }
    .title {
      position: relative;
      left: 0px;
      display: inline-block;
      width: 100%;
      text-align: center;
      overflow: hidden;
      text-overflow: ellipsis;
      white-space: nowrap;
      pointer-events: none;
      font-size: 0.6rem;
      color: #fff;
      text-shadow: 0 0 4px var(--grey-0);
    }
    &:hover {
      .dataset {
        transform: scale(1.01);
        box-shadow: rgba(0, 0, 0, 0.4) 0px 0px 10px, rgba(255, 255, 255, 0.4) 0px 0px 3px;
        .bookmark {
          img {
            filter: brightness(1.05);
          }
        }
      }
    }
    &.column1-row1 {
      grid-column-start: span 1;
      grid-row-start: span 1;
    }
    &.column2-row1 {
      grid-column-start: span 2;
      grid-row-start: span 1;
    }
    &.column2-row2 {
      grid-column-start: span 2;
      grid-row-start: span 2;
    }
    &.column3-row2 {
      grid-column-start: span 3;
      grid-row-start: span 2;
      .logo {
        width: 100%;
        object-fit: cover;
      }
    }
    &.column4-row2 {
      grid-column-start: span 4;
      grid-row-start: span 2;
      .logo {
        width: 100%;
        object-fit: cover;
      }
    }
  }
}
@media screen and (max-width: 768px) {
  :root {
    --grid-size: 4.6rem;
  }
}
</style>
