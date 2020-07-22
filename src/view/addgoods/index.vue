<template>
  <div>
    <SelectRes v-bind:restaurant_id="restaurant_id" />
    <SelectFood
      v-bind:kind="kind"
      v-bind:kind_desc="kind_desc"
      v-bind:restaurant_id="restaurant_id"
    />
    <AddFood
      v-bind:name="name"
      v-bind:imageUrl="imageUrl"
      v-bind:description="description"
      v-bind:price="price"
      v-bind:packing_fee="packing_fee"
    />
    <el-button type="primary" @click="onSubmit">立即创建</el-button>
    <el-button>取消</el-button>
  </div>
</template>

<script>
import SelectRes from "./SelectRes";
import SelectFood from "./SelectFood";
import AddFood from "./AddFood";
export default {
  data() {
    return {
      kind: "",
      kind_desc: "",
      name: "",
      restaurant_id: 11111,
      imageUrl: "",
      activity: "",
      description: "",
      price: 0,
      packing_fee: 0
    };
  },
  methods: {
    onSubmit() {
      console.log("test!");
    }
  },
  components: {
    SelectRes,
    SelectFood,
    AddFood
  }
};
</script>

<style>
.el-header,
.el-footer {
  background-color: #b3c0d1;
  color: #333;
  text-align: center;
  line-height: 60px;
}

.el-aside {
  background-color: #d3dce6;
  color: #333;
  text-align: center;
  line-height: 200px;
}

.el-main {
  background-color: #e9eef3;
  color: #333;
  text-align: center;
  line-height: 160px;
}

body > .el-container {
  margin-bottom: 40px;
}

.el-container:nth-child(5) .el-aside,
.el-container:nth-child(6) .el-aside {
  line-height: 260px;
}

.el-container:nth-child(7) .el-aside {
  line-height: 320px;
}
</style>
