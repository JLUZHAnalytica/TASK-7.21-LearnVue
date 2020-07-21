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
                tableData:[{
                    user_name:'user_name',
                    create_time:'create_time',
                    city:'city',
                    admin:'admin'
                }],
                list:{
                    limit:20,
                    offset:0
                }
            };
        },
        mounted(){
            this.getList();
        },
        methods:{
            getList(){
                managerlist(this.list).then(res=>{
                    this.tableData=res.data
                    console.log(res)
                })
            }
        }
    }
</script>