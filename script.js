let sendMessage = document.getElementById("sendMessage");
let form = document.getElementById("simpleForm");
//let url = form.action;

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
    //xhr.open('GET', url, true);
    xhr.open('POST', "data.php", true);

    xhr.setRequestHeader('Content-Type', 'application/json; charset=UTF-8'); //Передает правильный заголовок в запросе
    xhr.onratechange = function(){ //Вызывает функцию при смене состояния
        if (xhr.readyState == 0) {console.log("у нас прежнее состояние.не открылся(((");}
        if (xhr.readyState != 4) return; // запрос не завершен
        if (xhr.status != 200) {
            alert(xhr.status + ':' + xhr.statusText);
            sendMessage.innerHTML = xhr.statusText;
        } else {
            // Запрос завершен. Здесь можно обрабатывать результат.
            console.log(xhr.response);
            alert(xhr.responseText);
            sendMessage.innerHTML = xhr.responseText;
            form.reset();
            // очищение формы
        }
    }
    console.log("АААААА ПОЧЕМУ Я ТАКАЯ БОМ-БОМ ААААААА xhr.statusText: ", xhr.statusText);
    xhr.send(jsonStr);
}