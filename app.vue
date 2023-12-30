<template>
  <div>
    <el-config-provider :locale="locale.lang">
      <h1>根组件</h1>
      <el-button @click="ElMessage('hello')">{{ $t("button") }} </el-button>
      <ElButton :icon="ElIconEditPen" type="success">button</ElButton>
      <LazyElButton type="warning">lazy button</LazyElButton>
      <el-icon :size="20" style="color: red">
        <Document />
      </el-icon>
      <el-icon class="is-loading">
        <Loading />
      </el-icon>
      <el-date-picker
        v-model="value1"
        type="datetime"
        placeholder="Select date and time"
      />
      <nuxt-link to="/"></nuxt-link>
      <nuxt-link to="/users">用户</nuxt-link>
      <nuxt-link to="/users/create-or-edit">添加或更新</nuxt-link>
      <nuxt-link to="/role/admin">管理员</nuxt-link>
      <nuxt-link to="/role/normal">普通角色</nuxt-link>
      <nuxt-link to="/about">关于</nuxt-link>

      <a href="/role/normal">普通角色</a>

      <img src="/1.png" alt="" />

      <my-test></my-test>

      <user-comp-user-dialog></user-comp-user-dialog>

      <nuxt-page></nuxt-page>
      <div>
        <div>
          <div class="test">
            <div id="reveal-top">nihao</div>
        </div>
      </div>
        <div>
          <div class="test">
            <div id="reveal-top">nihao</div>
          </div>
        </div>
        <div>
          <div class="test">
            <div id="reveal-top">nihao</div>
          </div>
        </div>
      </div>
    </el-config-provider>
  </div>
</template>

<script setup>
import { Document, Loading } from "@element-plus/icons-vue";
import zhCn from "element-plus/dist/locale/zh-cn.mjs";
import en from "element-plus/dist/locale/en.mjs";

const route = useRoute();
const locale = reactive({ lang: zhCn });
if (route.query.lang !== "fr") {
  locale.lang = en;
}
const value1 = ref(null);

onMounted(() => {
  if (process.client) {
    retScroll($scrollReveal);
  }
});

// 导入scrollReveal
const { $scrollReveal } = useNuxtApp();
const retScroll = (data) => {
  data.reveal("#reveal-top", {
    // 动画的时长
    duration: 1000,
    // 延迟时间
    delay: 300,
    // 动画开始的位置，'bottom', 'left', 'top', 'right'
    origin: "bottom",
    // 回滚的时候是否再次触发动画
    reset: false,
    // 延时执行方式（always（一直延时执行），once（只延时执行一次），onload（只在加载时延时执行））
    // // useDelay: 'onload',
    // 在移动端是否使用动画
    mobile: true,
    // 滚动的距离，单位可以用%，rem等
    distance: "100px",
    // 其他可用的动画效果
    opacity: 0.8,
    // 执行速度 线性函数啥的
    easing: "cubic-bezier(0.5, 0, 0, 1)",
    // 执行方式（缩放）
    scale: 0.9,
    // 使用执行之前的回调函数
    beforeReveal: function (ele) {
      //    console.log(1);
    },
  });
};
</script>
<style scoped lang='scss'>
.test {
  height: 100vh;
  #reveal-top{
    height: 100px;
    width: 200px;
    background-color: #ccc;
  }
}

</style>
