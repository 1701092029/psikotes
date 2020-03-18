<template>
  <div>
      <div>login Paged</div>
      <div>
          <el-container>
                            <el-header>Header</el-header>
                            <el-main>
                                <center>
                                    <el-card class="box-card"  >
                                       logo
                                       <el-input placeholder="Kode Verifikasi" v-model="input" size="medium"></el-input>
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
     data() {
    return {
      input: ''
    }
  },

}
</script>

<style>

</style>
