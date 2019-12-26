const lg = document.querySelector(".loginBotton");

lg.addEventListener('click', () => {
    const id = document.getElementById("idBox").value;
    const pw = document.getElementById("pwBox").value;
    console.log(id, pw);
    axios({
        url: 'http://10.156.147.200:3000/admin',
        method: 'post',
        data: {
            id: id,
            password: pw
        }
    }).then(response => {
        location.replace('file:///C:/Users/user/Desktop/시나브로/project/sinabro-Front/Front/Main/Main.html');
        console.log(response);
    }).catch(response => {
        alert('틀렸어용!');
        console.log(response);
    });
});


  