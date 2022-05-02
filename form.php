<?php
if($_SERVER['REQUEST_METHOD'] == 'POST') {
    $handle = fopen('text.txt', 'a');
    $line = $_POST['email'] . ' - Welcome, ' . $_POST['name'] . "\n";
    file_put_contents('text.txt', $line, FILE_APPEND);
    echo 'Строка добавлена в файл.';
} else if($_GET['action'] == 'clear') {
    file_put_contents('text.txt', '');
    echo 'Файл очищен!';
} else if($_GET['action'] == 'show') {
    echo str_replace("\n", '<br>', file_get_contents('text.txt')); 
}

?>