<template>
  <div>
    <el-form ref="form" :model="form" label-width="80px">
      <el-form-item label="账号">
        <el-input v-model="form.user_name"></el-input>
      </el-form-item>
      <el-form-item label="密码">
        <el-input type="password" v-model="form.password"></el-input>
      </el-form-item>

      <el-form-item>
        <el-button type="primary" @click="onSubmit">登录</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>

<script>
import { login } from "@/api/index";
export default {
  data() {
    return {
      form: {
        user_name: "",
        password: ""
      }
    };
  },
  methods: {
    onSubmit() {
      let data = {
        user_name: this.form.user_name,
        password: this.form.password
      };
      login(data).then(res => {
        console.log(res.data.success);
        if (res.data.status == 1) {
          this.$router.push("/");
        }
      });
      console.log("submit!");
    }
  }
};
</script>

<style>
</style>