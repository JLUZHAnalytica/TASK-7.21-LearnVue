<template>
  <el-table
    :data="tableData"
    height="670px"
    style="width: 100%"
    highlight-current-row
    :header-cell-style="{background:'#F2F6FC'}"
  >
    <el-table-column type="index" label="#" width="50"></el-table-column>
    <el-table-column prop="registe_time" label="注册日期" width="180"></el-table-column>
    <el-table-column prop="username" label="注册姓名" width="180"></el-table-column>
    <el-table-column prop="city" label="注册地址"></el-table-column>
  </el-table>
</template>

<script>
import { userlist } from "@/api/userlist";

export default {
  data() {
    return {
      tableData: [
        {
          registe_time: "2016-05-02",
          username: "王小虎",
          city: "上海市普陀区金沙江路 1518 弄"
        },
        {
          registe_time: "2016-05-04",
          username: "王小虎",
          city: "上海市普陀区金沙江路 1517 弄"
        },
        {
          registe_time: "2016-05-01",
          username: "王小虎",
          city: "上海市普陀区金沙江路 1519 弄"
        },
        {
          registe_time: "2016-05-03",
          username: "王小虎",
          city: "上海市普陀区金沙江路 1516 弄"
        }
      ],
      limit: 30,
      offset: 1
    };
  },
  methods: {
    fetchData() {
      userlist(this.offset, this.limit).then(res => {
        this.tableData = res.data;
      });
    }
  },
  mounted() {
    this.fetchData();
  }
};
</script>