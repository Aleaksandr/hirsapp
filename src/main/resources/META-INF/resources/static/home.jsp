<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8" %>
<%@ taglib prefix="spring" uri="http://www.springframework.org/tags" %>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core" %>
<!DOCTYPE html>
<html>
<head>
    <title>Hello World!</title>
</head>
    <body>
        <h1>Hello <b><c:out value="${pageContext.request.remoteUser}"/></b></h1>

        <h2><a href="<spring:url value="/main" htmlEscape="true"/>">Go to Main Page</a></h2>

        <c:choose>
            <c:when test="${pageContext.request.userPrincipal.name != null}">
                <form action="/logout" method="post">
                    <h5>you sign in as </h5><h5>${pageContext.request.userPrincipal.name}</h5>
                    <input type="submit" value="Sign Out"/>
                    <input type="hidden" name="${_csrf.parameterName}" value="${_csrf.token}"/>
                </form>
            </c:when>
            <c:otherwise>
                <h2><a href="<spring:url value="/login" htmlEscape="true"/>">Sign In</a></h2>
            </c:otherwise>
        </c:choose>

    </body>
</html>