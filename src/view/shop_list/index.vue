<template>
<div>
    <el-table
      :data="tableData"
      style="width: 100%">
        <el-table-column
        label="标点"
        width="50">
      </el-table-column>
      <el-table-column
        prop="name"
        label="店铺名称"
        width="180">
      </el-table-column>
      <el-table-column
        prop="address"
        label="店铺地址"
        width="180">
      </el-table-column>
      <el-table-column
        prop="description"
        label="店铺介绍">
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
            name: 'name',
            address: 'address',
            description:"description"
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
            //deleteRow(index,row){
            //}
        getShopList(){
            shopApi(this.latitude,this.longitude).then(res=>{
                console.log(res);
            })
        }
       }
  }
</script>