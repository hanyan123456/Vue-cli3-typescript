<!--
 * @Author: 寒嫣
 * @Date: 2019-10-22 14:02:48
 * @Description: file content
 -->
<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import { State, Getter, Mutation, Action } from "vuex-class";
@Component({
  components: {}
})
export default class App extends Vue {
  // 存储用户信息
  @Action("setUser") setUser: any;
  created() {
    this.setUser(localStorage.tsToken);
  }
}
</script>
<style lang="scss">
#app {
  width: 100%;
  height: 100%;
}
</style>
