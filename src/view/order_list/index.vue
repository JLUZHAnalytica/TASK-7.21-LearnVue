<template>
  <el-table
    :data="tableData"
    style="width: 100%">
    <el-table-column type="expand">
      <template slot-scope="props">
        <el-form label-position="left" inline class="demo-table-expand">
          <el-form-item label="订单ID:">
            <span>{{ props.row.id }}</span>
          </el-form-item>
          <el-form-item label="订单状态:">
            <span>{{ props.row.status_bar.title }}</span>
          </el-form-item>
        </el-form>
      </template>
    </el-table-column>
    <el-table-column
      label="订单ID"
      prop="id">
    </el-table-column>
    <el-table-column
      label="总价格"
      prop="total_amount">
    </el-table-column>
    <el-table-column
      label="订单状态"
      prop="status_bar.title">
    </el-table-column>
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