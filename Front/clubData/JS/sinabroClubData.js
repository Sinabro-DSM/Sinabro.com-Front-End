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


{/* <style>
a.active-color { color:#000; }
</style> */}

// $("li").click(function() {
//     toggleClass(".active-color");
// });

$(function(){

  $('li').click(function(){
    $('li').removeClass()
      $(this).addClass('on')
  })
})