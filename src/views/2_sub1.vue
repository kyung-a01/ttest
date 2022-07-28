<template>
  <div id="wrap">
        <header id="header">
            <!-- <h1 class="search">
                
            </h1>  -->
            <input type="text" placeholder="검색어를 입력해주세요.">
            <button><img src="./img/search.png" alt="search"></button>
        </header>
        <div id="container">
            <div class="near"> 
                <h2>내 위치 근처<img src="./img/near.png" alt="near"></h2>
                <ul class="cafelist">
                    <li><a href="#none">커피</a></li>
                    <li><a href="#none">라떼</a></li>
                    <li><a href="#none">스무디</a></li>
                    <li><a href="#none">프라페</a></li>
                    <li><a href="#none">빙수</a></li>
                    <li><a href="#none">디저트</a></li>
                    <li><a href="#none">조각케익</a></li>
                    <li><a href="#none">번</a></li>
                </ul>
            </div>
                <div class="list">
                    <ul>
                        <li><img src="./img/list1.png" alt="yogerpresso" class="cafe">
                            <a href="#none">
                            <ul>
                                <li><h2>Yogerpresso</h2></li>
                                    <li>현재 위치에서 5m </li>
                                    <li>
                                        <img src="./img/Star1.png" alt="별점">
                                        <img src="./img/Star1.png" alt="별점">
                                        <img src="./img/Star1.png" alt="별점">
                                        <img src="./img/Star1.png" alt="별점">
                                        <img src="./img/Star2.png" alt="별점"> 
                                    </li>
                                        <li>#요거프레소#딸기요거트 #아이스아메리카노 #아이스스무디 #과일빙수 #아이스크림</li>
                            </ul></a>
                        </li>
                        <li><img src="./img/list2.png" alt="starbucks" class="cafe">
                            <a href="#none">
                            <ul>
                                <li><h2>Starbucks</h2></li>
                                    <li>현재 위치에서 5m </li>
                                    <li>
                                        <img src="./img/Star1.png" alt="별점">
                                <img src="./img/Star1.png" alt="별점">
                                <img src="./img/Star1.png" alt="별점">
                                <img src="./img/Star1.png" alt="별점">
                                <img src="./img/Star1.5.png" alt="별점">  
                                    </li>
                                        <li>#스타벅스 #아메리카노 #조각케익 #스무디 #넓은카페 #신상음료 #텀블러</li>
                            </ul></a>
                        </li>
                        <li><img src="./img/list3.png" alt="Ediya" class="cafe">
                            <a href="#none">
                            <ul>
                                <li><h2>Ediya Coffe</h2></li>
                                    <li>현재 위치에서 5m </li>
                                    <li>
                                        <img src="./img/Star1.png" alt="별점">
                                <img src="./img/Star1.png" alt="별점">
                                <img src="./img/Star1.png" alt="별점">
                                <img src="./img/Star2.png" alt="별점">
                                <img src="./img/Star2.png" alt="별점"> 
                                    </li>
                                        <li>#이디야 #아이스아메리카노 #디저트 #과일빙수 #넓은카페 #가성비</li>
                            </ul></a>
                        </li>
                        <li><img src="./img/list4.png" alt="Ediya" class="cafe">
                            <a href="#none">
                            <ul>
                                <li><h2>A Twosome Place</h2></li>
                                    <li>현재 위치에서 5m </li>
                                    <li>
                                        <img src="./img/Star1.png" alt="별점">
                                <img src="./img/Star1.png" alt="별점">
                                <img src="./img/Star1.png" alt="별점">
                                <img src="./img/Star1.5.png" alt="별점">
                                <img src="./img/Star2.png" alt="별점"> 
                                    </li>
                                        <li>#투썸플레이스 #아이스아메리카노 #디저트 #조각케익 #과일빙수 #넓은카페 </li>
                            </ul></a>
                        </li>
                        <li><img src="./img/list5.png" alt="Ediya" class="cafe">
                            <a href="#none">
                            <ul>
                                <li><h2>Mega Coffe</h2></li>
                                    <li>현재 위치에서 5m </li>
                                    <li>
                                        <img src="./img/Star1.png" alt="별점">
                                <img src="./img/Star1.png" alt="별점">
                                <img src="./img/Star1.png" alt="별점">
                                <img src="./img/Star1.png" alt="별점">
                                <img src="./img/Star2.png" alt="별점"> 
                                    </li>
                                        <li>#메가커피 #아이스아메리카노 #디저트 #프라페 #넓은카페 #가성비</li>
                            </ul></a>
                        </li>
                    </ul>
                </div>
            
        </div>
    </div>
</template>

<script>
export default {

}
</script>

<style scoped>
@font-face {
    font-family: 'GowunDodum-Regular','Noto Sans KR', sans-serif;
    src: url('https://cdn.jsdelivr.net/gh/projectnoonnu/noonfonts_2108@1.1/GowunDodum-Regular.woff') format('woff');
    font-weight: normal;
    font-style: normal;
}

ul,li{list-style: none;}
a{text-decoration: none; color: #333;}
#wrap{
        margin: 0;
    padding: 0;
    border: 0;
    outline: 0;
    width: 780px;
    margin: 0 auto;
    background: rgb(255, 255, 255);
    position: relative;
    box-sizing: border-box;
    min-height: 100%;


        font-family: 'Noto Sans KR', 돋움, sans-serif;
    line-height: 1;



        font-family: 'Noto Sans KR', 돋움, sans-serif;
    line-height: 1;
}
#header{
    position: fixed;
    width: 780px;
    height: 60px;
    background-color: rgb(255, 255, 255);
    box-shadow: 0px 0px 4px  0px gray;
}
/* header */
    input{
        height: 40px;
        width: 78%;
        background-color: rgb(255, 255, 255);
        margin: 8px auto;
        border: #065F44 2px solid;
        border-radius: 20px;
        padding-left: 20px;
        margin-left: 50px;
    }
    header button{
        position: absolute;
        top: 12px;
        left: 695px;
        background-color: #ffffff;
    }
    h1.search img{
        float: right;
        padding: 4px 30px 0 0;
    }
    #container{display: block;
        width: 680px;
        min-height: 1600px;
        margin: 0 auto;
        background: rgb(255, 255, 255);
    }
    div.near h2{
        padding-bottom: 10px;
    }
    div.near{
        padding-top: 80px;
        overflow: hidden;
        text-align: center;
        color: #383838;
    }
    div.near img{
        padding-left: 15px;
        padding-top: 20px;
    }

    div.near ul.cafelist{
        width: 1100px;
        font-family: 'GowunDodum-Regular','Noto Sans KR', sans-serif;
        
    }
    div.near ul.cafelist li{
        display: flex;
        font-size: 1.5rem;
        font-weight: bold;
        margin: 20px 10px 10px 0;
        float: left;
        width: auto;
        height: 40px;
        background-color: #b3b3b3;
        padding: 0 3%;
        margin-right: 15px;
    border-radius: 20px;
    justify-content: center;
    align-items: center;
    color: #ffffff;
    }
    .cafelist{
        display: block;
    }
    .cafelist h2{
        float: left;
        width: 200px;
        height: 50px;
        background-color: #065F44;
    }
    
    .cafelist ul li{
        float: left;
    }
    div.list{
        /* display: flex; */
        width: 100%;
        margin: 0 auto;
        height: 1100px;
    }
    
    .list >ul{
        margin-top: 30px; 
        width: 100%;
    }
    .list> ul> li{
        border-top: 1px solid #afafaf;
        padding: 40px 0;
        display: flex;
        height: 130px;
        width: 100%;
        font-size: 1.25em;
        line-height: 1.3;
    }
    .list> ul> li:last-child{
        border-bottom: 1px solid #afafaf;
    }
    
    .list> ul> li>a >ul> li{
        
    margin-left: 50px;
        width: 490px;
    }
@media screen and (max-width:509px){
    #wrap{
        width: 100%;
        min-width: 380px;
    }

    #header{
        width: 100%;
    }
    input{
        width: 77%;
        margin-left: 30px;
    }
    header button{
        position: absolute;
        top: 15px;
        left: 435px; 
    }
    header button img{
        width: 30px;
    }
    div.near h2{
        width: 509px;
        text-align: center;
    }
    div.near{
        font-size: 0.8rem;
    }
    div.near img{
        width: 20px;
    }
    div.near ul.cafelist li{
        font-size: 1.1rem;
    }
    div.list{
        /* display: flex; */
        width: 95%;
    }
    .list >ul{
        margin-top: 20px;
    }
    .list> ul> li{
        width: 100%;
        font-size: 1rem;
        padding: 20px 0 10px 0;
    }
    .list> ul> li img.cafe{
    width: 90px;
    height: 90px;
    padding-top: 10px;
    }
    .list> ul> li>a >ul> li{
        margin-left: 20px;
            width: 330px;
        }
}
</style>