<template>
  <div>
    <el-form ref="form" :model="form" label-width="80px">
      <el-form-item label="店铺名称">
        <el-input v-model="form.name"></el-input>
      </el-form-item>
      <el-form-item label="联系电话">
        <el-input v-model="form.name"></el-input>
      </el-form-item>
      <el-form-item label="店铺简介">
        <el-input v-model="form.name"></el-input>
      </el-form-item>
      <el-form-item label="店铺标语">
        <el-input v-model="form.name"></el-input>
      </el-form-item>
      <el-form-item label="详细地址">
        <el-col :span="24">
          <el-col :span="10">
            <el-select v-model="form.region" placeholder="请选择活动区域">
              <el-option label="上海" value="shanghai"></el-option>
              <el-option label="北京" value="beijing"></el-option>
              <el-option label="成都" value="chengdu"></el-option>
              <el-option label="大连" value="dalian"></el-option>
              <el-option label="保定" value="baoding"></el-option>
              <el-option label="珠海" value="zhuhai"></el-option>
            </el-select>
          </el-col>
          <el-col :span="12">
            <el-input v-model="form.name"></el-input>
          </el-col>
        </el-col>
      </el-form-item>
      <el-form-item label="店铺分类">
        <el-select v-model="form.shopType" placeholder="请选择">
          <el-option label="快餐便当/简餐" value="kuaican"></el-option>
        </el-select>
      </el-form-item>
      <el-form-item label="品牌保证">
        <el-switch class="switch-width" v-model="form.delivery"></el-switch>
      </el-form-item>
      <el-form-item label="蜂鸟专送">
        <el-switch class="switch-width"  v-model="form.delivery1"></el-switch>
      </el-form-item>
      <el-form-item label="新开店铺">
        <el-switch v-model="form.delivery2"></el-switch>
      </el-form-item>
      <el-form-item label="外卖保">
        <el-switch v-model="form.delivery3"></el-switch>
      </el-form-item>
      <el-form-item label="准时达">
        <el-switch v-model="form.delivery4"></el-switch>
      </el-form-item>
      <el-form-item label="开发票">
        <el-switch v-model="form.delivery5"></el-switch>
      </el-form-item>
      <el-form-item label="配送费">
        <el-input-number v-model="num1" @change="handleChange" :min="1" :max="10" ></el-input-number>
      </el-form-item>
      <el-form-item label="起送价">
        <el-input-number v-model="num2" @change="handleChange" :min="1" :max="10" ></el-input-number>
      </el-form-item>
      <el-form-item label="活动时间">
        <el-col :span="11">
          <el-date-picker type="date" placeholder="选择日期" v-model="form.date1" style="width: 100%;"></el-date-picker>
        </el-col>
        <el-col class="line" :span="2">-</el-col>
        <el-col :span="11">
          <el-time-picker placeholder="选择时间" v-model="form.date2" style="width: 100%;"></el-time-picker>
        </el-col>
      </el-form-item>
      <el-form-item label="商铺照片">
        <el-upload
          class="avatar-uploader"
          action="https://jsonplaceholder.typicode.com/posts/"
          :show-file-list="false"
          :on-success="handleAvatarSuccess"
          :before-upload="beforeAvatarUpload"
        >
          <img v-if="imageUrl" :src="imageUrl" class="avatar" />
         <i v-else class="el-icon-plus avatar-uploader-icon"></i>
        </el-upload>
      </el-form-item>
      <el-form-item>
        <el-button type="primary" @click="onSubmit">立即创建</el-button>
        <el-button>取消</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>
<script>
export default {
  data() {
    return {
      imageUrl: '',
      num1: 1,
      num2: 1,
      form: {
        shopType:"",//
        name: "",
        region: "",
        date1: "",
        date2: "",
        delivery: false,
        type: [],
        resource: "",
        desc: ""
      }
    };
  },
  methods: {
    onSubmit() {
      console.log("submit!");
    },
    handleChange(value) {
      console.log(value);
    },
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
  }
</script>
<style scoped>
.el-form{
      width: 460px;
}
.el-switch{
  float: left;
  margin-top: 10px;
}
.avatar-uploader .el-upload {
  border: 1px dashed #d9d9d9;
  border-radius: 6px;
  cursor: pointer;
  position: relative;
  overflow: hidden;
}
.avatar-uploader .el-upload:hover {
  border-color: #409eff;
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