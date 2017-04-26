<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core" %>
<%@page session="true" %>
<html>
    <head>
        <meta charset="utf-8">
        <link rel="shortcut icon" href='<c:url value="/static/img/favicon_blue.ico" />' type="image/x-icon">
        <link rel="icon" href='<c:url value="/static/img/favicon_blue.ico" />' type="image/x-icon">
        <link type="text/css" rel="stylesheet" href="<c:url value="/static/css/bootstrap.min.css" />"/>
        <link type="text/css" rel="stylesheet" href="<c:url value="/static/css/login.css" />"/>

        <title>Biletyplus login page</title>
    </head>
    <body onload='document.loginForm.username.focus();'>
    <div class="login-block">

        <img src="/resources/img/bp_logo_4x.png" width="203" height="34" alt="Booking.com logo">

        <form id="login-form" name='loginForm' action="<c:url value='/login' />" method='POST'>

            <h1 class="login-form-heading">Partner Statistics</h1>


            <c:if test="${not empty error}">
                <div class="login-block__validation-error error field-error">
                    <div>${error}</div>
                </div>
            </c:if>

            <c:if test="${not empty message}">
                <div class="login-block__validation-message message field-error">
                    <div>${message}</div>
                </div>
            </c:if>

            <fieldset>
                <div class="clearfix">
                    <label for="username">
                        Login name
                    </label>
                    <input type="text" name="username" id="username">
                </div>
            </fieldset>
            <fieldset>
                <div class="clearfix">
                    <label for="password">
                        Password
                    </label>
                    <input type="password" name="password" id="password">
                </div>
            </fieldset>
            <fieldset>
                <input  type="submit" data-action="validate_form" id="login-button" value="Sign in" class="btn btn-primary btn-reduced left login-block__login-button remember">
                <span class="remember">
                    Remember Me:
                    <input type="checkbox" name="remember-me"/>
                </span>
            </fieldset>
            <input type="hidden" name="${_csrf.parameterName}" value="${_csrf.token}"/>

            <div class="login-block__register">
                <br/>
            </div>
        </form>
    </div>

    </body>
</html>