<template>
  <div>
    <!--    <nav>
      <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link>|
      <router-link to="/Detail">Product디테일</router-link> |
      <router-link to="/Create">Product크리에이트</router-link> |
    </nav> -->






    <!--    <Header /> -->
    <router-view /><!-- 내용이 변경되는 영역 -->
    <!--   <Footer></Footer> -->
  </div>

</template>

<script>
import HelloWorld from "./components/HelloWorld";

export default {
  name: "App",
  components: {
    HelloWorld
  }
};


</script>

<style>
@font-face {
  font-family: 'GowunDodum-Regular';
  src: url('https://cdn.jsdelivr.net/gh/projectnoonnu/noonfonts_2108@1.1/GowunDodum-Regular.woff') format('woff');
  font-weight: normal;
  font-style: normal;
}

#app {
  font-family: 'GowunDodum-Regular', Arial, sans-serif;
  /* text-align: center; */
}

* {
  margin: 0;
  padding: 0;
  border: 0;
  outline: 0;
  text-decoration: none;
}

ul,
ol {
  list-style: none;
  text-decoration: none;

}

a {
  text-decoration: none;
}
</style>


 