const lg = document.querySelector(".loginBotton");

lg.addEventListener('click', () => {
    const id = document.getElementById("idBox").value;
    const pw = document.getElementById("pwBox").value;
    console.log(id, pw);
    axios({
        url: 'http://10.156.147.200:8000/admin',
        method: 'post',
        data: {
            id: id,
            password: pw
        }
    }).then(response => {
        window.location.href = "../../Main/html/Main.html"
        console.log(response);
    }).catch(response => {
        alert('틀렸어용!');
        console.log(response);
    });
});