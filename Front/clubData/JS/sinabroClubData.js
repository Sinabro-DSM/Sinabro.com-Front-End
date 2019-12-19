// document.getElementById("uploadDate").addEventListener("click", function() {

//     // 브라우저의 현재 날짜를 받아온다.

//     let toDay = new Date();
//     document.getElementById("uploadDate").value = toDay.yyyymmdd();
//   });

//   // 현재 날짜값을 yyyy-mm-dd 형식으로 변환해주는 함수
//   Date.prototype.yyyymmdd = function() {
//       let yyyy = this.getFullYear().toString();
//       let mm = (this.getMonth() + 1).toString();
//       let dd = this.getDate().toString();
//       return  yyyy + "-" + (mm[1] ? mm : "0" + mm[0]) + "-" + (dd[1] ? dd : "0" + dd[0]);
//   }

const studyData = [
  {
    "title": "제목",
    "content": "내용",
    "uploadDate": "2019/01/01",
  }
];

const studyFrame = (title, content, uploadData) => {
  let study = `<article class="contentsContainer">
    <h3>${title}</h3>
    <p>${content}</p>
    <p id="uploadDate">${uploadData}</p>
  </article>`;
  return study;
};

document.getElementById("studySection").insertAdjacentHTML("beforeend", studyFrame());