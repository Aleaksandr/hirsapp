<!DOCTYPE html>
<html lang="en" xmlns:th="http://www.thymeleaf.org">
<head>
    <meta charset="UTF-8"/>
    <title>Hello Thymeleaf!</title>
</head>
<body>
<p th:text="'Hello, ' + ${name} + '!'" />
</body>
</html>