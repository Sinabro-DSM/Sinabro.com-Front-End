const clubData = [
    {
        "src" : "./../../img/시나브로.PNG",
        "src2" : "./../../img/시나브로.PNG",
        "content" : "동아리 내에서 동아리 부원끼리 프로젝트를 진행합니다.\n 기획부터 구현, 배포까지 학생들 스스로 모두 진행합니다.\n 프로젝트는 학년별로 진행하며, 그 안의 분야끼리 또 협업합니다.\n 기획하며 서로 협업함을 통하여 협업 능력을 키우고 구현과 배포를 통해\n 전공 실력 또한 키울 수 있습니다."
    }
]

const clubDataFrame = ({src, src2, content}) => {
    let clubData  = `<article class="dataContentsContainer">
    <img src="${src}"> 
    <img src="${src2}">   
</article>
<p>${content}</p>`;
return clubData;
};

const section = document.getElementById("dataSection");

document.getElementById("dataSection").insertAdjacentHTML("beforeend", clubDataFrame(''));
// clubData.map((data) => {
//     section.insertAdjacentHTML("beforeend", clubDataFrame(data))
// });