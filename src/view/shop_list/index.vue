<template>
<div>
    <el-table
      :data="tableData"
      style="width:100%">
        <el-table-column
        label=""
        width="40">
        <template>></template>
      </el-table-column>
      <el-table-column
        prop="name"
        label="店铺名称"
        width="auto">
      </el-table-column>
      <el-table-column
        prop="address"
        label="店铺地址"
        width="250">
      </el-table-column>
      <el-table-column
        prop="description"
        label="店铺介绍"
        width="auto">
      </el-table-column>
          <el-table-column
        label="操作">
        <template slot-scope="msg">
          <el-button type="text" @click="dialogFormVisible = true">编辑</el-button> 
           <el-button type="text" @click="afdialogFormVisible = true">添加食品</el-button>
          <el-button type="danger" @click="deleteRow(msg.$index)">删除</el-button>
        </template>
      </el-table-column>
    </el-table>
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
      <el-dialog title="添加食品" :visible.sync="afdialogFormVisible">
  <el-form :model="form2">
    <el-form-item label="食品名称" :label-width="afformLabelWidth">
      <el-input v-model="form2.foodname" autocomplete="off"></el-input>
    </el-form-item>
    <el-form-item label="食品活动" :label-width="afformLabelWidth">
      <el-input v-model="form2.activities" autocomplete="off"></el-input>
    </el-form-item>
    <el-form-item label="食品详情" :label-width="afformLabelWidth">
      <el-input v-model="form2.details" autocomplete="off"></el-input>
    </el-form-item>
    <el-form-item label="上传食品图片" :label-width="afformLabelWidth">
        <el-upload
        action="https://jsonplaceholder.typicode.com/posts/"
        list-type="picture-card"
        :on-preview="handlePictureCardPreview"
        :on-remove="handleRemove" style="width:100px">
        <i class="el-icon-plus"></i>
        </el-upload>  
        <el-dialog :visible.sync="dialogVisible">
        <img width="100%" :src="dialogImageUrl" alt="">
        </el-dialog>
    </el-form-item>
    <el-form-item label="食品特点" :label-width="afformLabelWidth">
      <el-select v-model="form2.regionbox" placeholder="请选择" style="">
        <el-option label="区域一" value="shanghai"></el-option>
        <el-option label="区域二" value="beijing"></el-option>
      </el-select>
    </el-form-item>
    <el-form-item label="食品规格" :label-width="afformLabelWidth">
        <el-checkbox-group v-model="checkList" class="standardbox">
            <el-checkbox label="单规格"></el-checkbox>
            <el-checkbox label="多规格"></el-checkbox>
        </el-checkbox-group>
    </el-form-item>
  </el-form>
  <div slot="footer" class="dialog-footer">
    <el-button @click="afdialogFormVisible = false">取 消</el-button>
    <el-button type="primary" @click="afdialogFormVisible = false">确 定</el-button>
  </div>
</el-dialog>
</div>
</template>
<script>
  import {shopApi} from "@/api/shop_list"

    export default {
    data() {
        return {
            dialogFormVisible: false,
            latitude:31,
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
            checkList: ['单规格','双规格'],
            dialogImageUrl: '',
            dialogVisible: false,
            afdialogFormVisible: false,
            form2: {
            foodname: '',
            activities:'',
            details:'',
            regionbox: '',
            afdate1: '',
            afdate2: '',
            afdelivery: false,
            aftype: [],
            afresource: '',
            afdesc: '',
            },
            longitude:121,
            imageUrl: '',
            formLabelWidth: '120px',
            afformLabelWidth: '120px',
            tableData: [{}],
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
            handleAvatarSuccess(res, file) {
              //ni zhijie  neng  diaoyong dao  this.imageUrl me????
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
              },
              getShopList(){
                  shopApi(this.latitude,this.longitude).then(res=>{
                      console.log(res);
                      this.tableData=res.data
                  })
              },
              handleRemove(file, fileList) {
                console.log(file, fileList);
              },
              handlePictureCardPreview(file) {
                this.dialogImageUrl = file.url;
                this.dialogVisible = true;
              }   
        }
  }
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
  .standardbox.el-checkbox{
      border: 1px solid black;
      padding-left: 0px;
  }
  .standardbox{
      /* border: 1px solid black; */
      width: 200px;
  }
</style>