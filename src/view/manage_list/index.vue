<template>
<div>
    <el-table :data="tableData" style="width:100%">
        <el-table-column prop="user_name" label="姓名" width=“180></el-table-column>
        <el-table-column prop="create_time" label="注册日期" width=“180></el-table-column>
        <el-table-column prop="city" label="地址" width=“180></el-table-column>
        <el-table-column prop="admin" label="权限" width=“180></el-table-column>
    </el-table>
</div>
</template>
<script>
    import {managerlist} from '@/api/manager_list'//管理员列表
    export default{
        data(){
            return{
                status:1,
                tableData:[{
                    user_name:'12332111114',
                    create_time:'2020-07-21 18:10',
                    city:'北京',
                    admin:'管理员'
                }],
                    limit:20,
                    offset:0
            };
        },
        methods:{
            getList(){
                managerlist(this.offset,this.limit).then(res=>{
                    this.tableData=res.data.data
                    console.log(res)
                })
            }
        },
        mounted(){
            this.getList();
        },
    }
</script>