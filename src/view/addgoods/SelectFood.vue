<template>
  <el-container>
    <el-header>选择食品种类</el-header>
    <el-main>
      <el-form :model="form" label-width="80px">
        <el-form-item label="食品种类">
          <el-select title="食品种类" v-model="form.kind" placeholder="请选择">
            <el-option
              v-for="item in options"
              :key="item.value"
              :label="item.label"
              :value="item.value"
            ></el-option>
          </el-select>
        </el-form-item>
        <el-collapse v-model="activeNames">
          <el-collapse-item title="添加食品种类" name="1">
            <el-form-item label="食品种类">
              <el-input v-model="form.kind"></el-input>
            </el-form-item>
            <el-form-item label="种类描述">
              <el-input v-model="form.kind_desc"></el-input>
            </el-form-item>
            <el-button type="primary" @click="onSubmit">提交</el-button>
          </el-collapse-item>
        </el-collapse>
      </el-form>
    </el-main>
  </el-container>
</template>

<script>
import { addcategory } from "@/api/addgoods";
export default {
  props: ["form"],
  data() {
    return {
      activeNames: ["0"],
      options: [
        {
          value: "选项1",
          label: "黄金糕"
        },
        {
          value: "选项2",
          label: "双皮奶"
        },
        {
          value: "选项3",
          label: "蚵仔煎"
        },
        {
          value: "选项4",
          label: "龙须面"
        },
        {
          value: "选项5",
          label: "北京烤鸭"
        }
      ]
    };
  },
  methods: {
    onSubmit() {
      addcategory(
        this.form.kind,
        this.form.kind_desc,
        this.form.restaurant_id
      ).then(res => {
        console.log(res.data.success);
        // if (res.data.status == 1) {
        //   this.$router.push("/");
        // }
      });
      this.$message.error("您的操作权限不足");
    }
  }
};
</script>

<style>
</style>