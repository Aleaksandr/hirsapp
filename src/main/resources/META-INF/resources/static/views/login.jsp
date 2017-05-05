<%@ taglib prefix="spring" uri="http://www.springframework.org/tags" %>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core" %>
<%@ taglib prefix="form" uri="http://www.springframework.org/tags/form" %>

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="utf-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <meta name="description" content="">
    <meta name="author" content="Aleksandr.Hirs">

    <title>Log in with your account</title>

    <link href="<spring:url value="/static/css/bootstrap.min.css" htmlEscape="true"/>" rel="stylesheet">
    <link href="<spring:url value="/static/css/common.css" htmlEscape="true"/>" rel="stylesheet">

    <!-- HTML5 shim and Respond.js for IE8 support of HTML5 elements and media queries -->
    <!--[if lt IE 9]>
    <script src="https://oss.maxcdn.com/html5shiv/3.7.2/html5shiv.min.js"></script>
    <script src="https://oss.maxcdn.com/respond/1.4.2/respond.min.js"></script>
    <![endif]-->
</head>

    <body>

    <div class="container">

        <form method="POST" action="<spring:url value="/login" htmlEscape="true"/>" class="form-signin">
            <h2 class="form-heading">Log in</h2>

            <div class="form-group ${error != null ? 'has-error' : ''}">
                <span>${message}</span>
                <input name="username" type="text" class="form-control" placeholder="Login"
                       autofocus="true"/>
                <input name="password" type="password" class="form-control" placeholder="Password"/>
                <span>${error}</span>
                <input type="hidden" name="${_csrf.parameterName}" value="${_csrf.token}"/>
                <span class="remember">
                    Remember Me:
                    <input type="checkbox" name="remember-me"/>
                </span>
                <button class="btn btn-lg btn-primary btn-block" type="submit">Log In</button>
                <h4 class="text-center"><a href="<spring:url value="/registration" htmlEscape="true"/>">Create an account</a></h4>
            </div>

        </form>

    </div>
    <!-- /container -->
    <script src="<spring:url value="/static/js/bootstrap.min.js" htmlEscape="true"/>"></script>
    <script src="<spring:url value="/static/js/jquery/1.11.2/jquery.min.js" htmlEscape="true"/>"></script>
    </body>
</html>