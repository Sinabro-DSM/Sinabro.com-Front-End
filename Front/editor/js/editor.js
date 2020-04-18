
const submitButton = document.querySelector("#submit-button");

submitButton.addEventListener('click', () => {
    const fd = new FormData();
    const getFileBtn = document.querySelector("#get-button");
    const titleValue = document.querySelector("#_title").value.trim();
    const contentValue = document.querySelector("#content").value;
    const categoryValue = document.querySelector("#category").value;

    // 예외 처리 필요 
    // try {
        
    // } 
    // catch {

    // } 

    fd.append("title", titleValue);
    fd.append("content", contentValue);
    fd.append("img", getFileBtn.files[0]);
    fd.append("category", categoryValue);

    axios.post("http://10.156.147.200:8000/data", fd, {
        headers: {
            "Content-Type": "multipart/form-data",
        },
    }).then(res => {
        console.log("success");
    }).catch(res => {
        console.log(res);
    });
});
