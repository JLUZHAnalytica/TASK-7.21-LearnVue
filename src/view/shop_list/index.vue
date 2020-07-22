<template>
<div>
    <el-table
      :data="tableData"
      style="width: 100%">
        <el-table-column
        label=""
        width="50">
        <template>></template>
      </el-table-column>
      <el-table-column
        prop="name"
        label="店铺名称"
        width="200">
      </el-table-column>
      <el-table-column
        prop="address"
        label="店铺地址"
        width="220">
      </el-table-column>
      <el-table-column
        prop="description"
        label="店铺介绍"
        width="400">
      </el-table-column>
          <el-table-column
        label="操作">
        <template slot-scope="msg">
          <el-button @click="handleClick(msg.row)">编辑</el-button>
          <el-button>添加食物</el-button>
          <el-button type="danger" @click="deleteRow(msg.$index)">删除</el-button>
        </template>
      </el-table-column>
    </el-table>
</div>
</template>
<script>
  import {shopApi} from "@/api/shop_list"
    export default {
        data() {
        return {
          latitude:31,
          longitude:121,
          tableData: [{
//            name:"name",
//            address: '上海市普陀区金沙江路 1518 弄',
//            description:"介绍"
          }]
        }
      },
      mounted(){
          this.getShopList();
      },
        methods:{
            handleClick(row){
                console.log(row);
            },
            deleteRow(index){
              this.tableData.splice(index,1);
            },
            getShopList(){
            shopApi(this.latitude,this.longitude).then(res=>{
                console.log(res);
                this.tableData=res.data
            })
        }
       }
  }
</script>