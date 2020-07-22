<template>
  <el-container>
    <el-header>选择商铺</el-header>
    <el-main>
      <el-form :model="form" label-width="80px">
        <el-form-item label="商铺ID">
          <el-input v-model="restaurant_id"></el-input>
        </el-form-item>
      </el-form>
    </el-main>
  </el-container>
</template>

<script>
export default {
  props: ["restaurant_id"]
};
</script>

<style>
</style>