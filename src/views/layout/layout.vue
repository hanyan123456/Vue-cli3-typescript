<!--
 * @Author: 寒嫣
 * @Date: 2019-10-22 14:11:37
 * @Description: file content
 -->
<template>
  <div class="layout">
    <LayoutHeader></LayoutHeader>
    <Content>
      <Sidebar slot="left"></Sidebar>
      <router-view slot="content"></router-view>
    </Content>
  </div>
</template>
<script lang="ts">
import { Component, Vue } from "vue-property-decorator";

import LayoutHeader from "./layoutHeader.vue";
import Content from "./content.vue";
import Sidebar from "./sidebar.vue";
@Component({
  components: {
    LayoutHeader,
    Content,
    Sidebar
  }
})
export default class Layout extends Vue {}
</script>
<style lang="scss" scoped>
.layout {
  width: 100%;
  height: 100%;
  margin: 0 auto;
  background: #f5f7f9;
}
</style>
