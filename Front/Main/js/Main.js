const main = {
    "memberWrap": document.querySelector("#main_member_wrap"),
    "hallOfFameCardWrap": document.querySelector("#hall_of_fame_card_wrap"),
    "postedWrap": document.querySelector("#post_posted_wrap"),
    "dotWrap": document.querySelector("#main_screen_dot_wrap > ul"),
    "screen": document.querySelector("#main_screen_contents"),
};

const showMembers = (member) => {
    const li = `<li>
        <img src="../../img/${member.img}" alt="${member.alt}">
        <p>${member.name}</p>
        <p>${member.major}</p>
    </li>`;
    main.memberWrap.insertAdjacentHTML("beforeend", li);
};

const showHallOfFame = (data) => {
    const li = `<li class="hall_of_fame_card">
        <!-- <img src="../../img/${data.img}" alt="${data.alt}"> -->
        <div>
            <p>시나브로 ${data.phase}기</p>
            <h3>${data.name}</h3>
            <p>${data.explan}</p>
        </div>
    </li>`;
    main.hallOfFameCardWrap.insertAdjacentHTML("afterbegin", li);
}

const showBoard = (data) => {
    const div = `<div class="posted">
        <!-- <img src="${data.img}" alt="${data.alt}"> -->
        <a href="${data.url}" title="${data.tagTitle}"><div class="posted_picture"></div></a>
        <h3 class="posted_title">${data.title}</h3>
        <p class="posted_content">${data.content}</p>
    </div>`;
    main.postedWrap.insertAdjacentHTML("beforeend", div);
};

const onClickScreenContent = (num) => {
    fetch("../json/main.json").then((res) => res.json()).then((json) => {
        const url = json.imgUrl[num];
        main.screen.style.backgroundImage = `url("${url}")`
    })
    const target = event.target;
    const dots = target.parentNode.childNodes;
    [...dots].map((child) => {
        child.classList.remove("main_screen_dot_selected");
    });
    target.classList.add("main_screen_dot_selected");
};

window.onload = () => {
    fetch("../json/main.json").then((res) => res.json()).then((json) => {
        json.members.map(showMembers);
        json.recommendBoard.map(showBoard);
        json.seniorMembers.map(showHallOfFame);
        json.imgUrl.forEach((url, num) => {
            const dotForm = `<li class="main_screen_dot" onclick="onClickScreenContent(${num})"></li>`;
            main.dotWrap.insertAdjacentHTML("beforeend", dotForm);
        });
        main.screen.style.backgroundImage = `url("${json.imgUrl[0]}")`
        document.querySelectorAll(".main_screen_dot")[0].classList.add("main_screen_dot_selected");
    })
};



// const listenScroll = () => {
//     let position = window.scrollY;
//     return (document.addEventListener("scroll", () => {
//         let scroll = window.scrollY;
//         if (scroll > position) {
//             console.log('scrollDown');
//         } else {
//             console.log('scrollUp');
//         }
//         position = scroll;
//     }));
// };

// (listenScroll)();