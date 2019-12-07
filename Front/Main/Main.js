const main = {
    "memberWrap": document.querySelector("#main_member_wrap"),
    "hallOfFameCardWrap": document.querySelector("#hall_of_fame_card_wrap"),
    "postedWrap": document.querySelector("#post_posted_wrap"),

};
const members = [
    {
        "img": "circle.png",
        "alt": "picture",
        "name": "김개똥",
        "major": "FE"
    },
];

const olderMembers = [
    {
        "img": "daily_logo.png",
        "alt": "company_logo",
        "phase": 2,
        "name": "박해빈",
        "explan": "연구소 pc솔루션 개발부 WEB혁신팀",
    }, {
        "img": "tutoring_logo.png",
        "alt": "company_logo",
        "phase": 2,
        "name": "김상길",
        "explan": "R&D팀 Front-end Developer",
    },
];

const postData = [
    {
        "img": "",
        "alt": "",
        "title": "title",
        "content": "contentcontentcontentcontentcontentcontentcontentcontentcontentcontentcontentcontentcontentcontentcontent",
    }, {
        "img": "",
        "alt": "",
        "title": "title",
        "content": "contentcontentcontentcontentcontentcontentcontentcontentcontentcontentcontentcontentcontentcontentcontent",
    }, {
        "img": "",
        "alt": "",
        "title": "title",
        "content": "contentcontentcontentcontentcontentcontentcontentcontentcontentcontentcontentcontentcontentcontentcontent",
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
        <div class="posted_picture"></div>
        <h3 class="posted_title">${data.title}</h3>
        <p class="posted_content">${data.content}</p>
    </div>`;
    main.postedWrap.insertAdjacentHTML("beforeend", div);
};

window.onload = () => {
    members.map(showMembers);
    olderMembers.map(showHallOfFame);
    postData.map(showPosted);
};