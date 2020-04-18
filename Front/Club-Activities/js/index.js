const activities = {
    algorithm: {
        title: "알고리즘 스터디",
        desc: "부원들끼리 상의하여 일주일동안 풀게 될 알고리즘 문제를 정합니다.\n 정한 알고리즘 문제를 각자 자유롭게 접근하고 풀며 공부합니다. 일주일 뒤 다시 모여 자신의 접근 방식과 풀이를 이야기합니다.\n 그러면서 서로 다른 풀이 방식이나, 새로운 정보를 공유하며\n 더욱 더 넓게 지식을 쌓아갈 수 있습니다."
    }, 
    lightningTalk: {
        title: "라이트닝 토크",
        desc: "매 주 수요일마다 라이트닝 토크를 실시합니다.\n 일주일에 두 명씩 순서를 정하여 실시하고, 주제는 소프트웨어 분야 안에서 자유롭습니다.\n 자신이 자신있다거나, 자신이 깨닫거나 배운 것, 삽질해본 것 등 각자 자유롭게 발표합니다.\n 라이트닝 토크를 통하여 새롭거나 재밌는 전공적 사실을 배우거나 공유할 수 있으며, \n 부원들의 발표 능력 향상 또한 기대할 수 있습니다."
    },
    mentoring: {
        title: "멘토링",
        desc: "2학년과 1학년이 멘토 멘티 관계를 맺어 멘토링을 실시합니다. \n 전공적으로 아직 모든 게 낯설고 어려운 1학년에게 2학년이 도움을 줍니다.\n 나이가 비슷하고 공감대가 많아 선생님보다 더 친근하고 가깝게 다가갈 수 있습니다.\n 전공 교육뿐만 아니라 학교생활에 관한 질문 또한 할 수 있어 1학년들이 동아리 또는 학교생활에\n 적응하는 데에 도움이 됩니다.\n 2학년은 멘토링을 실시함으로써 자신의 전공 능력을 기초부터 다시 탄탄하게 잡을 수 있습니다."
    },
    project: {
        title: "동아리 내 프로젝트",
        desc: "동아리 내에서 동아리 부원끼리 프로젝트를 진행합니다.\n 기획부터 구현, 배포까지 학생들 스스로 모두 진행합니다.\n 프로젝트는 학년별로 진행하며, 그 안의 분야끼리 또 협업합니다.\n 기획하며 서로 협업함을 통하여 협업 능력을 키우고 구현과 배포를 통해\n 전공 실력 또한 키울 수 있습니다."
    },
    retrospect: {
        title: "회고",
        desc: "매주마다 일주일 목표와 일주일 회고를 실시합니다.\n 월요일에는 일주일동안 할 일을 발표하여 자신의 의지를 다질 수 있습니다.\n 금요일에는 일주일동안 '한 일, 못한 일, 해서 좋았던 일, 삶은?' 총 4가지의 질문을 스스로에게 묻고 답합니다.\n 일주일동안 세운 목표를 자신이 얼마나 실천했는지를 돌아볼 수 있습니다.\n 잘 실천했다면 뿌듯함을 느끼고, 목표를 다 이루지 못했다면 반성하며 더 열심히 하려는 의지를 가질 수 있습니다."
    },
    majorStudy: {
        title: "분야별 스터디",
        desc: "일주일에 한 번 동아리 시간에 분야별 스터디 시간을 가집니다.\n 프론트엔드는 프론트엔드끼리, 백엔드는 백엔드끼리 모여 스터디를 실시합니다.\n 소소한 프로젝트를 실시하거나, 개념을 짚어가며 공부하는 시간을 가지기도 합니다.\n 작은 프로젝트의 예시로는 VanilliaJS로 만든 악기 등이 있습니다."
    },
    cards: document.querySelectorAll(".cards"),
    introduce: document.querySelector("#introduceContainer"),
};

const getIntroduceHtml = (part) => {
    const html = `<section id="backgroundContainer" onclick="this.parentNode.innerHTML = ''"></section>
    <section id="introduceContent">
        <img src="./../../img/projectImg.png">
        <div class="introduceTextBox">
            <h2 id="activities-title">${activities[part].title}</h2>
            <p id="activities-desc">${activities[part].desc}</p>
        </div>
    </section>`;
    return html;
}

activities.cards.forEach((card) => {
    card.addEventListener("click", () => {
        const base = activities.introduce;
        base.innerHTML = "";
        base.insertAdjacentHTML("beforeend", getIntroduceHtml(card.getAttribute("id")));
    })
})