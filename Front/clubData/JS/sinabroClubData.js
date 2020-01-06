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


const listIndex = document.getElementsByClassName("list");

for(let i=0; i<listIndex.length; i++)
{
  listIndex[i].addEventListener('click', () => 
  {
    clickList();
    console.log('안녕');    
    listIndex[i].style.backgroundColor = "rgba(60, 53, 255, 0.466)";
    listIndex[i].style.color = "rgba(234, 234, 242, 0.932)";
  });
}

function clickList() {
    for(let i=0; i<listIndex.length; i++)
    {
      console.log('배고파');
      listIndex[i].style.backgroundColor = "#030135";
      listIndex[i].style.color = "rgba(174, 174, 255, 0.767);";
    }
}

// {/* <style>
// a.active-color { color:#000; }
// </style> */}

// // $("li").click(function() {
// //     toggleClass(".active-color");
// // });

// $(function(){

//   $('li').click(function(){
//     $('li').removeClass()
//       $(this).addClass('on')
//   })
// })