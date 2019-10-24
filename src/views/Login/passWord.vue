<!--
 * @Author: 寒嫣
 * @Date: 2019-10-22 14:30:46
 * @Description: file content
 -->
<template>
  <div>
    <LayoutHeader>
      <el-form
        slot="container"
        :model="ruleFrom"
        :rules="rules"
        ref="ruleFrom"
        label-position="left"
        label-width="0px"
      >
        <div class="title">
          <h3>忘记密码</h3>
        </div>
        <!-- 账号 -->
        <el-form-item prop="username">
          <el-input type="text" v-model="ruleFrom.username" auto-complete="off" placeholder="账号">
            <i slot="prefix" class="fa fa-user-o"></i>
          </el-input>
        </el-form-item>

        <!-- 邮箱 -->
        <el-form-item prop="email">
          <el-input type="text" v-model="ruleFrom.email" auto-complete="off" placeholder="邮箱">
            <i slot="prefix" class="fa fa-envelope-o"></i>
          </el-input>
        </el-form-item>

        <!-- 确定 -->
        <el-form-item>
          <el-button
            @click.native.prevent="handleSubmit"
            type="primary"
            style="width:100%"
            :loading="loading"
          >确定</el-button>
        </el-form-item>
      </el-form>
    </LayoutHeader>
  </div>
</template>

<script lang="ts">
import { Component, Vue, Provide } from "vue-property-decorator";
import LayoutHeader from "./loginHeader.vue";
@Component({
  components: {
    LayoutHeader
  }
})
export default class PassWord extends Vue {
  // 是否发起网络请求
  @Provide() loading: boolean = false;
  @Provide() ruleFrom: { username: string; email: string } = {
    username: "",
    email: ""
  };
  @Provide() rules = {
    username: [{ required: true, message: "请输入账号", trigger: "blur" }],
    email: [
      { required: true, message: "请输入邮箱地址", trigger: "blur" },
      {
        type: "email",
        message: "请输入正确的邮箱地址",
        trigger: "blur,change"
      }
    ]
  };
  handleSubmit(): void {
    (this.$refs["ruleFrom"] as any).validate((valid: boolean) => {
      if (valid) {
        this.loading = true;
        (this as any).axios
          .post("/api/users/findPwd", this.ruleFrom)
          .then((res: any) => {
            this.loading = false;
            console.log(res.data);
            this.$message({
              message: res.data.msg,
              type: "success"
            });
            this.$router.push("/login");
          })
          .catch(() => {
            this.loading = false;
          });
      }
    });
  }
}
</script>
<style lang="scss" scoped>
.title {
  margin: 0px auto 40px auto;
  text-align: center;
  color: #505458;
}

i {
  font-size: 14px;
  margin-left: 8px;
}
</style>