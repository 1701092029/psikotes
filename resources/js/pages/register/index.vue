<template>
 <div>
      <div>Reister Paged</div>
      <div>
          <el-container>
                            <el-header>Header</el-header>
                            <el-main>
                                 <el-table
                                    :data="tableData"
                                    border="border=0"
                                    style="width: 100%">
                                    <el-table-column
                                    prop="date"
                                    label="Date"
                                    width="180">
                                    </el-table-column>
                                    <el-table-column
                                    prop="name"
                                    label="Name"
                                    width="180">
                                    </el-table-column>
                                    <el-table-column
                                    prop="address"
                                    label="Address">
                                    </el-table-column>
                                </el-table>


                                <center>
                                    <el-card class="box-card"  >

                                       logo
                                       <el-input placeholder="input Name" v-model="input" size="medium">nama</el-input>
                                       <el-input placeholder="input Email" v-model="input" size="medium">email</el-input>
                                       <el-input placeholder="input Password" v-model="input" size="medium">password</el-input>
                                       <el-input placeholder="input Confirm Password" v-model="input" size="medium">confirm password</el-input>
                                       <el-button type="primary" >Verifikasi</el-button>
                                    </el-card>
                                </center>
                            </el-main>
            </el-container>
      </div>
  </div>

</template>
<script>
export default {

}
</script>

<style>
.box-card {
     margin-top: 90px;
    width: 560px;
    height: 530px;
    margin-bottom: 130px;

  }

</style>
