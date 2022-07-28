<template>
<header>
  <router-link to="/main">
    <img src="../assets/thrinking_logo.png" alt="로고">
  </router-link>
  </header>

</template>
<script>

  export default {
    data: () => ({
      name : 'Header',
       
    }),
  }
  
</script>





<style scoped>/*     background : #065F44;
 */ 
  header{
    /*  position: fixed; */
     width: 100%;
    height: 60px;
    background: white;
    line-height: 60px;
    border-bottom: 3px solid 4d4d4d;
/*     font-family: "Noto Sans";
 */  }
  header a img{
   /*  max-width:13%; height:auto; */
   width: 50px;
   height: 50px;
     
  }

</style>