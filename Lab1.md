# Лабораторная работа №1

## 1. Скачать и установить Apache
Был скачан и устанвлен веб-сервер Apache.

## 2. Добавить хост с вашим ФИО
Был добавлен хост с именем nekhaychik_irina.
Путь: Локальный диск (C:) > Windows > System32 > drivers > etc > hosts
Открыть файл hosts от администратора и вписать строчку 127.0.0.1 nekhaychik_irina.
![](https://i.imgur.com/M3oDzuA.png)

## 3. Добавить на хост 3 страницы - страница с любым текстом, страница с запрещённым доступом, страница на ошибку 404
Локальный диск (C:) > Apache24 > htdocs
В файле .htaccess:
```
  ErrorDocument 404 /404.html
  ErrorDocument 403 /403.html

  RewriteEngine On
  RewriteRule ^/.htaccess /403.html
```
В файле 403.html:
```html
  <html><body><h1>403</h1></body></html>
```
В файле 404.html:
```html
  <html><body><h1>404</h1></body></html>
```
В файле index.html:
```html
  <html><body><h1>It works!</h1></body></html>
```
Скрины результатов
![](https://i.imgur.com/kXHDuxK.png)
![](https://i.imgur.com/LaoqCL7.png)
![](https://i.imgur.com/B2A88ey.png)
