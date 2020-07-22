<template>
  <el-container>
    <el-header>添加食品</el-header>
    <el-main>
      <el-form ref="form2" :model="form" label-width="100px">
        <el-form-item label="食品名称">
          <el-input v-model="name"></el-input>
        </el-form-item>
        <el-form-item label="食品活动">
          <el-input v-model="activity"></el-input>
        </el-form-item>
        <el-form-item label="食品详情">
          <el-input v-model="description"></el-input>
        </el-form-item>
        <el-form-item label="添加食品图片">
          <SelectPic v-bind:imageUrl="imageUrl" />
        </el-form-item>
        <el-form-item label="食品特点">
          <el-select v-model="value" placeholder="请选择">
            <el-option
              v-for="item in options"
              :key="item.value"
              :label="item.label"
              :value="item.value"
            ></el-option>
          </el-select>
        </el-form-item>
        <el-form-item label="食品规格">
          <el-radio v-model="specs" label="1">单规格</el-radio>
          <el-radio v-model="specs" label="2">多规格</el-radio>
        </el-form-item>
        <el-form-item label="包装费">
          <el-input-number v-model="packing_fee" :min="0" :max="1000"></el-input-number>
        </el-form-item>
        <el-form-item label="价格">
          <el-input-number v-model="price" :min="0" :max="100000"></el-input-number>
        </el-form-item>
      </el-form>
    </el-main>
  </el-container>
</template>

<script>
import SelectPic from "./SelectPic";
export default {
  name: "AddFood",
  data() {
    return {
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
      ],
      value: ""
    };
  },
  props: [
    "name",
    "activity",
    "description",
    "imageUrl",
    "specs",
    "packing_fee",
    "price"
  ],
  components: { SelectPic }
};
</script>

<style>
</style>