
<template>

 <footer>
  <a href="#none"> <img class="maps" src="../assets/1.png" alt=""></a>
  <div id="footer_wrap">
     <ul>
      <router-link to="/main">
        <li>
          <img src="../assets/2.png" alt="">
          홈
        </li>
      </router-link> 
      <router-link to="/cafe">
        <li>
          <img src="../assets/3.png" alt="">
          카페
        </li>
      </router-link> 
      <a href="#none">
        
        <li>
          <img style="visibility:hidden;" src="../assets/4.png" alt="">
        내근처
        </li>
      </a>
      <a href="#none">
        <li>
          <img src="../assets/4.png" alt="">
          뭐마실래?
        </li>
      </a>
      <router-link to="/mypage">
        <li>
          <img src="../assets/5.png" alt="">
          설정
        </li>
      </router-link> 
    </ul>
  </div>
 </footer>
</template>



<script>

  export default {
    data: () => ({
      name : 'FooTer',
       
    }),
  }
  
</script>


<style scoped>
 
  footer{
    width: 100%;
  height: 100%;
   }
  #footer_wrap{
    position: fixed;
    bottom: 0px;
    width: 100%;
    height: 60px;
      background: white;

  }
  span{
        white-space: nowrap;
    text-overflow: ellipsis;
    overflow: hidden;
  }
  footer ul{
    display: flex;
    align-items: baseline;
    justify-content: space-between;
    padding-left: 0px;
    margin-bottom: 0px;
    padding:5px 10px;
  }
  footer ul li{
    color: black;
      }
  footer ul img{
    display: block;
    width:30px; 
    height:auto;
    margin: 0 auto;
  }
 footer img.maps{
   width:60px;
   z-index: 999; 
  position: fixed;
  bottom: 20px;
  margin: 0 auto;
  left: 0px;
  right: 30px;
 

 }
  
 </style>