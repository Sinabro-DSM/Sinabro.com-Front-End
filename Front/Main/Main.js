const main = {
    "memberWrap": document.querySelector("#main_member_wrap"),
    "hallOfFameCardWrap": document.querySelector("#hall_of_fame_card_wrap"),
    "postedWrap": document.querySelector("#post_posted_wrap"),
};

const members = [
    {
        "img": "circle.png", "alt": "picture", "name": "이채은", "major": "FE"
    }, {
        "img": "circle.png", "alt": "picture", "name": "이수하", "major": "FE"
    }, {
        "img": "circle.png", "alt": "picture", "name": "장소희", "major": "FE"
    }, {
        "img": "circle.png", "alt": "picture", "name": "권하경", "major": "BE"
    }, {
        "img": "circle.png", "alt": "picture", "name": "신은주", "major": "BE"
    }, {
        "img": "circle.png", "alt": "picture", "name": "김세준", "major": "BE"
    }, {
        "img": "circle.png", "alt": "picture", "name": "신서림", "major": "FE"
    }, {
        "img": "circle.png", "alt": "picture", "name": "양승빈", "major": "BE"
    }, {
        "img": "circle.png", "alt": "picture", "name": "이성진", "major": "FE"
    }, {
        "img": "circle.png", "alt": "picture", "name": "류수영", "major": "BE"
    }, {
        "img": "circle.png", "alt": "picture", "name": "노영은", "major": "BE"
    }, { 
        "img": "circle.png", "alt": "picture", "name": "김형규", "major": "FE" 
    },
];

const olderMembers = [
    {
        "img": "시나브로.png", "alt": "company_logo", "phase": 3, "name": "안남규", "explan": "Back-end Developer",
    }, {
        "img": "dailyHotel.png", "alt": "company_logo", "phase": 3, "name": "박지은", "explan": "Daily Front-end Developer",
    }, {
        "img": "daily_logo.png", "alt": "company_logo", "phase": 2, "name": "박해빈", "explan": "PC솔루션 개발부 WEB혁신팀",
    }, {
        "img": "tutoring_logo.png", "alt": "company_logo", "phase": 2, "name": "길상우", "explan": "R&D팀 Front-end Developer",
    }, {
        "img": "Midas IT.png", "alt": "company_logo", "phase": 3, "name": "김형규", "explan": "MIDAS IT Front-end Developer",
    }, {
        "img": "Madup.svg", "alt": "company_logo", "phase": 3, "name": "류수영", "explan": "테크사업부 Developer",
    },
];

const postData = [
    {
        "url": "../clubData/html/sinabroClubDataAlgorithm.html", "img": "", "alt": "", "title": "title", "content": "contentcontentcontentcontentcontentcontentcontentcontentcontentcontentcontentcontentcontentcontentcontent",
    }, {
        "url": "../clubData/html/sinabroClubDataLightningTalk.html", "img": "", "alt": "", "title": "title", "content": "contentcontentcontentcontentcontentcontentcontentcontentcontentcontentcontentcontentcontentcontentcontent",
    }, {
        "url": "../clubData/html/sinabroClubDataProject.html", "img": "", "alt": "", "title": "title", "content": "contentcontentcontentcontentcontentcontentcontentcontentcontentcontentcontentcontentcontentcontentcontent",
    }
];


const showMembers = (member) => {
    const li = `<li>
        <img src="../img/${member.img}" alt="${member.alt}">
        <p>${member.name}</p>
        <p>${member.major}</p>
    </li>`;
    main.memberWrap.insertAdjacentHTML("beforeend", li);
};

const showHallOfFame = (data) => {
    const li = `<li class="hall_of_fame_card">
        <img src="../img/${data.img}" alt="${data.alt}">
        <div>
            <p>시나브로 ${data.phase}기</p>
            <h3>${data.name}</h3>
            <p>${data.explan}</p>
        </div>
    </li>`;
    main.hallOfFameCardWrap.insertAdjacentHTML("afterbegin", li);
}

const showPosted = (data) => {
    const div = `<div class="posted">
        <!-- <img src="${data.img}" alt="${data.alt}"> -->
        <a href="${data.url}"><div class="posted_picture"></div></a>
        <h3 class="posted_title">${data.title}</h3>
        <p class="posted_content">${data.content}</p>
    </div>`;
    main.postedWrap.insertAdjacentHTML("beforeend", div);
};

const listenScroll = () => {
    let position = window.scrollY;
    return (document.addEventListener("scroll", () => {
        let scroll = window.scrollY;
        if (scroll > position) {
            console.log('scrollDown');
        } else {
            console.log('scrollUp');
        }
        position = scroll;
    }));
};

window.onload = () => {
    (listenScroll)();
    members.map(showMembers);
    olderMembers.map(showHallOfFame);
    postData.map(showPosted);
};