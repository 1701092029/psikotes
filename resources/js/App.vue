<template>
 <router-view/>
</template>

<script>
export default {
  name: "App",
  data() {
    return {
      input: ''
    }
  },
  methods: {
    goToLogin() {
      this.$router.push("/login");
    },
  }

  //navbar
};



</script>

<style>

/* card */
/* .text {
    font-size: 14px;
  }

  .item {
    padding: 18px 0;
  }

  .box-card {
    width: 480px;
  } */



.el-card {

    width: 500px;
    background-color: #E9EEF3;
    text-emphasis: none;
  }





 .el-header, .el-footer {
    background-color: #054e15;
    color: #fff;
    text-align: left;
    line-height: 60px;
  }

  .el-aside {
    background-color: #D3DCE6;
    color: #333;
    text-align: center;
    line-height: 200px;
  }

  .el-main {
    background-color: #E9EEF3;
    color: #333;
    text-align: center;
    text-align-last: center;
    size: 200px;
    line-height:60px;
  }



  .el-container:nth-child(1) .el-aside,
  .el-container:nth-child(6) .el-aside {
    line-height: 260px;
  }

  .el-container:nth-child(7) .el-aside {
    line-height: 320px;
  }
 .box-card {
     margin-top: 90px;
    width: 360px;
    height: 330px;
    margin-bottom: 130px;

  }


</style>
