const content = `<div id="sidebar">
    <a href="../../Main/html/Main.html">
        <img src="./../../img/sinabroLogo(white+blue).png" class="sinabroLogo">
    </a>
    <ul class="clubActiveList">
        <h3>동아리 활동</h3>
        <a href="../../Club-Activities/html/Main.html"><li class="list">동아리 내 프로젝트</li></a>
        <a href="../../Club-Activities/html/Main.html"><li class="list">라이트닝 토크</li></a>
        <a href="../../Club-Activities/html/Main.html"><li class="list">멘토링</li></a>
        <a href="../../Club-Activities/html/Main.html"><li class="list">분야별 스터디</li></a>
        <a href="../../Club-Activities/html/Main.html"><li class="list">알고리즘 스터디</li></a>
        <a href="../../Club-Activities/html/Main.html"><li class="list">회고</li></a>
    </ul>
    <ul class="clubActiveList">
        <h3>동아리 자료</h3>
        <a href="../../clubData/html/LightningTalk.html"><li class="list">라이트닝 토크</li></a>
        <a href="../../clubData/html/Project.html"><li class="list">프로젝트</li></a>
    </ul>
</div>`;

document.getElementById("asideNavContainer").innerHTML = content;