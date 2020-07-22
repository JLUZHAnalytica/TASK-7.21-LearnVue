<template>
    <div id="intro">
        <Todo />
        <el-button type="text" @click="dialogFormVisible = true">编辑</el-button>

        <el-dialog title="修改店铺信息" :visible.sync="dialogFormVisible">
        <el-form :model="form">
            <el-form-item label="店铺名称" :label-width="formLabelWidth">
            <el-input v-model="form.name" autocomplete="off"></el-input>
            </el-form-item>
            <el-form-item label="详细地址" :label-width="formLabelWidth">
            <el-input v-model="form.region" autocomplete="off"></el-input>
            </el-form-item>
            <el-form-item label="店铺介绍" :label-width="formLabelWidth">
            <el-input v-model="form.introduce" autocomplete="off"></el-input>
            </el-form-item>
            <el-form-item label="联系电话" :label-width="formLabelWidth">
            <el-input v-model="form.phone" autocomplete="off"></el-input>
            </el-form-item>
            <el-form-item label="店铺分类" :label-width="formLabelWidth">
            <el-select v-model="form.classify" placeholder="请选择店铺分类">
                <el-option label="快餐便当" value="fast-food"></el-option>
                <el-option label="简餐" value="counter-meal"></el-option>
            </el-select>
            </el-form-item>
            <el-form-item label="商铺图片" :label-width="formLabelWidth">
            <el-input v-model="form.img" autocomplete="off"></el-input>
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
        </el-form>
        <div slot="footer" class="dialog-footer">
            <el-button @click="dialogFormVisible = false">取 消</el-button>
            <el-button type="primary" @click="dialogFormVisible = false">确 定</el-button>
        </div>
        </el-dialog>
    </div>
</template>



<script>
import Todo from './components/Todo';

export default {
    name:'intro',
    components:{
      Todo
    },
    data() {
      return {
        dialogFormVisible: false,
        imageUrl: '',
        form: {
          name: '',
          region: '',
          introduce: '',
          phone: '',
          classify:'',
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
      methods: {
    handleAvatarSuccess(res, file) {
      this.imageUrl = URL.createObjectURL(file.raw);
    },
    beforeAvatarUpload(file) {
      const isJPG = file.type === 'image/jpeg';
      const isLt2M = file.size / 1024 / 1024 < 2;

      if (!isJPG) {
        this.$message.error('上传头像图片只能是 JPG 格式!');
      }
      if (!isLt2M) {
        this.$message.error('上传头像图片大小不能超过 2MB!');
      }
      return isJPG && isLt2M;
    }
  }
};
</script>


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