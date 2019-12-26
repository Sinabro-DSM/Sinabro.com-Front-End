const submitButton = document.querySelector("#submit-button");
const btn = document.querySelector("#get-button");


submitButton.addEventListener('click', () => {
    const fd = new FormData();
    fd.append("title", "title");
    fd.append("content", "content");
    fd.append("img", btn.files[0]);
    fd.append("category", "category");

    axios.post("http://10.156.147.200:8000/data", fd, {
        headers: {
            "Content-Type": "multipart/form-data",
        },
    }).then(res => {
        console.log("성공");
    }).catch(res => {
        console.log(res);
        console.log("안됀다우, 동무");
    })
});


