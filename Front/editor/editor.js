const submitButton = document.querySelector("#submit-button");

submitButton.addEventListener('click', post);

http.open("POST", "10.156.147.200:8000/data", true);
http.setRequestHeader('Content-type', "x-access-token");

