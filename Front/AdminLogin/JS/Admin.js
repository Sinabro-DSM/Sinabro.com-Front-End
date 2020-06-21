const lg = document.querySelector(".loginButton");

lg.addEventListener('click', () => {
    const id = document.getElementById("idBox").value;
    const pw = document.getElementById("pwBox").value;
    console.log(id, pw);
    axios({
        url: 'http://13.209.77.9:8000/admin',
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