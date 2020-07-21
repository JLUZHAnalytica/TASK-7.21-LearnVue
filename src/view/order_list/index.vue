<template>
  <el-table :data="tableData" stripe style="width: 100%">
    <el-table-column prop="date" label="订单ID" width="300"></el-table-column>
    <el-table-column prop="name" label="总价格" width="300"></el-table-column>
    <el-table-column prop="address" label="订单状态"></el-table-column>
  </el-table>
</template>


  <script>
  import {orderlist} from '@/api/orderlist'
    export default {
      data() {
        return {
          tableData: [],
          limit:20,
          offset:1,
          count:0,
          currentPage:1,
        };
      },
      mounted(){
          this.getOrderlist();
      },
      methods:{
          getOrderlist(){
              orderlist(this.offset,this.limit).then(res=>{
                  this.tableData=res.data
              })
          }
      }
    }
  </script>