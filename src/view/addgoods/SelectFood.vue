<template>
  <el-container>
    <el-header>选择食品种类</el-header>
    <el-main>
      <el-form ref="form" :model="form" label-width="80px">
        <el-form-item label="食品种类">
          <el-select title="食品种类" v-model="kind" placeholder="请选择">
            <el-option
              v-for="item in options"
              :key="item.value"
              :label="item.label"
              :value="item.value"
            ></el-option>
          </el-select>
        </el-form-item>
        <el-collapse v-model="activeNames" @change="handleChange">
          <el-collapse-item title="添加食品种类" name="1">
            <el-form-item label="食品种类">
              <el-input v-model="kind"></el-input>
            </el-form-item>
            <el-form-item label="种类描述">
              <el-input v-model="kind_desc"></el-input>
            </el-form-item>
            <el-button type="primary" @click="onSubmit">提交</el-button>
          </el-collapse-item>
        </el-collapse>
      </el-form>
    </el-main>
  </el-container>
</template>

<script>
export default {
  props: ["kind", "kind_desc"]
};
</script>

<style>
</style>