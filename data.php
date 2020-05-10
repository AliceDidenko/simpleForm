<?php

$data = json_decode(file_get_contents("php://input"));
//print_r($data);

foreach ($data as $key=>$value) {
    $$key = $value;
}

$subject = 'привет, это простая форма с отправкой данных на JSON';
$massage = '
    <html>
        <head>
            <title>'.$subject.'</title>
        </head>
        <body>
            <p>Имя:'.$first_name.' '.$last_name.'</p>
            <p>'.$phone.'</p>
        </body>
    </html>';
$headers = "Content-type: text/html; charset=utf-8 \r\n"; //кодировка письма 
$headers = "From: простая форма на JSON <alisadidenko49@gmail.com>"; // наименование почты сайта
mail($to, $massage, $headers); //отправка письма с помощью php-функции mail
//$to .= ', address@mail.com'; //почта получателя. через запятую можно указать сколько угодно адресов
echo "<p>Письмо отправлено. Спасибо.</p><p>Проверьте почту.</p>"

?>