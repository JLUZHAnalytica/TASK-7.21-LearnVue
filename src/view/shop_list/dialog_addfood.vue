<template>
    <div>
        <el-button type="text" @click="dialogFormVisible = true">打开嵌套表单的 Dialog</el-button>

<el-dialog title="添加食品" :visible.sync="dialogFormVisible">
  <el-form :model="form">
    <el-form-item label="食品名称" :label-width="formLabelWidth">
      <el-input v-model="form.name" autocomplete="off"></el-input>
    </el-form-item>
    <el-form-item label="食品活动" :label-width="formLabelWidth">
      <el-input v-model="form.activities" autocomplete="off"></el-input>
    </el-form-item>
    <el-form-item label="食品详情" :label-width="formLabelWidth">
      <el-input v-model="form.details" autocomplete="off"></el-input>
    </el-form-item>
    <el-form-item label="上传食品图片" :label-width="formLabelWidth">
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
    <el-form-item label="食品特点" :label-width="formLabelWidth">
      <el-select v-model="form.region" placeholder="请选择" style="">
        <el-option label="区域一" value="shanghai"></el-option>
        <el-option label="区域二" value="beijing"></el-option>
      </el-select>
    </el-form-item>
    <el-form-item label="食品规格" :label-width="formLabelWidth">
        <el-checkbox-group v-model="checkList">
            <el-checkbox label="单规格"></el-checkbox>
            <el-checkbox label="多规格"></el-checkbox>
        </el-checkbox-group>
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
  export default {
    data() {
      return {
          checkList: ['单规格','双规格'],
            dialogImageUrl: '',
            dialogVisible: false,
            dialogFormVisible: false,
            form: {
            name: '',
            activities:'',
            details:'',
            region: '',
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
      handleRemove(file, fileList) {
        console.log(file, fileList);
      },
      handlePictureCardPreview(file) {
        this.dialogImageUrl = file.url;
        this.dialogVisible = true;
      }
    }
  };
</script>