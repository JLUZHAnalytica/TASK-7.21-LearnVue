<template>
    <div>
        <el-button type="text" @click="afdialogFormVisible = true">添加食品</el-button>
        <div>
            <el-dialog title="添加食品" :visible.sync="afdialogFormVisible">
                
                <el-form :model="form">
                    <el-form-item label="食品种类" :label-width="afformLabelWidth" class="food_kind">
                        <el-select v-model="form.foodkindselect" placeholder="请选择" style="width:100%">
                            <el-option label="液态" value="liquid"></el-option>
                            <el-option label="固态" value="solid"></el-option>
                        </el-select>
                    </el-form-item>
                    <el-collapse v-model="addkindbox" @change="handleChange" class="addkindbox_collapse">
                        <el-collapse-item title="添加食品种类" name="0" class="addkindbox">
                            <el-form-item label="食品种类" :label-width="afformLabelWidth">
                                <el-input v-model="form.add_foodkind" autocomplete="off"></el-input>
                            </el-form-item>
                            <el-form-item label="种类描述" :label-width="afformLabelWidth">
                                <el-input v-model="form.food_describe" autocomplete="off"></el-input>
                            </el-form-item>
                            <el-popconfirm title="是否提交添加请求" onConfirm="submit_adding">
                                <el-button slot="reference">确认</el-button>
                            </el-popconfirm>
                        </el-collapse-item>
                    </el-collapse>
                    <el-form-item label="食品名称" :label-width="afformLabelWidth">
                        <el-input v-model="form.foodname" autocomplete="off"></el-input>
                    </el-form-item>
                    <el-form-item label="食品活动" :label-width="afformLabelWidth">
                        <el-input v-model="form.activities" autocomplete="off"></el-input>
                    </el-form-item>
                    <el-form-item label="食品详情" :label-width="afformLabelWidth">
                        <el-input v-model="form.details" autocomplete="off"></el-input>
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
                    <el-form-item label="食品特点" :label-width="afformLabelWidth" class="food_character">
                        <el-select v-model="form.regionbox" placeholder="请选择">
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
    </div>
</template>

<script>
  export default {
    data() {
      return {
          checkList: ['单规格','双规格'],
            dialogImageUrl: '',
            dialogVisible: false,
            afdialogFormVisible: false,
            form: {
                addkindbox:['0'],
                add_foodkind:'',
                food_describe:'',
                foodkindselect:'',
                foodname: '',
                activities:'',
                details:'',
                regionbox: '',
                afdate1: '',
                afdate2: '',
                afdelivery: false,
                aftype: [],
                afresource: '',
                afdesc: ''
            },
            afformLabelWidth: '120px'
        };
    },
    methods: {
      handleRemove(file, fileList) {
        console.log(file, fileList);
      },
      handlePictureCardPreview(file) {
        this.dialogImageUrl = file.url;
        this.dialogVisible = true;
      },
      handleChange(val) {
        console.log(val);
      },
      submit_adding(){
          console.log('提交成功')
      }
    }
  };
</script>

<style>
    .standardbox{
        /* border: 1px solid black; */
        width: 200px;
    }
    .food_character{
        width: 300px;
    }
    .addkindbox{
        /* padding-left: 300px; */
        /* border: 1px solid black; */
    }
    .el-collapse-item__header{
        /* width: 0px; */
        padding-left: 350px;
        color: #66b1ff;
    }
    .addkindbox_collapse{
        margin-bottom: 10px;
        /* border: 1px solid black; */
    }
    .el-checkbox__inner{
        border-radius: 15px;
    }
</style>