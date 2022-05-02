<?php
if($_SERVER['REQUEST_METHOD'] == 'POST') {
    $handle = fopen('text.txt', 'a');
    if (strrchr($_POST['email'], '.') == '.ru') {
        $line = $_POST['email'] . ' - Добро пожаловать, ' . $_POST['name'] . "\n";
    } else if (strrchr($_POST['email'], '.') == '.by') {
        $line = $_POST['email'] . ' - Добры дзень, ' . $_POST['name'] . "\n";
    } else {
        $line = $_POST['email'] . ' - Welcome, ' . $_POST['name'] . "\n";
    }
    file_put_contents('text.txt', $line, FILE_APPEND);
    header('Location: /#contact');
    echo 'The data has been added to the file';
} else if($_GET['action'] == 'show') {
    echo str_replace("\n", '<br>', file_get_contents('text.txt')); 
}
?>