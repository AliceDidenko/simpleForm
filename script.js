let sendMessage = document.getElementById("sendMessage");
let form = document.getElementById("simpleForm"),
    url = form.action;

form.onsubmit = function(e) {
    e.preventDefault();

    let data = {};
    data.first_name = document.getElementById("first_name").value;
    data.last_name = document.getElementById("last_name").value;
    data.phone = document.getElementById("phone").value;
    data.to = document.getElementById("to").value;

    // for (let i = 0; len = form.clientHeight; i++) {
    //     let input = form[i];
    //     if (input.name) {
    //         data[input.name] =input.value;
    //     }
    // }

    let jsonStr = JSON.stringify(data);
    console.log(data, jsonStr);
    let xhr = new XMLHttpRequest();
    xhr.open('POST', url, true);
    xhr.setRequestHeader('Content-Type', 'application/json; charset=UTF-8');
    xhr.onratechange = function(){
        if (xhr.readyState != 4) return;
        if (xhr.status != 200) {
            alert(xhr.status + ':' + xhr.statusText);
            sendMessage.innerHTML = xhr.statusText;
        } else {
            console.log(xhr.response);
            alert(xhr.responseText);
            sendMessage.innerHTML = xhr.responseText;
            form.reset();
            // очищение формы
        }
    }
    console.log(xhr.statusText);
    xhr.send(jsonStr);
}