<template>
  <div>
    <el-table :data="tableData" border style="width: 100%">
      <el-table-column prop="name" label="食品名称" width="320"></el-table-column>
      <el-table-column prop="description" label="食品介绍" width="350"></el-table-column>
      <el-table-column prop="city" label="食品评分" width="330"></el-table-column>
      <el-table-column fixed="right" label="操作" width="150">
        <template slot-scope="scope">
          <el-button @click.native.prevent="deleteRow(scope.$index, tableData)" type="text" size="small">移除</el-button>
          <el-button type="text" size="small">编辑</el-button>
        </template>
      </el-table-column>
    </el-table>
  </div>
</template>

<script>
import {food_list} from '@/api/food_list' 
export default {
  data() {
    return {
      tableData:[{
          name:'name',
          description:'description',
        }],
      offset:0,
      limit:20,
    };
  },
mounted () {
      this.foodList();
  },
  methods: {
    handleClick(row) {
      console.log(row);
    },
    deleteRow(index, rows) {
        rows.splice(index, 1);
    },
    foodList(){
        food_list(this.offset,this.limit,this.restaurant_id).then(res=>{
            this.tableData=res.food_list  
                })
    }
  }  
};
</script>
