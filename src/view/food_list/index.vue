<template>
  <div>
    <el-table :data="tableData" border style="width: 100%">
      <el-table-column prop="name" label="食品名称" width="420"></el-table-column>
      <el-table-column prop="description" label="食品介绍" width="450"></el-table-column>
      <el-table-column prop="rating" label="食品评分" width="430"></el-table-column>
      <el-table-column fixed="right" label="操作" width="150">
        <template slot-scope="scope">
          <el-button @click.native.prevent="deleteRow(scope.$index, tableData)" type="text" size="small">移除</el-button>
          <el-button type="text" size="small">编辑</el-button>
        </template>
      </el-table-column>
    </el-table>
    <Todo />
        <el-button type="text" @click="dialogFormVisible = true">编辑</el-button>

        <el-dialog title="修改食品信息" :visible.sync="dialogFormVisible">
        <el-form :model="form">
            <el-form-item label="食品名称" :label-width="formLabelWidth">
            <el-input v-model="form.name" autocomplete="off"></el-input>
            </el-form-item>
            <el-form-item label="食品介绍" :label-width="formLabelWidth">
            <el-input v-model="form.introduce" autocomplete="off"></el-input>
            </el-form-item>
            <el-form-item label="食品分类" :label-width="formLabelWidth">
            <el-select v-model="form.classification" placeholder="请选择">
                <el-option label="分类一" value="零食"></el-option>
                <el-option label="分类二" value="主食"></el-option>
            </el-select>
            </el-form-item>
            <el-form-item label="食品图片" :label-width="formLabelWidth">
                <el-upload
                    class="avatar-uploader"
                    action="https://jsonplaceholder.typicode.com/posts/"
                    :show-file-list="false"
                    :on-success="handleAvatarSuccess"
                    :before-upload="beforeAvatarUpload">
                    <img v-if="imageUrl" :src="imageUrl" class="avatar">
                    <i v-else class="el-icon-plus avatar-uploader-icon"></i>
                </el-upload>
            </el-form-item>
            <template>
                <el-table
                    :data="tableData"
                    height="250"
                    border
                    style="width: 100%">
                    <el-table-column
                    prop="specifications"
                    label="规格"
                    width="180">
                    </el-table-column>
                    <el-table-column
                    prop="Packingfee"
                    label="包装费"
                    width="180">
                    </el-table-column>
                    <el-table-column
                    prop="Price"
                    label="价格"
                    width="180">
                    </el-table-column>
                    <el-table-column
                    prop="operation"
                    label="操作"
                    width="180">
                    </el-table-column>
                </el-table>
                <el-table
                    :data="tableData"
                    height="250"
                    border
                    style="width: 100%">
                    <el-table-column
                    prop="No data available"
                    label="暂无数据">
                    </el-table-column>
                </el-table>
                <el-button @click="drawer = true" type="primary" style="margin:0 auto;">
                添加规格
                </el-button>
            </template>
        </el-form>
        <div slot="footer" class="dialog-footer">
            <el-button @click="dialogFormVisible = false">取 消</el-button>
            <el-button type="primary" @click="dialogFormVisible = false">确 定</el-button>
        </div>
        </el-dialog>
  </div>
</template>

<style>
    .avatar-uploader .el-upload {
        border: 1px dashed #d9d9d9;
        border-radius: 6px;
        cursor: pointer;
        position: relative;
        overflow: hidden;
    }
    .avatar-uploader .el-upload:hover {
        border-color: #409EFF;
    }
    .avatar-uploader-icon {
        font-size: 28px;
        color: #8c939d;
        width: 178px;
        height: 178px;
        line-height: 178px;
        text-align: center;
    }
    .avatar {
        width: 178px;
        height: 178px;
        display: block;
    }
</style>

<script>
import {food_list} from '@/api/food_list' 
import Todo from './components/Todo'
export default {
  name:'intro',
    components:{
      Todo
    },
  data() {
    return {
      tableData:[{
          name:'name',
          description:'description',
          rating:'rating',
        }],
      offset:0,
      limit:20,
      imageUrl: '',
        dialogFormVisible: false,
        form: {
          name: '',
          introduce: '',
          classification: '',
          date1: '',
          date2: '',
          delivery: false,
          type: [],
          resource: '',
          desc: ''
        },
        formLabelWidth: '120px'
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
            this.tableData=res.data
            console.log(res)   
                })      
    },
    handleAvatarSuccess(res, file) {
            this.imageUrl = URL.createObjectURL(file.raw);
        },
        beforeAvatarUpload(file) {
            const isJPG = file.type === 'image/jpeg';
            const isLt2M = file.size / 1024 / 1024 < 2;

            if (!isJPG) {
            this.$message.error('上传图片只能是 JPG 格式!');
            }
            if (!isLt2M) {
            this.$message.error('上传图片大小不能超过 2MB!');
            }
            return isJPG && isLt2M;
        }
  }  
};
</script>